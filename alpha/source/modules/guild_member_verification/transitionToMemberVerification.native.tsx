// Module ID: 5832
// Function ID: 5833
// Name: transitionToMemberVerification
// Dependencies: [2066, 4653, 1074, 5833, 1101, 4655, 5834, 5876, 2]
// Exports: transitionToMemberVerification

// Module 5832 (transitionToMemberVerification)
import GuildStore from "GuildStore" /* 2066 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 4653 */;

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
      if (tmp(4655).GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
        const result = tmp(5834).openMemberVerificationPendingAlert(guildId);
        const tmpResult6 = tmp(5834);
      } else if (tmp(4655).GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
        const obj2 = { guildId, canWithdraw: true };
        const result1 = tmp(5834).openMemberVerificationRejectedAlert(obj2);
        const tmpResult7 = tmp(5834);
      } else if (tmp(4655).GuildJoinRequestApplicationStatuses.APPROVED === applicationStatus) {
        tmp(1101).transitionToGuild(guildId);
        const tmpResult8 = tmp(1101);
      } else {
        const result2 = tmp(5876).openMemberVerificationModal(guildId);
        const tmpResult9 = tmp(5876);
      }
    }
  } else {
    tmp(1101).transitionTo(Routes.GUILD_MEMBER_VERIFICATION(guildId));
    const tmpResult10 = tmp(1101);
  }
};
