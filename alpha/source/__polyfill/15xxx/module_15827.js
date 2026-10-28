// Module ID: 15827
// Function ID: 15828
// Dependencies: [15807, 15828]

// Module 15827
import _mod15807 from "module_15807" /* 15807 */;
import _mod15828 from "module_15828" /* 15828 */;

let tmp4;
let tmp = _mod15807.process && _mod15807.process.versions;
if (!tmp) {
  tmp = _mod15807.Deno && _mod15807.Deno.version;
  _mod15807.Deno && _mod15807.Deno.version;
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
let match1 = !tmp3 && _mod15828;
if (match1) {
  const str3 = _mod15828;
  const match = str3.match(/Edge\/(\d+)/);
  let tmp8 = !match;
  if (match) {
    tmp8 = match[1] >= 74;
  }
  match1 = tmp8;
  tmp4 = match;
}
if (match1) {
  const str4 = _mod15828;
  match1 = str4.match(/Chrome\/(\d+)/);
  tmp4 = match1;
}
if (match1) {
  tmp3 = +tmp4[1];
}

export default tmp3;
