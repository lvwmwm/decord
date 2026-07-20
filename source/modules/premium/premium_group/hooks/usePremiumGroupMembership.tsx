// Module ID: 12292
// Function ID: 94162
// Name: usePremiumGroupMembership
// Dependencies: []
// Exports: default

// Module 12292 (usePremiumGroupMembership)
const useEffect = require(dependencyMap[0]).useEffect;
let closure_4 = importDefault(dependencyMap[1]);
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/premium/premium_group/hooks/usePremiumGroupMembership.tsx");

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
  const require = flag;
  let flag2 = obj.fetch;
  if (flag2 === undefined) {
    flag2 = true;
  }
  const importDefault = flag2;
  const items = [closure_4];
  const stateFromStoresObject = require(dependencyMap[2]).useStateFromStoresObject(items, () => ({ premiumGroupMembership: closure_4.getMembership(), isFetchingMembership: closure_4.isFetchingMembership() }));
  const items1 = [flag2, flag];
  ({ premiumGroupMembership, isFetchingMembership } = stateFromStoresObject);
  useEffect(() => {
    if (flag2) {
      let hasFetchedMembershipResult = flag;
      if (flag) {
        hasFetchedMembershipResult = closure_4.hasFetchedMembership();
      }
      if (!hasFetchedMembershipResult) {
        let obj = flag2(closure_2[3]);
        obj = { type: "PREMIUM_GROUP_MEMBERSHIP_REQUEST" };
        obj.dispatch(obj);
      }
    }
  }, items1);
  return { premiumGroupMembership, isLoading };
};
