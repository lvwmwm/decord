// Module ID: 15519
// Function ID: 15520
// Dependencies: [15499, 15520]

// Module 15519
import _mod15499 from "module_15499" /* 15499 */;
import _mod15520 from "module_15520" /* 15520 */;

let tmp4;
let tmp = _mod15499.process && _mod15499.process.versions;
if (!tmp) {
  tmp = _mod15499.Deno && _mod15499.Deno.version;
  _mod15499.Deno && _mod15499.Deno.version;
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
let match1 = !tmp3 && _mod15520;
if (match1) {
  const str3 = _mod15520;
  const match = str3.match(/Edge\/(\d+)/);
  let tmp8 = !match;
  if (match) {
    tmp8 = match[1] >= 74;
  }
  match1 = tmp8;
  tmp4 = match;
}
if (match1) {
  const str4 = _mod15520;
  match1 = str4.match(/Chrome\/(\d+)/);
  tmp4 = match1;
}
if (match1) {
  tmp3 = +tmp4[1];
}

export default tmp3;
