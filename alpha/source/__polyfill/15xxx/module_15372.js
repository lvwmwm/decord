// Module ID: 15372
// Function ID: 15373
// Dependencies: [15352, 15373]

// Module 15372
import _mod15352 from "module_15352" /* 15352 */;
import _mod15373 from "module_15373" /* 15373 */;

let tmp4;
let tmp = _mod15352.process && _mod15352.process.versions;
if (!tmp) {
  tmp = _mod15352.Deno && _mod15352.Deno.version;
  _mod15352.Deno && _mod15352.Deno.version;
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
let match1 = !tmp3 && _mod15373;
if (match1) {
  const str3 = _mod15373;
  const match = str3.match(/Edge\/(\d+)/);
  let tmp8 = !match;
  if (match) {
    tmp8 = match[1] >= 74;
  }
  match1 = tmp8;
  tmp4 = match;
}
if (match1) {
  const str4 = _mod15373;
  match1 = str4.match(/Chrome\/(\d+)/);
  tmp4 = match1;
}
if (match1) {
  tmp3 = +tmp4[1];
}

export default tmp3;
