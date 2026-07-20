// Module ID: 551
// Function ID: 6667
// Name: callBoundIntrinsic
// Dependencies: [0, 350]

// Module 551 (callBoundIntrinsic)
import result from "result";

const items = [require("module_350")("%String.prototype.indexOf%")];
let closure_2 = result(items);

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
