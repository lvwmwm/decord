// Module ID: 6004
// Function ID: 6005
// Name: transitionToMemberVerification
// Dependencies: [2067, 4656, 1101, 4658, 6005, 6047, 2]
// Exports: transitionToMemberVerification

// Module 6004 (transitionToMemberVerification)
import router_utils from "router_utils" /* 1101 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 4658 */;
import GuildStore from "GuildStore" /* 2067 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 4656 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_member_verification/transitionToMemberVerification.native.tsx");

export const transitionToMemberVerification = function transitionToMemberVerification(guildId) {
  if (null == GuildStore.getGuild(guildId)) {
    const request = UserGuildJoinRequestStore.getRequest(guildId);
    let applicationStatus;
    if (request != null) {
      applicationStatus = request.applicationStatus;
    }
    if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
      const result = tmp7(6005).openMemberVerificationPendingAlert(guildId);
      const tmp7Result = tmp7(6005);
    } else if (tmp7(4658).GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
      const obj2 = { guildId, canWithdraw: true };
      const result1 = tmp7(6005).openMemberVerificationRejectedAlert(obj2);
      const tmp7Result4 = tmp7(6005);
    } else if (tmp7(4658).GuildJoinRequestApplicationStatuses.APPROVED === applicationStatus) {
      tmp7(1101).transitionToGuild(guildId);
      const tmp7Result5 = tmp7(1101);
    } else {
      const result2 = tmp7(6047).openMemberVerificationModal(guildId);
      const tmp7Result6 = tmp7(6047);
    }
  } else {
    router_utils.transitionToGuild(guildId);
  }
};
