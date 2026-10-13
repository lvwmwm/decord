// Module ID: 14892
// Function ID: 14893
// Dependencies: [14872, 14893]

// Module 14892
import _mod14872 from "module_14872" /* 14872 */;
import _mod14893 from "module_14893" /* 14893 */;

let tmp4;
let tmp = _mod14872.process && _mod14872.process.versions;
if (!tmp) {
  tmp = _mod14872.Deno && _mod14872.Deno.version;
  _mod14872.Deno && _mod14872.Deno.version;
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
let match1 = !tmp3 && _mod14893;
if (match1) {
  const str3 = _mod14893;
  const match = str3.match(/Edge\/(\d+)/);
  let tmp8 = !match;
  if (match) {
    tmp8 = match[1] >= 74;
  }
  match1 = tmp8;
  tmp4 = match;
}
if (match1) {
  const str4 = _mod14893;
  match1 = str4.match(/Chrome\/(\d+)/);
  tmp4 = match1;
}
if (match1) {
  tmp3 = +tmp4[1];
}

export default tmp3;
