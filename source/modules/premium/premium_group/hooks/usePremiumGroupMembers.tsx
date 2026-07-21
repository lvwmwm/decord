// Module ID: 12303
// Function ID: 94278
// Name: usePremiumGroupMembers
// Dependencies: []
// Exports: default

// Module 12303 (usePremiumGroupMembers)
const useEffect = require(dependencyMap[0]).useEffect;
let closure_4 = importDefault(dependencyMap[1]);
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/premium/premium_group/hooks/usePremiumGroupMembers.tsx");

export default function usePremiumGroupMembers(arg0) {
  let isUpdatingMembers;
  let premiumGroupMembers;
  let obj = arg1;
  const require = arg0;
  if (arg1 === undefined) {
    obj = {};
  }
  let flag = obj.useCachedData;
  if (flag === undefined) {
    flag = false;
  }
  const importDefault = flag;
  let flag2 = obj.fetch;
  if (flag2 === undefined) {
    flag2 = true;
  }
  const dependencyMap = flag2;
  const items = [closure_4];
  const stateFromStoresObject = require(dependencyMap[2]).useStateFromStoresObject(items, () => ({ premiumGroupMembers: closure_4.getMembers(), isFetchingMembers: closure_4.isFetchingMembers(), isUpdatingMembers: closure_4.isUpdatingMembers() }));
  let isFetchingMembers = stateFromStoresObject.isFetchingMembers;
  const items1 = [flag2, arg0, flag];
  ({ premiumGroupMembers, isUpdatingMembers } = stateFromStoresObject);
  useEffect(() => {
    if (flag2) {
      let hasFetchedMembersResult = flag;
      if (flag) {
        hasFetchedMembersResult = closure_4.hasFetchedMembers();
      }
      if (!hasFetchedMembersResult) {
        if (null != arg0) {
          let obj = flag(flag2[3]);
          obj = { type: "PREMIUM_GROUP_MEMBERS_REQUEST", subscriptionId: arg0 };
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
