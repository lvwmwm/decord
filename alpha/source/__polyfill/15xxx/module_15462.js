// Module ID: 15462
// Function ID: 15463
// Dependencies: [15442, 15463]

// Module 15462
import _mod15442 from "module_15442" /* 15442 */;
import _mod15463 from "module_15463" /* 15463 */;

let tmp4;
let tmp = _mod15442.process && _mod15442.process.versions;
if (!tmp) {
  tmp = _mod15442.Deno && _mod15442.Deno.version;
  _mod15442.Deno && _mod15442.Deno.version;
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
let match1 = !tmp3 && _mod15463;
if (match1) {
  const str3 = _mod15463;
  const match = str3.match(/Edge\/(\d+)/);
  let tmp8 = !match;
  if (match) {
    tmp8 = match[1] >= 74;
  }
  match1 = tmp8;
  tmp4 = match;
}
if (match1) {
  const str4 = _mod15463;
  match1 = str4.match(/Chrome\/(\d+)/);
  tmp4 = match1;
}
if (match1) {
  tmp3 = +tmp4[1];
}

export default tmp3;
