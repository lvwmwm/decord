// Module ID: 16063
// Function ID: 16064
// Dependencies: [16043, 16064]

// Module 16063
import _mod16043 from "module_16043" /* 16043 */;
import _mod16064 from "module_16064" /* 16064 */;

let tmp4;
let tmp = _mod16043.process && _mod16043.process.versions;
if (!tmp) {
  tmp = _mod16043.Deno && _mod16043.Deno.version;
  _mod16043.Deno && _mod16043.Deno.version;
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
let match1 = !tmp3 && _mod16064;
if (match1) {
  const str3 = _mod16064;
  const match = str3.match(/Edge\/(\d+)/);
  let tmp8 = !match;
  if (match) {
    tmp8 = match[1] >= 74;
  }
  match1 = tmp8;
  tmp4 = match;
}
if (match1) {
  const str4 = _mod16064;
  match1 = str4.match(/Chrome\/(\d+)/);
  tmp4 = match1;
}
if (match1) {
  tmp3 = +tmp4[1];
}

export default tmp3;
