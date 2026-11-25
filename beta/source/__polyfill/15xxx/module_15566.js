// Module ID: 15566
// Function ID: 15567
// Dependencies: [15546, 15567]

// Module 15566
import _mod15546 from "module_15546" /* 15546 */;
import _mod15567 from "module_15567" /* 15567 */;

let tmp4;
let tmp = _mod15546.process && _mod15546.process.versions;
if (!tmp) {
  tmp = _mod15546.Deno && _mod15546.Deno.version;
  _mod15546.Deno && _mod15546.Deno.version;
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
let match1 = !tmp3 && _mod15567;
if (match1) {
  const str3 = _mod15567;
  const match = str3.match(/Edge\/(\d+)/);
  let tmp8 = !match;
  if (match) {
    tmp8 = match[1] >= 74;
  }
  match1 = tmp8;
  tmp4 = match;
}
if (match1) {
  const str4 = _mod15567;
  match1 = str4.match(/Chrome\/(\d+)/);
  tmp4 = match1;
}
if (match1) {
  tmp3 = +tmp4[1];
}

export default tmp3;
