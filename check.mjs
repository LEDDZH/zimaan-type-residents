import assert from 'node:assert/strict';
import {readFile,access} from 'node:fs/promises';
import {ARCHIVE} from './docs/data.js';
import {interpretHand} from './docs/hand-controls.js';
assert.equal(ARCHIVE.length,228);assert.equal(new Set(ARCHIVE.map(d=>d.id)).size,228);
assert.equal(ARCHIVE.filter(d=>!d.description).length,28);
for(const d of ARCHIVE){await access('docs/'+d.image);assert.ok(d.url.endsWith(String(d.id)));}
assert.equal(ARCHIVE.filter(d=>d.description.includes('草堆街')).length,5);
// Representative open palm, closed fist and pinched index fixtures.
let open=Array.from({length:21},()=>({x:.5,y:.5}));open[0]={x:.5,y:.9};open[9]={x:.5,y:.55};
for(const [tip,pip,x]of [[8,6,.3],[12,10,.45],[16,14,.6],[20,18,.75]]){open[pip]={x,y:.5};open[tip]={x,y:.15};}open[4]={x:.1,y:.6};
assert.ok(interpretHand(open).open);assert.ok(!interpretHand(open).pinch);
const fist=structuredClone(open);for(const tip of [8,12,16,20])fist[tip]={x:.5,y:.65};
assert.ok(interpretHand(fist).fist);assert.ok(!interpretHand(fist).open);
const pinch=structuredClone(open);pinch[4]={...pinch[8],x:pinch[8].x+.025};assert.ok(interpretHand(pinch).pinch);assert.ok(!interpretHand(pinch).fist);
for(const factor of [.5,2]){const scaled=pinch.map(p=>({x:p.x*factor,y:p.y*factor}));assert.ok(interpretHand(scaled).pinch);}
await access('docs/assets/hand_landmarker.task');await access('docs/assets/mediapipe/wasm/vision_wasm_internal.wasm');
const html=await readFile('docs/index.html','utf8');assert.ok(!html.includes('qa-hand'));
console.log('PASS: 228 records + images + source IDs; 28 honest blanks; street lookup; open/fist/pinch + scale invariance; local model assets.');
