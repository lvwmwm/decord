// Module ID: 1328
// Function ID: 1329
// Name: callBoundIntrinsic
// Dependencies: [1305, 1294]

// Module 1328 (callBoundIntrinsic)
import GetIntrinsic from "GetIntrinsic" /* 1294 */;
import callBindBasic from "callBindBasic" /* 1305 */;

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
