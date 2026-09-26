// Module ID: 14628
// Function ID: 14629
// Dependencies: [14608, 14629]

// Module 14628
import _mod14608 from "module_14608" /* 14608 */;
import _mod14629 from "module_14629" /* 14629 */;

let tmp = _mod14608.process && _mod14608.process.versions;
if (!tmp) {
  tmp = _mod14608.Deno && _mod14608.Deno.version;
  const tmp2 = _mod14608.Deno && _mod14608.Deno.version;
}
let str = tmp;
if (tmp) {
  str = tmp.v8;
}
let tmp3;
if (str) {
  const parts = str.split(".");
  if (parts[0] <= 0) {
    let num3 = +parts[0] + parts[1];
  } else {
    num3 = 1;
  }
  tmp3 = num3;
  let tmp4 = parts;
}
let _module = !tmp3;
if (!tmp3) {
  _module = _mod14629;
}
if (_module) {
  const match = _mod14629.match(/Edge\/(\d+)/);
  let tmp8 = !match;
  if (match) {
    tmp8 = match[1] >= 74;
  }
  _module = tmp8;
  tmp4 = match;
}
if (_module) {
  _module = _mod14629.match(/Chrome\/(\d+)/);
  tmp4 = _module;
}
if (_module) {
  tmp3 = +tmp4[1];
}

export default tmp3;
