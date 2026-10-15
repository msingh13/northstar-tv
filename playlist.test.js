import test from 'node:test';
import assert from 'node:assert/strict';
import {parseM3U,safeUrl} from './playlist.js';
import fs from 'node:fs';
test('parses quoted commas, groups, language and relative source URLs',()=>{
 const items=parseM3U('#EXTM3U\n#EXTINF:-1 group-title="News, World" tvg-language="Greek",News One\nstream.m3u8','https://example.com/list.m3u');
 assert.equal(items[0].name,'News One');assert.equal(items[0].group,'News, World');assert.equal(items[0].url,'https://example.com/stream.m3u8');assert.equal(items[0].language,'Greek');
});
test('rejects unsafe schemes and non-playlist pages',()=>{assert.equal(safeUrl('javascript:alert(1)'),null);assert.equal(safeUrl('http://example.com'),null);assert.throws(()=>parseM3U('<html>login</html>'));assert.throws(()=>parseM3U('#EXTM3U\n#EXTINF:-1,Bad\njavascript:alert(1)'));});
test('classifies imported films and series',()=>{const items=parseM3U('#EXTM3U\n#EXTINF:-1 group-title="Movies",Film\nhttps://example.com/f.mp4\n#EXTINF:-1 group-title="TV Shows",Episode\nhttps://example.com/e.mp4');assert.deepEqual(items.map(i=>i.type),['movie','series']);});
test('rejects HLS segment manifests as channel lists',()=>{assert.throws(()=>parseM3U('#EXTM3U\n#EXT-X-TARGETDURATION:10\nsegment.ts'));});
test('sample catalog has unique IDs and secure playable sources',()=>{const c=JSON.parse(fs.readFileSync(new URL('./catalog.json',import.meta.url)));assert.equal(new Set(c.map(x=>x.id)).size,c.length);assert(c.length>=20);assert(c.every(x=>safeUrl(x.url)));assert.equal(c.filter(x=>x.type==='movie').length,3);});
test('favorites keep channel identity after reordering and do not cross playlists',()=>{
 const a='#EXTINF:-1,One\nhttps://example.com/a.m3u8\n',b='#EXTINF:-1,Two\nhttps://example.com/b.m3u8\n';
 const first=parseM3U('#EXTM3U\n'+a+b),second=parseM3U('#EXTM3U\n'+b+a);
 assert.equal(first[0].id,second[1].id);assert.notEqual(first[0].id,second[0].id);
});
test('rejects a real HLS media manifest containing EXTINF segments',()=>assert.throws(()=>parseM3U('#EXTM3U\n#EXT-X-TARGETDURATION:10\n#EXTINF:10,\nhttps://example.com/segment.ts')));
test('official guide never masquerades as included video streams',()=>{const g=JSON.parse(fs.readFileSync(new URL('./guide.json',import.meta.url)));assert.equal(g.length,12);assert(g.every(x=>x.type==='guide'&&!x.url&&safeUrl(x.website)&&safeUrl(x.source)));});
