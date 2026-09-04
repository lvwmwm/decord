// Module ID: 14243
// Function ID: 14244
// Dependencies: [14223, 14244]

// Module 14243
import _mod14223 from "module_14223" /* 14223 */;
import _mod14244 from "module_14244" /* 14244 */;

let tmp = _mod14223.process && _mod14223.process.versions;
if (!tmp) {
  tmp = _mod14223.Deno && _mod14223.Deno.version;
  const tmp2 = _mod14223.Deno && _mod14223.Deno.version;
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
  _module = _mod14244;
}
if (_module) {
  const match = _mod14244.match(/Edge\/(\d+)/);
  let tmp8 = !match;
  if (match) {
    tmp8 = match[1] >= 74;
  }
  _module = tmp8;
  tmp4 = match;
  const str3 = _mod14244;
}
if (_module) {
  _module = _mod14244.match(/Chrome\/(\d+)/);
  tmp4 = _module;
  const str4 = _mod14244;
}
if (_module) {
  tmp3 = +tmp4[1];
}

export default tmp3;
