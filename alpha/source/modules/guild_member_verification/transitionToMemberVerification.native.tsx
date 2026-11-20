// Module ID: 6398
// Function ID: 6399
// Name: transitionToMemberVerification
// Dependencies: [4665, 4828, 1098, 4830, 6399, 7166, 2]
// Exports: transitionToMemberVerification

// Module 6398 (transitionToMemberVerification)
import router_utils from "router_utils" /* 1098 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 4830 */;
import MemberVerificationAlertActionCreators from "MemberVerificationAlertActionCreators" /* 6399 */;
import MemberVerificationModalActionCreators from "MemberVerificationModalActionCreators" /* 7166 */;
import GuildStore from "GuildStore" /* 4665 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 4828 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/guild_member_verification/transitionToMemberVerification.native.tsx");

export function transitionToMemberVerification(guildId) {
  const guild = GuildStore.getGuild(guildId);
  let joinedAt;
  if (guild != null) {
    joinedAt = guild.joinedAt;
  }
  if (null == joinedAt) {
    const request = UserGuildJoinRequestStore.getRequest(guildId);
    let applicationStatus;
    if (request != null) {
      applicationStatus = request.applicationStatus;
    }
    if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
      const tmp9Result = MemberVerificationAlertActionCreators;
      const result = tmp9Result.openMemberVerificationPendingAlert(guildId);
    } else if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
      const obj2 = { guildId, canWithdraw: true };
      const tmp9Result4 = MemberVerificationAlertActionCreators;
      const result1 = tmp9Result4.openMemberVerificationRejectedAlert(obj2);
    } else if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.APPROVED === applicationStatus) {
      const tmp9Result5 = router_utils;
      tmp9Result5.transitionToGuild(guildId);
    } else {
      const tmp9Result6 = MemberVerificationModalActionCreators;
      const result2 = tmp9Result6.openMemberVerificationModal(guildId);
    }
  } else {
    const obj = router_utils;
    obj.transitionToGuild(guildId);
  }
}
