// Module ID: 13196
// Function ID: 13197
// Name: usePremiumGroupPrimaryName
// Dependencies: [13197, 13201, 4678, 2]
// Exports: default

// Module 13196 (usePremiumGroupPrimaryName)
import UserUtils from "UserUtils" /* 4678 */;
import usePremiumGroupMembershipDefault from "usePremiumGroupMembership" /* 13197 */;
import usePremiumGroupMembersDefault from "usePremiumGroupMembers" /* 13201 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/premium_group/hooks/usePremiumGroupPrimaryName.tsx");

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
  const premiumGroupMembership = usePremiumGroupMembershipDefault({ useCachedData: flag, fetch: flag2 }).premiumGroupMembership;
  let subscriptionId;
  if (premiumGroupMembership != null) {
    subscriptionId = premiumGroupMembership.subscriptionId;
  }
  if (subscriptionId == null) {
    subscriptionId = null;
  }
  const premiumGroupMembers = usePremiumGroupMembersDefault(subscriptionId, { useCachedData: flag, fetch: flag2 }).premiumGroupMembers;
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
    nameFromUserResult = UserUtils.nameFromUser(primary1);
  }
  return nameFromUserResult;
};
