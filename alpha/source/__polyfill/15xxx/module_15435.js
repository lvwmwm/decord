// Module ID: 15435
// Function ID: 15436
// Dependencies: [15415, 15436]

// Module 15435
import _mod15415 from "module_15415" /* 15415 */;
import _mod15436 from "module_15436" /* 15436 */;

let tmp4;
let tmp = _mod15415.process && _mod15415.process.versions;
if (!tmp) {
  tmp = _mod15415.Deno && _mod15415.Deno.version;
  _mod15415.Deno && _mod15415.Deno.version;
}
let tmp3;
if (tmp && tmp.v8) {
  let num3;
  const parts = str.split(".");
  if (parts[0] <= 0) {
    num3 = +parts[0] + parts[1];
  } else {
    num3 = 1;
  }
  tmp3 = num3;
  tmp4 = parts;
}
let match1 = !tmp3 && _mod15436;
if (match1) {
  const str3 = _mod15436;
  const match = str3.match(/Edge\/(\d+)/);
  let tmp8 = !match;
  if (match) {
    tmp8 = match[1] >= 74;
  }
  match1 = tmp8;
  tmp4 = match;
}
if (match1) {
  const str4 = _mod15436;
  match1 = str4.match(/Chrome\/(\d+)/);
  tmp4 = match1;
}
if (match1) {
  tmp3 = +tmp4[1];
}

export default tmp3;
