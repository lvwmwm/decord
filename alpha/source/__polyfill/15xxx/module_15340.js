// Module ID: 15340
// Function ID: 15341
// Dependencies: [15320, 15341]

// Module 15340
import _mod15320 from "module_15320" /* 15320 */;
import _mod15341 from "module_15341" /* 15341 */;

let tmp4;
let tmp = _mod15320.process && _mod15320.process.versions;
if (!tmp) {
  tmp = _mod15320.Deno && _mod15320.Deno.version;
  _mod15320.Deno && _mod15320.Deno.version;
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
let match1 = !tmp3 && _mod15341;
if (match1) {
  const str3 = _mod15341;
  const match = str3.match(/Edge\/(\d+)/);
  let tmp8 = !match;
  if (match) {
    tmp8 = match[1] >= 74;
  }
  match1 = tmp8;
  tmp4 = match;
}
if (match1) {
  const str4 = _mod15341;
  match1 = str4.match(/Chrome\/(\d+)/);
  tmp4 = match1;
}
if (match1) {
  tmp3 = +tmp4[1];
}

export default tmp3;
