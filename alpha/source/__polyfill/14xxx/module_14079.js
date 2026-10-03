// Module ID: 14079
// Function ID: 14080
// Dependencies: [14059, 14080]

// Module 14079
import _mod14059 from "module_14059" /* 14059 */;
import _mod14080 from "module_14080" /* 14080 */;

let tmp4;
let tmp = _mod14059.process && _mod14059.process.versions;
if (!tmp) {
  tmp = _mod14059.Deno && _mod14059.Deno.version;
  _mod14059.Deno && _mod14059.Deno.version;
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
let match1 = !tmp3 && _mod14080;
if (match1) {
  const str3 = _mod14080;
  const match = str3.match(/Edge\/(\d+)/);
  let tmp8 = !match;
  if (match) {
    tmp8 = match[1] >= 74;
  }
  match1 = tmp8;
  tmp4 = match;
}
if (match1) {
  const str4 = _mod14080;
  match1 = str4.match(/Chrome\/(\d+)/);
  tmp4 = match1;
}
if (match1) {
  tmp3 = +tmp4[1];
}

export default tmp3;
