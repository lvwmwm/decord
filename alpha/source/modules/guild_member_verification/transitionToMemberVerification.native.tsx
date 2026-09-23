// Module ID: 5828
// Function ID: 5829
// Name: transitionToMemberVerification
// Dependencies: [2064, 4649, 1074, 5829, 1101, 4651, 5830, 5872, 2]
// Exports: transitionToMemberVerification

// Module 5828 (transitionToMemberVerification)
import GuildStore from "GuildStore" /* 2064 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 4649 */;

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
      if (tmp(4651).GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
        const result = tmp(5830).openMemberVerificationPendingAlert(guildId);
        const tmpResult6 = tmp(5830);
      } else if (tmp(4651).GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
        const obj2 = { guildId, canWithdraw: true };
        const result1 = tmp(5830).openMemberVerificationRejectedAlert(obj2);
        const tmpResult7 = tmp(5830);
      } else if (tmp(4651).GuildJoinRequestApplicationStatuses.APPROVED === applicationStatus) {
        tmp(1101).transitionToGuild(guildId);
        const tmpResult8 = tmp(1101);
      } else {
        const result2 = tmp(5872).openMemberVerificationModal(guildId);
        const tmpResult9 = tmp(5872);
      }
    }
  } else {
    tmp(1101).transitionTo(Routes.GUILD_MEMBER_VERIFICATION(guildId));
    const tmpResult10 = tmp(1101);
  }
};
