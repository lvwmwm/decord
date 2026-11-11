// Module ID: 16649
// Function ID: 16650
// Dependencies: [16629, 16650]

// Module 16649
import _mod16629 from "module_16629" /* 16629 */;
import _mod16650 from "module_16650" /* 16650 */;

let tmp4;
let tmp = _mod16629.process && _mod16629.process.versions;
if (!tmp) {
  tmp = _mod16629.Deno && _mod16629.Deno.version;
  _mod16629.Deno && _mod16629.Deno.version;
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
let match1 = !tmp3 && _mod16650;
if (match1) {
  const str3 = _mod16650;
  const match = str3.match(/Edge\/(\d+)/);
  let tmp8 = !match;
  if (match) {
    tmp8 = match[1] >= 74;
  }
  match1 = tmp8;
  tmp4 = match;
}
if (match1) {
  const str4 = _mod16650;
  match1 = str4.match(/Chrome\/(\d+)/);
  tmp4 = match1;
}
if (match1) {
  tmp3 = +tmp4[1];
}

export default tmp3;
