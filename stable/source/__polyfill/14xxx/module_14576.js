// Module ID: 14576
// Function ID: 14577
// Dependencies: [14556, 14577]

// Module 14576
import _mod14556 from "module_14556" /* 14556 */;
import _mod14577 from "module_14577" /* 14577 */;

let tmp4;
let tmp = _mod14556.process && _mod14556.process.versions;
if (!tmp) {
  tmp = _mod14556.Deno && _mod14556.Deno.version;
  _mod14556.Deno && _mod14556.Deno.version;
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
let match1 = !tmp3 && _mod14577;
if (match1) {
  const str3 = _mod14577;
  const match = str3.match(/Edge\/(\d+)/);
  let tmp8 = !match;
  if (match) {
    tmp8 = match[1] >= 74;
  }
  match1 = tmp8;
  tmp4 = match;
}
if (match1) {
  const str4 = _mod14577;
  match1 = str4.match(/Chrome\/(\d+)/);
  tmp4 = match1;
}
if (match1) {
  tmp3 = +tmp4[1];
}

export default tmp3;
