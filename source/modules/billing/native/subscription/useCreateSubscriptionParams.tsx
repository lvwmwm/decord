// Module ID: 7192
// Function ID: 57893
// Name: useCreateSubscriptionParams
// Dependencies: []
// Exports: default

// Module 7192 (useCreateSubscriptionParams)
let closure_3 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/billing/native/subscription/useCreateSubscriptionParams.tsx");

export default function useCreateSubscriptionParams(arg0, arg1) {
  arg1 = arg0;
  const importDefault = arg1;
  const tmp = importDefault(dependencyMap[1])();
  const dependencyMap = tmp;
  const items = [arg0, arg1, tmp];
  return React.useMemo(() => {
    let tmp = null;
    if (null != arg0) {
      tmp = null;
      if (null != arg1) {
        tmp = null;
        if (null != tmp) {
          let obj = { requestIdentifier: arg0(tmp[2]).v4() };
          obj = { planId: arg0.id, quantity: 1 };
          const items = [obj];
          obj.items = items;
          ({ country: obj.countryCode, currency: obj.currency } = arg1);
          tmp = obj;
          const obj2 = arg0(tmp[2]);
        }
      }
    }
    return tmp;
  }, items);
};
