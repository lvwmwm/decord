// Module ID: 16493
// Function ID: 16494
// Dependencies: [16473, 16494]

// Module 16493
import _mod16473 from "module_16473" /* 16473 */;
import _mod16494 from "module_16494" /* 16494 */;

let tmp4;
let tmp = _mod16473.process && _mod16473.process.versions;
if (!tmp) {
  tmp = _mod16473.Deno && _mod16473.Deno.version;
  _mod16473.Deno && _mod16473.Deno.version;
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
let match1 = !tmp3 && _mod16494;
if (match1) {
  const str3 = _mod16494;
  const match = str3.match(/Edge\/(\d+)/);
  let tmp8 = !match;
  if (match) {
    tmp8 = match[1] >= 74;
  }
  match1 = tmp8;
  tmp4 = match;
}
if (match1) {
  const str4 = _mod16494;
  match1 = str4.match(/Chrome\/(\d+)/);
  tmp4 = match1;
}
if (match1) {
  tmp3 = +tmp4[1];
}

export default tmp3;
