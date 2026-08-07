// Module ID: 12687
// Function ID: 12688
// Name: usePremiumGroupPrimaryName
// Dependencies: [12688, 12692, 4140, 2]
// Exports: default

// Module 12687 (usePremiumGroupPrimaryName)
const result = require("nameFromUser").fileFinishedImporting("modules/premium/premium_group/hooks/usePremiumGroupPrimaryName.tsx");

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
  const premiumGroupMembership = importDefault(12688)({ useCachedData: flag, fetch: flag2 }).premiumGroupMembership;
  let subscriptionId;
  if (premiumGroupMembership != null) {
    subscriptionId = premiumGroupMembership.subscriptionId;
  }
  if (subscriptionId == null) {
    subscriptionId = null;
  }
  const premiumGroupMembers = importDefault(12692)(subscriptionId, { useCachedData: flag, fetch: flag2 }).premiumGroupMembers;
  let primary;
  if (premiumGroupMembers != null) {
    primary = premiumGroupMembers.primary;
  }
  let nameFromUserResult = null;
  if (null != primary) {
    let primary1;
    if (premiumGroupMembers != null) {
      primary1 = premiumGroupMembers.primary;
    }
    nameFromUserResult = require(4140) /* nameFromUser */.nameFromUser(primary1);
    const obj2 = require(4140) /* nameFromUser */;
  }
  return nameFromUserResult;
};
