// Module ID: 551
// Function ID: 6667
// Name: callBoundIntrinsic
// Dependencies: []

// Module 551 (callBoundIntrinsic)
const _module = require(dependencyMap[0]);
const items = [require(dependencyMap[1])("%String.prototype.indexOf%")];
let closure_2 = _module(items);

export default function callBoundIntrinsic(arg0, arg1) {
  const tmp = require(dependencyMap[1])(arg0, arg1);
  let tmp2 = tmp;
  if ("function" === typeof tmp) {
    tmp2 = tmp;
    if (callback(arg0, ".prototype.") > -1) {
      const items = [tmp];
      tmp2 = require(dependencyMap[0])(items);
    }
  }
  return tmp2;
};
