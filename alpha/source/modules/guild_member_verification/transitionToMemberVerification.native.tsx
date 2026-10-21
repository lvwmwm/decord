// Module ID: 6813
// Function ID: 6814
// Name: transitionToMemberVerification
// Dependencies: [4843, 4993, 1114, 4995, 6814, 6850, 2]
// Exports: transitionToMemberVerification

// Module 6813 (transitionToMemberVerification)
import router_utils from "router_utils" /* 1114 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 4995 */;
import MemberVerificationAlertActionCreators from "MemberVerificationAlertActionCreators" /* 6814 */;
import MemberVerificationModalActionCreators from "MemberVerificationModalActionCreators" /* 6850 */;
import GuildStore from "GuildStore" /* 4843 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 4993 */;
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
