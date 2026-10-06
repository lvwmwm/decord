// Module ID: 13810
// Function ID: 13811
// Dependencies: [13790, 13811]

// Module 13810
import _mod13790 from "module_13790" /* 13790 */;
import _mod13811 from "module_13811" /* 13811 */;

let tmp4;
let tmp = _mod13790.process && _mod13790.process.versions;
if (!tmp) {
  tmp = _mod13790.Deno && _mod13790.Deno.version;
  _mod13790.Deno && _mod13790.Deno.version;
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
let match1 = !tmp3 && _mod13811;
if (match1) {
  const str3 = _mod13811;
  const match = str3.match(/Edge\/(\d+)/);
  let tmp8 = !match;
  if (match) {
    tmp8 = match[1] >= 74;
  }
  match1 = tmp8;
  tmp4 = match;
}
if (match1) {
  const str4 = _mod13811;
  match1 = str4.match(/Chrome\/(\d+)/);
  tmp4 = match1;
}
if (match1) {
  tmp3 = +tmp4[1];
}

export default tmp3;
