// Module ID: 6613
// Function ID: 58535
// Name: useCancelSubscriptionParams
// Dependencies: [31, 6612, 491, 2]
// Exports: default

// Module 6613 (useCancelSubscriptionParams)
import result from "result";

const require = arg1;
const result = require("v1").fileFinishedImporting("modules/billing/native/subscription/useCancelSubscriptionParams.tsx");

export default function useCancelSubscriptionParams(arg0) {
  let closure_0 = arg0;
  let tmp = importDefault(6612)();
  importDefault = tmp;
  const items = [arg0, tmp];
  return React.useMemo(() => {
    let tmp = null;
    if (null != callback) {
      tmp = null;
      if (null != closure_1) {
        const obj = { requestIdentifier: callback(outer1_2[2]).v4(), subscriptionId: callback };
        tmp = obj;
        const obj2 = callback(outer1_2[2]);
      }
    }
    return tmp;
  }, items);
};
