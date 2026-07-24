// Module ID: 13303
// Function ID: 102021
// Dependencies: [13283, 13304]

// Module 13303
let tmp = require("check").process && require("check").process.versions;
if (!tmp) {
  tmp = require("check").Deno && require("check").Deno.version;
  const tmp2 = require("check").Deno && require("check").Deno.version;
}
let str = tmp;
if (tmp) {
  str = tmp.v8;
}
let tmp4;
if (str) {
  const parts = str.split(".");
  if (parts[0] <= 0) {
    let num2 = +parts[0] + parts[1];
  } else {
    num2 = 1;
  }
  tmp4 = num2;
  let tmp3 = parts;
}
let _module = !tmp4;
if (!tmp4) {
  _module = require("check");
}
if (_module) {
  const match = require("check").match(/Edge\/(\d+)/);
  let tmp8 = !match;
  if (!tmp8) {
    tmp8 = match[1] >= 74;
  }
  _module = tmp8;
  tmp3 = match;
  const str3 = require("check");
}
if (_module) {
  _module = require("check").match(/Chrome\/(\d+)/);
  tmp3 = _module;
  const str4 = require("check");
}
if (_module) {
  tmp4 = +tmp3[1];
}

export default tmp4;
