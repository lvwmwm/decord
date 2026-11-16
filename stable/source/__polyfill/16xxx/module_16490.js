// Module ID: 16490
// Function ID: 16491
// Dependencies: [16470, 16491]

// Module 16490
import _mod16470 from "module_16470" /* 16470 */;
import _mod16491 from "module_16491" /* 16491 */;

let tmp4;
let tmp = _mod16470.process && _mod16470.process.versions;
if (!tmp) {
  tmp = _mod16470.Deno && _mod16470.Deno.version;
  _mod16470.Deno && _mod16470.Deno.version;
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
let match1 = !tmp3 && _mod16491;
if (match1) {
  const str3 = _mod16491;
  const match = str3.match(/Edge\/(\d+)/);
  let tmp8 = !match;
  if (match) {
    tmp8 = match[1] >= 74;
  }
  match1 = tmp8;
  tmp4 = match;
}
if (match1) {
  const str4 = _mod16491;
  match1 = str4.match(/Chrome\/(\d+)/);
  tmp4 = match1;
}
if (match1) {
  tmp3 = +tmp4[1];
}

export default tmp3;
