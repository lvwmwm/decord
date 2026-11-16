// Module ID: 15691
// Function ID: 15692
// Name: usePremiumGroupPrimaryName
// Dependencies: [15692, 15696, 5226, 2]
// Exports: default

// Module 15691 (usePremiumGroupPrimaryName)
import UserUtils from "UserUtils" /* 5226 */;
import usePremiumGroupMembershipDefault from "usePremiumGroupMembership" /* 15692 */;
import usePremiumGroupMembersDefault from "usePremiumGroupMembers" /* 15696 */;
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
  const tmp2 = usePremiumGroupMembersDefault;
  if (premiumGroupMembership != null) {
    subscriptionId = premiumGroupMembership.subscriptionId;
  }
  if (subscriptionId == null) {
    subscriptionId = null;
  }
  const premiumGroupMembers = tmp2(subscriptionId, { useCachedData: flag, fetch: flag2 }).premiumGroupMembers;
  let primary;
  if (premiumGroupMembers != null) {
    primary = premiumGroupMembers.primary;
  }
  let nameFromUserResult = null;
  if (null != primary) {
    let primary1;
    const nameFromUser = UserUtils.nameFromUser;
    UserUtils;
    if (premiumGroupMembers != null) {
      primary1 = premiumGroupMembers.primary;
    }
    nameFromUserResult = nameFromUser(primary1);
  }
  return nameFromUserResult;
};
