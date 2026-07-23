// Module ID: 551
// Function ID: 6667
// Name: callBoundIntrinsic
// Dependencies: [528, 517]

// Module 551 (callBoundIntrinsic)
import callBindBasic from "callBindBasic";

let items = [require("getEvalledConstructor")("%String.prototype.indexOf%")];
let closure_2 = callBindBasic(items);

export default function callBoundIntrinsic(arg0) {
  const tmp = require(517) /* getEvalledConstructor */(arg0, arg1);
  let tmp2 = tmp;
  if ("function" === typeof tmp) {
    tmp2 = tmp;
    if (callback(arg0, ".prototype.") > -1) {
      const items = [tmp];
      tmp2 = require(528) /* callBindBasic */(items);
    }
  }
  return tmp2;
};
