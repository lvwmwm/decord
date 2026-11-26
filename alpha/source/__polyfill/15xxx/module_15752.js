// Module ID: 15752
// Function ID: 15753
// Dependencies: [15732, 15753]

// Module 15752
import _mod15732 from "module_15732" /* 15732 */;
import _mod15753 from "module_15753" /* 15753 */;

let tmp4;
let tmp = _mod15732.process && _mod15732.process.versions;
if (!tmp) {
  tmp = _mod15732.Deno && _mod15732.Deno.version;
  _mod15732.Deno && _mod15732.Deno.version;
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
let match1 = !tmp3 && _mod15753;
if (match1) {
  const str3 = _mod15753;
  const match = str3.match(/Edge\/(\d+)/);
  let tmp8 = !match;
  if (match) {
    tmp8 = match[1] >= 74;
  }
  match1 = tmp8;
  tmp4 = match;
}
if (match1) {
  const str4 = _mod15753;
  match1 = str4.match(/Chrome\/(\d+)/);
  tmp4 = match1;
}
if (match1) {
  tmp3 = +tmp4[1];
}

export default tmp3;
