// Module ID: 15485
// Function ID: 15486
// Dependencies: [15465, 15486]

// Module 15485
import _mod15465 from "module_15465" /* 15465 */;
import _mod15486 from "module_15486" /* 15486 */;

let tmp4;
let tmp = _mod15465.process && _mod15465.process.versions;
if (!tmp) {
  tmp = _mod15465.Deno && _mod15465.Deno.version;
  _mod15465.Deno && _mod15465.Deno.version;
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
let match1 = !tmp3 && _mod15486;
if (match1) {
  const str3 = _mod15486;
  const match = str3.match(/Edge\/(\d+)/);
  let tmp8 = !match;
  if (match) {
    tmp8 = match[1] >= 74;
  }
  match1 = tmp8;
  tmp4 = match;
}
if (match1) {
  const str4 = _mod15486;
  match1 = str4.match(/Chrome\/(\d+)/);
  tmp4 = match1;
}
if (match1) {
  tmp3 = +tmp4[1];
}

export default tmp3;
