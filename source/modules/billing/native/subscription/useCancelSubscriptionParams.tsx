// Module ID: 7200
// Function ID: 57988
// Name: useCancelSubscriptionParams
// Dependencies: [31, 7199, 491, 2]
// Exports: default

// Module 7200 (useCancelSubscriptionParams)
import result from "result";

const require = arg1;
const result = require("v1").fileFinishedImporting("modules/billing/native/subscription/useCancelSubscriptionParams.tsx");

export default function useCancelSubscriptionParams(arg0) {
  let closure_0 = arg0;
  let tmp = importDefault(7199)();
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
