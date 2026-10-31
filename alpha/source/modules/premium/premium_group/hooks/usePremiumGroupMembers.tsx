// Module ID: 15375
// Function ID: 15376
// Name: usePremiumGroupMembers
// Dependencies: [19, 15372, 504, 572, 2]
// Exports: default

// Module 15375 (usePremiumGroupMembers)
import react from "react" /* 19 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import PremiumGroupStore from "PremiumGroupStore" /* 15372 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const useEffect = react.useEffect;
const result = size.fileFinishedImporting("modules/premium/premium_group/hooks/usePremiumGroupMembers.tsx");

export default function usePremiumGroupMembers(arg0) {
  let closure_0;
  let isUpdatingMembers;
  let premiumGroupMembers;
  _require = arg0;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let flag = obj.useCachedData;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = obj.fetch;
  if (flag2 === undefined) {
    flag2 = true;
  }
  let obj2 = require("get initialized");
  const items = [PremiumGroupStore];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    const obj = { premiumGroupMembers: PremiumGroupStore.getMembers(), isFetchingMembers: PremiumGroupStore.isFetchingMembers(), isUpdatingMembers: PremiumGroupStore.isUpdatingMembers() };
    return obj;
  });
  let isFetchingMembers = stateFromStoresObject.isFetchingMembers;
  const items1 = [flag2, arg0, flag];
  ({ premiumGroupMembers, isUpdatingMembers } = stateFromStoresObject);
  useEffect(() => {
    const tmp = flag2;
    if (tmp) {
      const hasFetchedMembersResult = flag && PremiumGroupStore.hasFetchedMembers();
      if (!hasFetchedMembersResult) {
        if (null != closure_0) {
          const obj2 = { type: "PREMIUM_GROUP_MEMBERS_REQUEST", subscriptionId: tmp4 };
          const obj = DispatcherDefault;
          obj.dispatch(obj2);
        }
      }
    }
  }, items1);
  const obj3 = { premiumGroupMembers, isLoading: isFetchingMembers };
  if (!isFetchingMembers) {
    isFetchingMembers = isUpdatingMembers;
  }
  return obj3;
};
