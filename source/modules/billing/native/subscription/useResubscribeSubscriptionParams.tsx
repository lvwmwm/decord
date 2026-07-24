// Module ID: 7201
// Function ID: 57991
// Name: useResubscribeSubscriptionParams
// Dependencies: [31, 7199, 491, 2]
// Exports: default

// Module 7201 (useResubscribeSubscriptionParams)
import result from "result";

const require = arg1;
const result = require("v1").fileFinishedImporting("modules/billing/native/subscription/useResubscribeSubscriptionParams.tsx");

export default function useResubscribeSubscriptionParams(arg0) {
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
