// Module ID: 13116
// Function ID: 99497
// Name: check
// Dependencies: []

// Module 13116 (check)
const self = this;
function check(Math) {
  let tmp = Math;
  if (Math) {
    const _Math = Math;
    tmp = Math.Math === Math;
  }
  if (tmp) {
    tmp = Math;
  }
  return tmp;
}
let checkResult = check("object" === typeof globalThis && globalThis);
if (!checkResult) {
  const _window = window;
  checkResult = check("object" === typeof window && window);
  const tmp3 = "object" === typeof window && window;
}
if (!checkResult) {
  const _self = self;
  checkResult = check("object" === typeof self && self);
  const tmp4 = "object" === typeof self && self;
}
if (!checkResult) {
  checkResult = check("object" === typeof global && global);
  const tmp5 = "object" === typeof global && global;
}
if (!checkResult) {
  checkResult = check("object" === typeof self && self);
  const tmp6 = "object" === typeof self && self;
}
if (!checkResult) {
  const _Function = Function;
  checkResult = Function("return this")();
}

export default checkResult;
