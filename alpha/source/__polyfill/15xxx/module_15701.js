// Module ID: 15701
// Function ID: 15702
// Dependencies: [15681, 15702]

// Module 15701
import _mod15681 from "module_15681" /* 15681 */;
import _mod15702 from "module_15702" /* 15702 */;

let tmp4;
let tmp = _mod15681.process && _mod15681.process.versions;
if (!tmp) {
  tmp = _mod15681.Deno && _mod15681.Deno.version;
  _mod15681.Deno && _mod15681.Deno.version;
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
let match1 = !tmp3 && _mod15702;
if (match1) {
  const str3 = _mod15702;
  const match = str3.match(/Edge\/(\d+)/);
  let tmp8 = !match;
  if (match) {
    tmp8 = match[1] >= 74;
  }
  match1 = tmp8;
  tmp4 = match;
}
if (match1) {
  const str4 = _mod15702;
  match1 = str4.match(/Chrome\/(\d+)/);
  tmp4 = match1;
}
if (match1) {
  tmp3 = +tmp4[1];
}

export default tmp3;
