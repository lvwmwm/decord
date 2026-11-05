// Module ID: 16406
// Function ID: 16407
// Dependencies: [16386, 16407]

// Module 16406
import _mod16386 from "module_16386" /* 16386 */;
import _mod16407 from "module_16407" /* 16407 */;

let tmp4;
let tmp = _mod16386.process && _mod16386.process.versions;
if (!tmp) {
  tmp = _mod16386.Deno && _mod16386.Deno.version;
  _mod16386.Deno && _mod16386.Deno.version;
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
let match1 = !tmp3 && _mod16407;
if (match1) {
  const str3 = _mod16407;
  const match = str3.match(/Edge\/(\d+)/);
  let tmp8 = !match;
  if (match) {
    tmp8 = match[1] >= 74;
  }
  match1 = tmp8;
  tmp4 = match;
}
if (match1) {
  const str4 = _mod16407;
  match1 = str4.match(/Chrome\/(\d+)/);
  tmp4 = match1;
}
if (match1) {
  tmp3 = +tmp4[1];
}

export default tmp3;
