// Module ID: 13136
// Function ID: 99538
// Dependencies: []

// Module 13136
let tmp = require(dependencyMap[0]).process && require(dependencyMap[0]).process.versions;
if (!tmp) {
  tmp = require(dependencyMap[0]).Deno && require(dependencyMap[0]).Deno.version;
  const tmp2 = require(dependencyMap[0]).Deno && require(dependencyMap[0]).Deno.version;
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
  _module = require(dependencyMap[1]);
}
if (_module) {
  const match = require(dependencyMap[1]).match(/Edge\/(\d+)/);
  let tmp8 = !match;
  if (!tmp8) {
    tmp8 = match[1] >= 74;
  }
  _module = tmp8;
  tmp3 = match;
  const str3 = require(dependencyMap[1]);
}
if (_module) {
  _module = require(dependencyMap[1]).match(/Chrome\/(\d+)/);
  tmp3 = _module;
  const str4 = require(dependencyMap[1]);
}
if (_module) {
  tmp4 = +tmp3[1];
}

export default tmp4;
