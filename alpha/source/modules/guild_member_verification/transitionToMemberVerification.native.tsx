// Module ID: 5744
// Function ID: 5745
// Name: transitionToMemberVerification
// Dependencies: [2064, 4579, 1074, 5745, 1101, 4581, 5746, 5788, 2]
// Exports: transitionToMemberVerification

// Module 5744 (transitionToMemberVerification)
import GuildStore from "GuildStore" /* 2064 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 4579 */;

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
      if (tmp(4581).GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
        const result = tmp(5746).openMemberVerificationPendingAlert(guildId);
        const tmpResult6 = tmp(5746);
      } else if (tmp(4581).GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
        const obj2 = { guildId, canWithdraw: true };
        const result1 = tmp(5746).openMemberVerificationRejectedAlert(obj2);
        const tmpResult7 = tmp(5746);
      } else if (tmp(4581).GuildJoinRequestApplicationStatuses.APPROVED === applicationStatus) {
        tmp(1101).transitionToGuild(guildId);
        const tmpResult8 = tmp(1101);
      } else {
        const result2 = tmp(5788).openMemberVerificationModal(guildId);
        const tmpResult9 = tmp(5788);
      }
    }
  } else {
    tmp(1101).transitionTo(Routes.GUILD_MEMBER_VERIFICATION(guildId));
    const tmpResult10 = tmp(1101);
  }
};
