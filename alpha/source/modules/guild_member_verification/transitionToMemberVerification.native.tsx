// Module ID: 6870
// Function ID: 6871
// Name: transitionToMemberVerification
// Dependencies: [4878, 5036, 1111, 5038, 6871, 6907, 2]
// Exports: transitionToMemberVerification

// Module 6870 (transitionToMemberVerification)
import router_utils from "router_utils" /* 1111 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 5038 */;
import MemberVerificationAlertActionCreators from "MemberVerificationAlertActionCreators" /* 6871 */;
import MemberVerificationModalActionCreators from "MemberVerificationModalActionCreators" /* 6907 */;
import GuildStore from "GuildStore" /* 4878 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 5036 */;
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
