// Module ID: 5830
// Function ID: 5831
// Name: transitionToMemberVerification
// Dependencies: [2066, 4651, 1074, 5831, 1101, 4653, 5832, 5874, 2]
// Exports: transitionToMemberVerification

// Module 5830 (transitionToMemberVerification)
import GuildStore from "GuildStore" /* 2066 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 4651 */;

const require = fn;
const Routes = fn(1074).Routes;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_member_verification/transitionToMemberVerification.native.tsx");

export const transitionToMemberVerification = function transitionToMemberVerification(guildId) {
  if (obj.getIsMemberVerificationRouteDeprecated("transitionToMemberVerification")) {
    if (null != GuildStore.getGuild(guildId)) {
      tmp(1101).transitionToGuild(guildId);
    } else {
      const request = UserGuildJoinRequestStore.getRequest(guildId);
      let applicationStatus;
      if (request != null) {
        applicationStatus = request.applicationStatus;
      }
      if (tmp(4653).GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
        const result = tmp(5832).openMemberVerificationPendingAlert(guildId);
        const tmpResult6 = tmp(5832);
      } else if (tmp(4653).GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
        const obj2 = { guildId, canWithdraw: true };
        const result1 = tmp(5832).openMemberVerificationRejectedAlert(obj2);
        const tmpResult7 = tmp(5832);
      } else if (tmp(4653).GuildJoinRequestApplicationStatuses.APPROVED === applicationStatus) {
        tmp(1101).transitionToGuild(guildId);
        const tmpResult8 = tmp(1101);
      } else {
        const result2 = tmp(5874).openMemberVerificationModal(guildId);
        const tmpResult9 = tmp(5874);
      }
    }
  } else {
    tmp(1101).transitionTo(Routes.GUILD_MEMBER_VERIFICATION(guildId));
    const tmpResult10 = tmp(1101);
  }
};
