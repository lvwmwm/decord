// Module ID: 16491
// Function ID: 16492
// Dependencies: [16471, 16492]

// Module 16491
import _mod16471 from "module_16471" /* 16471 */;
import _mod16492 from "module_16492" /* 16492 */;

let tmp4;
let tmp = _mod16471.process && _mod16471.process.versions;
if (!tmp) {
  tmp = _mod16471.Deno && _mod16471.Deno.version;
  _mod16471.Deno && _mod16471.Deno.version;
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
let match1 = !tmp3 && _mod16492;
if (match1) {
  const str3 = _mod16492;
  const match = str3.match(/Edge\/(\d+)/);
  let tmp8 = !match;
  if (match) {
    tmp8 = match[1] >= 74;
  }
  match1 = tmp8;
  tmp4 = match;
}
if (match1) {
  const str4 = _mod16492;
  match1 = str4.match(/Chrome\/(\d+)/);
  tmp4 = match1;
}
if (match1) {
  tmp3 = +tmp4[1];
}

export default tmp3;
