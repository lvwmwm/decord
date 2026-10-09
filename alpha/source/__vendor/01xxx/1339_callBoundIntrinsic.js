// Module ID: 1339
// Function ID: 1340
// Name: callBoundIntrinsic
// Dependencies: [1316, 1305]

// Module 1339 (callBoundIntrinsic)
import GetIntrinsic from "GetIntrinsic" /* 1305 */;
import callBindBasic from "callBindBasic" /* 1316 */;

let items = [GetIntrinsic("%String.prototype.indexOf%")];
let closure_2 = callBindBasic(items);

export default function callBoundIntrinsic(arg0, arg1) {
  const tmp3 = GetIntrinsic(arg0, arg1);
  let tmp4 = tmp3;
  if (typeof tmp3 === "function") {
    tmp4 = tmp3;
    if (closure_2(arg0, ".prototype.") > -1) {
      const items = [tmp3];
      tmp4 = callBindBasic(items);
    }
  }
  return tmp4;
};
