// Module ID: 15556
// Function ID: 15557
// Dependencies: [15536, 15557]

// Module 15556
import _mod15536 from "module_15536" /* 15536 */;
import _mod15557 from "module_15557" /* 15557 */;

let tmp4;
let tmp = _mod15536.process && _mod15536.process.versions;
if (!tmp) {
  tmp = _mod15536.Deno && _mod15536.Deno.version;
  _mod15536.Deno && _mod15536.Deno.version;
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
let match1 = !tmp3 && _mod15557;
if (match1) {
  const str3 = _mod15557;
  const match = str3.match(/Edge\/(\d+)/);
  let tmp8 = !match;
  if (match) {
    tmp8 = match[1] >= 74;
  }
  match1 = tmp8;
  tmp4 = match;
}
if (match1) {
  const str4 = _mod15557;
  match1 = str4.match(/Chrome\/(\d+)/);
  tmp4 = match1;
}
if (match1) {
  tmp3 = +tmp4[1];
}

export default tmp3;
