// Module ID: 16488
// Function ID: 16489
// Dependencies: [16468, 16489]

// Module 16488
import _mod16468 from "module_16468" /* 16468 */;
import _mod16489 from "module_16489" /* 16489 */;

let tmp4;
let tmp = _mod16468.process && _mod16468.process.versions;
if (!tmp) {
  tmp = _mod16468.Deno && _mod16468.Deno.version;
  _mod16468.Deno && _mod16468.Deno.version;
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
let match1 = !tmp3 && _mod16489;
if (match1) {
  const str3 = _mod16489;
  const match = str3.match(/Edge\/(\d+)/);
  let tmp8 = !match;
  if (match) {
    tmp8 = match[1] >= 74;
  }
  match1 = tmp8;
  tmp4 = match;
}
if (match1) {
  const str4 = _mod16489;
  match1 = str4.match(/Chrome\/(\d+)/);
  tmp4 = match1;
}
if (match1) {
  tmp3 = +tmp4[1];
}

export default tmp3;
