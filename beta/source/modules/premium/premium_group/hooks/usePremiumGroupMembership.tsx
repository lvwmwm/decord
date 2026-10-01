// Module ID: 13027
// Function ID: 13028
// Name: usePremiumGroupMembership
// Dependencies: [19, 13028, 504, 573, 2]
// Exports: default

// Module 13027 (usePremiumGroupMembership)
import react from "react" /* 19 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import PremiumGroupStore from "PremiumGroupStore" /* 13028 */;
import size from "module_2" /* 2 */;

const useEffect = react.useEffect;
const result = size.fileFinishedImporting("modules/premium/premium_group/hooks/usePremiumGroupMembership.tsx");

export default function usePremiumGroupMembership() {
  let isFetchingMembership;
  let premiumGroupMembership;
  let obj = arg0;
  if (arg0 === undefined) {
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
  const items = [PremiumGroupStore];
  const obj2 = flag(504);
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    const obj = { premiumGroupMembership: PremiumGroupStore.getMembership(), isFetchingMembership: PremiumGroupStore.isFetchingMembership() };
    return obj;
  });
  const items1 = [flag2, flag];
  ({ premiumGroupMembership, isFetchingMembership } = stateFromStoresObject);
  useEffect(() => {
    const tmp = flag2;
    if (tmp) {
      const hasFetchedMembershipResult = flag && PremiumGroupStore.hasFetchedMembership();
      if (!hasFetchedMembershipResult) {
        const obj = DispatcherDefault;
        obj.dispatch({ type: "PREMIUM_GROUP_MEMBERSHIP_REQUEST" });
      }
    }
  }, items1);
  return { premiumGroupMembership, isLoading };
};
