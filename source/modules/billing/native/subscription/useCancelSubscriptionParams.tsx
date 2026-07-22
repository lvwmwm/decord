// Module ID: 7195
// Function ID: 57925
// Name: useCancelSubscriptionParams
// Dependencies: []
// Exports: default

// Module 7195 (useCancelSubscriptionParams)
let closure_3 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/billing/native/subscription/useCancelSubscriptionParams.tsx");

export default function useCancelSubscriptionParams(arg0) {
  const arg1 = arg0;
  const tmp = importDefault(dependencyMap[1])();
  const importDefault = tmp;
  const items = [arg0, tmp];
  return React.useMemo(() => {
    let tmp = null;
    if (null != arg0) {
      tmp = null;
      if (null != tmp) {
        const obj = { requestIdentifier: arg0(closure_2[2]).v4(), subscriptionId: arg0 };
        tmp = obj;
        const obj2 = arg0(closure_2[2]);
      }
    }
    return tmp;
  }, items);
};
