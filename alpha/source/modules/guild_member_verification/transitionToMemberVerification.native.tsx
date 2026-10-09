// Module ID: 6108
// Function ID: 6109
// Name: transitionToMemberVerification
// Dependencies: [2086, 4901, 1112, 4903, 6109, 6151, 2]
// Exports: transitionToMemberVerification

// Module 6108 (transitionToMemberVerification)
import router_utils from "router_utils" /* 1112 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 4903 */;
import MemberVerificationAlertActionCreators from "MemberVerificationAlertActionCreators" /* 6109 */;
import MemberVerificationModalActionCreators from "MemberVerificationModalActionCreators" /* 6151 */;
import GuildStore from "GuildStore" /* 2086 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 4901 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/guild_member_verification/transitionToMemberVerification.native.tsx");

export const transitionToMemberVerification = function transitionToMemberVerification(guildId) {
  if (null == GuildStore.getGuild(guildId)) {
    const request = UserGuildJoinRequestStore.getRequest(guildId);
    let applicationStatus;
    if (request != null) {
      applicationStatus = request.applicationStatus;
    }
    if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
      const tmp7Result = MemberVerificationAlertActionCreators;
      const result = tmp7Result.openMemberVerificationPendingAlert(guildId);
    } else if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
      const obj2 = { guildId, canWithdraw: true };
      const tmp7Result4 = MemberVerificationAlertActionCreators;
      const result1 = tmp7Result4.openMemberVerificationRejectedAlert(obj2);
    } else if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.APPROVED === applicationStatus) {
      const tmp7Result5 = router_utils;
      tmp7Result5.transitionToGuild(guildId);
    } else {
      const tmp7Result6 = MemberVerificationModalActionCreators;
      const result2 = tmp7Result6.openMemberVerificationModal(guildId);
    }
  } else {
    const obj = router_utils;
    obj.transitionToGuild(guildId);
  }
};
