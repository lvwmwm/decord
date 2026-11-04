// Module ID: 16393
// Function ID: 16394
// Dependencies: [16373, 16394]

// Module 16393
import _mod16373 from "module_16373" /* 16373 */;
import _mod16394 from "module_16394" /* 16394 */;

let tmp4;
let tmp = _mod16373.process && _mod16373.process.versions;
if (!tmp) {
  tmp = _mod16373.Deno && _mod16373.Deno.version;
  _mod16373.Deno && _mod16373.Deno.version;
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
let match1 = !tmp3 && _mod16394;
if (match1) {
  const str3 = _mod16394;
  const match = str3.match(/Edge\/(\d+)/);
  let tmp8 = !match;
  if (match) {
    tmp8 = match[1] >= 74;
  }
  match1 = tmp8;
  tmp4 = match;
}
if (match1) {
  const str4 = _mod16394;
  match1 = str4.match(/Chrome\/(\d+)/);
  tmp4 = match1;
}
if (match1) {
  tmp3 = +tmp4[1];
}

export default tmp3;
