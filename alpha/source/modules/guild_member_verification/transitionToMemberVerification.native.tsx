// Module ID: 6860
// Function ID: 6861
// Name: transitionToMemberVerification
// Dependencies: [5114, 5287, 1099, 5289, 6861, 7618, 2]
// Exports: transitionToMemberVerification

// Module 6860 (transitionToMemberVerification)
import router_utils from "router_utils" /* 1099 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 5289 */;
import MemberVerificationAlertActionCreators from "MemberVerificationAlertActionCreators" /* 6861 */;
import MemberVerificationModalActionCreators from "MemberVerificationModalActionCreators" /* 7618 */;
import GuildStore from "GuildStore" /* 5114 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 5287 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/guild_member_verification/transitionToMemberVerification.native.tsx");

export function transitionToMemberVerification(guildId) {
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
}
