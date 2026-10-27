// Module ID: 6836
// Function ID: 6837
// Name: transitionToMemberVerification
// Dependencies: [4846, 5004, 1111, 5006, 6837, 6873, 2]
// Exports: transitionToMemberVerification

// Module 6836 (transitionToMemberVerification)
import router_utils from "router_utils" /* 1111 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 5006 */;
import MemberVerificationAlertActionCreators from "MemberVerificationAlertActionCreators" /* 6837 */;
import MemberVerificationModalActionCreators from "MemberVerificationModalActionCreators" /* 6873 */;
import GuildStore from "GuildStore" /* 4846 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 5004 */;
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
