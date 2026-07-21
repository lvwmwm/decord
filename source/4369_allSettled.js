// Module ID: 4369
// Function ID: 38752
// Name: allSettled
// Dependencies: []

// Module 4369 (allSettled)
require(dependencyMap[0])();
const _module = require(dependencyMap[1]);
let closure_2 = _module(require(dependencyMap[2])("%Promise.all%"));
const _module1 = require(dependencyMap[1]);
let closure_3 = _module1(require(dependencyMap[2])("%Promise.reject%"));

export default function allSettled(arg0) {
  const require = this;
  if ("Object" !== require(dependencyMap[3])(this)) {
    const _TypeError = TypeError;
    const typeError = new TypeError("`this` value must be an object");
    throw typeError;
  } else {
    return callback(this, require(dependencyMap[5])(require(dependencyMap[4])(arg0), (arg0) => self(closure_1[6])(self, arg0).then(function onFulfill(value) {
      return { status: "fulfilled", value };
    }, function onReject(reason) {
      return { status: "rejected", reason };
    })));
  }
};
