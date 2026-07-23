// Module ID: 12417
// Function ID: 96374
// Name: usePremiumGroupPrimaryName
// Dependencies: [12418, 12422, 3969, 2]
// Exports: default

// Module 12417 (usePremiumGroupPrimaryName)
const result = require("conceal").fileFinishedImporting("modules/premium/premium_group/hooks/usePremiumGroupPrimaryName.tsx");

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
  const premiumGroupMembership = importDefault(12418)(obj).premiumGroupMembership;
  let subscriptionId;
  if (null != premiumGroupMembership) {
    subscriptionId = premiumGroupMembership.subscriptionId;
  }
  let tmp3 = null;
  if (null != subscriptionId) {
    tmp3 = subscriptionId;
  }
  obj = { useCachedData: flag, fetch: flag2 };
  const premiumGroupMembers = importDefault(12422)(tmp3, obj).premiumGroupMembers;
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
    nameFromUserResult = require(3969) /* conceal */.nameFromUser(primary1);
    const obj4 = require(3969) /* conceal */;
  }
  return nameFromUserResult;
};
