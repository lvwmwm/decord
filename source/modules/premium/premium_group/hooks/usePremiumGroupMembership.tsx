// Module ID: 12471
// Function ID: 96699
// Name: usePremiumGroupMembership
// Dependencies: [31, 12472, 566, 686, 2]
// Exports: default

// Module 12471 (usePremiumGroupMembership)
import { useEffect } from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const result = require("initialize").fileFinishedImporting("modules/premium/premium_group/hooks/usePremiumGroupMembership.tsx");

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
  const items = [_isNativeReflectConstruct];
  const stateFromStoresObject = flag(566).useStateFromStoresObject(items, () => ({ premiumGroupMembership: outer1_4.getMembership(), isFetchingMembership: outer1_4.isFetchingMembership() }));
  const items1 = [flag2, flag];
  ({ premiumGroupMembership, isFetchingMembership } = stateFromStoresObject);
  useEffect(() => {
    if (flag2) {
      let hasFetchedMembershipResult = flag;
      if (flag) {
        hasFetchedMembershipResult = outer1_4.hasFetchedMembership();
      }
      if (!hasFetchedMembershipResult) {
        let obj = flag2(outer1_2[3]);
        obj = { type: "PREMIUM_GROUP_MEMBERSHIP_REQUEST" };
        obj.dispatch(obj);
      }
    }
  }, items1);
  return { premiumGroupMembership, isLoading };
};
