// Module ID: 7198
// Function ID: 57950
// Name: useCreateSubscriptionParams
// Dependencies: [31, 7199, 491, 2]
// Exports: default

// Module 7198 (useCreateSubscriptionParams)
import result from "result";

const require = arg1;
const result = require("v1").fileFinishedImporting("modules/billing/native/subscription/useCreateSubscriptionParams.tsx");

export default function useCreateSubscriptionParams(arg0, arg1) {
  let closure_0 = arg0;
  const importDefault = arg1;
  let tmp = importDefault(7199)();
  const dependencyMap = tmp;
  let items = [arg0, arg1, tmp];
  return React.useMemo(() => {
    let tmp = null;
    if (null != lib) {
      tmp = null;
      if (null != closure_1) {
        tmp = null;
        if (null != tmp) {
          let obj = { requestIdentifier: lib(tmp[2]).v4() };
          obj = { planId: lib.id, quantity: 1 };
          const items = [obj];
          obj.items = items;
          ({ country: obj.countryCode, currency: obj.currency } = closure_1);
          tmp = obj;
          const obj2 = lib(tmp[2]);
        }
      }
    }
    return tmp;
  }, items);
};
