// Module ID: 15506
// Function ID: 15507
// Dependencies: [15486, 15507]

// Module 15506
import _mod15486 from "module_15486" /* 15486 */;
import _mod15507 from "module_15507" /* 15507 */;

let tmp4;
let tmp = _mod15486.process && _mod15486.process.versions;
if (!tmp) {
  tmp = _mod15486.Deno && _mod15486.Deno.version;
  _mod15486.Deno && _mod15486.Deno.version;
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
let match1 = !tmp3 && _mod15507;
if (match1) {
  const str3 = _mod15507;
  const match = str3.match(/Edge\/(\d+)/);
  let tmp8 = !match;
  if (match) {
    tmp8 = match[1] >= 74;
  }
  match1 = tmp8;
  tmp4 = match;
}
if (match1) {
  const str4 = _mod15507;
  match1 = str4.match(/Chrome\/(\d+)/);
  tmp4 = match1;
}
if (match1) {
  tmp3 = +tmp4[1];
}

export default tmp3;
