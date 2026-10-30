// Module ID: 16103
// Function ID: 16104
// Dependencies: [16083, 16104]

// Module 16103
import _mod16083 from "module_16083" /* 16083 */;
import _mod16104 from "module_16104" /* 16104 */;

let tmp4;
let tmp = _mod16083.process && _mod16083.process.versions;
if (!tmp) {
  tmp = _mod16083.Deno && _mod16083.Deno.version;
  _mod16083.Deno && _mod16083.Deno.version;
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
let match1 = !tmp3 && _mod16104;
if (match1) {
  const str3 = _mod16104;
  const match = str3.match(/Edge\/(\d+)/);
  let tmp8 = !match;
  if (match) {
    tmp8 = match[1] >= 74;
  }
  match1 = tmp8;
  tmp4 = match;
}
if (match1) {
  const str4 = _mod16104;
  match1 = str4.match(/Chrome\/(\d+)/);
  tmp4 = match1;
}
if (match1) {
  tmp3 = +tmp4[1];
}

export default tmp3;
