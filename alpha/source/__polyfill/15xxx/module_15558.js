// Module ID: 15558
// Function ID: 15559
// Dependencies: [15538, 15559]

// Module 15558
import _mod15538 from "module_15538" /* 15538 */;
import _mod15559 from "module_15559" /* 15559 */;

let tmp4;
let tmp = _mod15538.process && _mod15538.process.versions;
if (!tmp) {
  tmp = _mod15538.Deno && _mod15538.Deno.version;
  _mod15538.Deno && _mod15538.Deno.version;
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
let match1 = !tmp3 && _mod15559;
if (match1) {
  const str3 = _mod15559;
  const match = str3.match(/Edge\/(\d+)/);
  let tmp8 = !match;
  if (match) {
    tmp8 = match[1] >= 74;
  }
  match1 = tmp8;
  tmp4 = match;
}
if (match1) {
  const str4 = _mod15559;
  match1 = str4.match(/Chrome\/(\d+)/);
  tmp4 = match1;
}
if (match1) {
  tmp3 = +tmp4[1];
}

export default tmp3;
