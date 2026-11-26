// Module ID: 15570
// Function ID: 15571
// Dependencies: [15550, 15571]

// Module 15570
import _mod15550 from "module_15550" /* 15550 */;
import _mod15571 from "module_15571" /* 15571 */;

let tmp4;
let tmp = _mod15550.process && _mod15550.process.versions;
if (!tmp) {
  tmp = _mod15550.Deno && _mod15550.Deno.version;
  _mod15550.Deno && _mod15550.Deno.version;
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
let match1 = !tmp3 && _mod15571;
if (match1) {
  const str3 = _mod15571;
  const match = str3.match(/Edge\/(\d+)/);
  let tmp8 = !match;
  if (match) {
    tmp8 = match[1] >= 74;
  }
  match1 = tmp8;
  tmp4 = match;
}
if (match1) {
  const str4 = _mod15571;
  match1 = str4.match(/Chrome\/(\d+)/);
  tmp4 = match1;
}
if (match1) {
  tmp3 = +tmp4[1];
}

export default tmp3;
