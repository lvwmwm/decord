// Module ID: 580
// Function ID: 6967
// Dependencies: []

// Module 580
let _self = "object" === typeof self && self;
if (_self) {
  const _self2 = self;
  const _Object = Object;
  _self = self.Object === Object;
}
if (_self) {
  _self = self;
}
let tmp = require(dependencyMap[0]) || _self;
if (!tmp) {
  const _Function = Function;
  tmp = Function("return this")();
}

export default tmp;
