// Module ID: 6023
// Function ID: 6024
// Name: transitionToMemberVerification
// Dependencies: [2066, 4685, 1101, 4687, 6024, 6067, 2]
// Exports: transitionToMemberVerification

// Module 6023 (transitionToMemberVerification)
import router_utils from "router_utils" /* 1101 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 4687 */;
import GuildStore from "GuildStore" /* 2066 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 4685 */;

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
      const result = tmp7(6024).openMemberVerificationPendingAlert(guildId);
      const tmp7Result = tmp7(6024);
    } else if (tmp7(4687).GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
      const obj2 = { guildId, canWithdraw: true };
      const result1 = tmp7(6024).openMemberVerificationRejectedAlert(obj2);
      const tmp7Result4 = tmp7(6024);
    } else if (tmp7(4687).GuildJoinRequestApplicationStatuses.APPROVED === applicationStatus) {
      tmp7(1101).transitionToGuild(guildId);
      const tmp7Result5 = tmp7(1101);
    } else {
      const result2 = tmp7(6067).openMemberVerificationModal(guildId);
      const tmp7Result6 = tmp7(6067);
    }
  } else {
    router_utils.transitionToGuild(guildId);
  }
};
