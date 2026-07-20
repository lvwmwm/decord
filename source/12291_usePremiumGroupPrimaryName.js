// Module ID: 12291
// Function ID: 94160
// Name: usePremiumGroupPrimaryName
// Dependencies: []
// Exports: default

// Module 12291 (usePremiumGroupPrimaryName)
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/premium/premium_group/hooks/usePremiumGroupPrimaryName.tsx");

export default function usePremiumGroupPrimaryName() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let flag = obj.useCachedData;
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = obj.fetch;
  if (flag2 === undefined) {
    flag2 = true;
  }
  obj = { useCachedData: flag, fetch: flag2 };
  const premiumGroupMembership = importDefault(dependencyMap[0])(obj).premiumGroupMembership;
  let subscriptionId;
  if (null != premiumGroupMembership) {
    subscriptionId = premiumGroupMembership.subscriptionId;
  }
  let tmp3 = null;
  if (null != subscriptionId) {
    tmp3 = subscriptionId;
  }
  obj = { useCachedData: flag, fetch: flag2 };
  const premiumGroupMembers = importDefault(dependencyMap[1])(tmp3, obj).premiumGroupMembers;
  let primary;
  if (null != premiumGroupMembers) {
    primary = premiumGroupMembers.primary;
  }
  let nameFromUserResult = null;
  if (null != primary) {
    let primary1;
    if (null != premiumGroupMembers) {
      primary1 = premiumGroupMembers.primary;
    }
    nameFromUserResult = require(dependencyMap[2]).nameFromUser(primary1);
    const obj4 = require(dependencyMap[2]);
  }
  return nameFromUserResult;
};
