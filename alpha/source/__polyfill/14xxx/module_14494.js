// Module ID: 14494
// Function ID: 14495
// Dependencies: [14474, 14495]

// Module 14494
import _mod14474 from "module_14474" /* 14474 */;
import _mod14495 from "module_14495" /* 14495 */;

let tmp4;
let tmp = _mod14474.process && _mod14474.process.versions;
if (!tmp) {
  tmp = _mod14474.Deno && _mod14474.Deno.version;
  _mod14474.Deno && _mod14474.Deno.version;
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
let match1 = !tmp3 && _mod14495;
if (match1) {
  const str3 = _mod14495;
  const match = str3.match(/Edge\/(\d+)/);
  let tmp8 = !match;
  if (match) {
    tmp8 = match[1] >= 74;
  }
  match1 = tmp8;
  tmp4 = match;
}
if (match1) {
  const str4 = _mod14495;
  match1 = str4.match(/Chrome\/(\d+)/);
  tmp4 = match1;
}
if (match1) {
  tmp3 = +tmp4[1];
}

export default tmp3;
