export function safeUrl(value, base) {
 try { const u = new URL(value, base); return u.protocol === 'https:' ? u.href : null; } catch { return null; }
}
export function parseM3U(text, base) {
 if (!/^\s*#EXTM3U/i.test(text)) throw new Error('This is not an M3U playlist. Use a direct playlist link or an .m3u file.');
 const items=[]; let meta=null;
 for (const raw of text.split(/\r?\n/)) {
  const line=raw.trim();
  if (line.startsWith('#EXTINF:')) {
   const attrs={}; for (const match of line.matchAll(/([\w-]+)="([^"]*)"/g)) attrs[match[1]]=match[2];
   // A comma inside a quoted attribute is not the name delimiter.
   let quoted=false, separator=-1;
   for(let i=0;i<line.length;i++){if(line[i]==='"')quoted=!quoted;else if(line[i]===','&&!quoted){separator=i;break;}}
   meta={name:separator>=0?line.slice(separator+1).trim():'Untitled channel',group:attrs['group-title']||'Imported',language:attrs['tvg-language']||'Unspecified'};
  } else if(line && !line.startsWith('#') && meta) {
   const url=safeUrl(line,base);
   if(url){const type=/series|tv shows/i.test(meta.group)?'series':/movies|films|vod/i.test(meta.group)?'movie':'live';items.push({...meta,id:`import-${items.length}`,url,type,quality:'Source',mark:meta.name.split(/\s+/).map(w=>w[0]).join('').slice(0,3),description:'Imported from your playlist. Program information and playback depend on your source.',source:null,website:null});}
   meta=null;
   if(items.length>=5000)break;
  }
 }
 if(!items.length)throw new Error('No HTTPS channel entries found. HTTP streams cannot play on this secure site. Use a channel playlist, not a single HLS video manifest.');
 return items;
}
