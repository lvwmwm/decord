// Module ID: 12475
// Function ID: 96792
// Name: usePremiumGroupMembers
// Dependencies: [31, 12472, 566, 686, 2]
// Exports: default

// Module 12475 (usePremiumGroupMembers)
import { useEffect } from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const result = require("initialize").fileFinishedImporting("modules/premium/premium_group/hooks/usePremiumGroupMembers.tsx");

export default function usePremiumGroupMembers(arg0) {
  let isUpdatingMembers;
  let premiumGroupMembers;
  let obj = arg1;
  const _require = arg0;
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
  const items = [_isNativeReflectConstruct];
  const stateFromStoresObject = _require(flag2[2]).useStateFromStoresObject(items, () => ({ premiumGroupMembers: outer1_4.getMembers(), isFetchingMembers: outer1_4.isFetchingMembers(), isUpdatingMembers: outer1_4.isUpdatingMembers() }));
  let isFetchingMembers = stateFromStoresObject.isFetchingMembers;
  const items1 = [flag2, arg0, flag];
  ({ premiumGroupMembers, isUpdatingMembers } = stateFromStoresObject);
  useEffect(() => {
    if (flag2) {
      let hasFetchedMembersResult = flag;
      if (flag) {
        hasFetchedMembersResult = outer1_4.hasFetchedMembers();
      }
      if (!hasFetchedMembersResult) {
        if (null != closure_0) {
          let obj = flag(flag2[3]);
          obj = { type: "PREMIUM_GROUP_MEMBERS_REQUEST", subscriptionId: closure_0 };
          obj.dispatch(obj);
        }
      }
    }
  }, items1);
  obj = { premiumGroupMembers };
  if (!isFetchingMembers) {
    isFetchingMembers = isUpdatingMembers;
  }
  obj.isLoading = isFetchingMembers;
  return obj;
};
