// Module ID: 5776
// Function ID: 5777
// Name: transitionToMemberVerification
// Dependencies: [2067, 4613, 1078, 5777, 1105, 4615, 5778, 5820, 2]
// Exports: transitionToMemberVerification

// Module 5776 (transitionToMemberVerification)
import GuildStore from "GuildStore" /* 2067 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 4613 */;

const require = fn;
const Routes = fn(1078).Routes;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_member_verification/transitionToMemberVerification.native.tsx");

export const transitionToMemberVerification = function transitionToMemberVerification(guildId) {
  if (obj.getIsMemberVerificationRouteDeprecated("transitionToMemberVerification")) {
    if (null != GuildStore.getGuild(guildId)) {
      tmp(1105).transitionToGuild(guildId);
    } else {
      const request = UserGuildJoinRequestStore.getRequest(guildId);
      let applicationStatus;
      if (request != null) {
        applicationStatus = request.applicationStatus;
      }
      if (tmp(4615).GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
        const result = tmp(5778).openMemberVerificationPendingAlert(guildId);
        const tmpResult6 = tmp(5778);
      } else if (tmp(4615).GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
        const obj2 = { guildId, canWithdraw: true };
        const result1 = tmp(5778).openMemberVerificationRejectedAlert(obj2);
        const tmpResult7 = tmp(5778);
      } else if (tmp(4615).GuildJoinRequestApplicationStatuses.APPROVED === applicationStatus) {
        tmp(1105).transitionToGuild(guildId);
        const tmpResult8 = tmp(1105);
      } else {
        const result2 = tmp(5820).openMemberVerificationModal(guildId);
        const tmpResult9 = tmp(5820);
      }
    }
  } else {
    tmp(1105).transitionTo(Routes.GUILD_MEMBER_VERIFICATION(guildId));
    const tmpResult10 = tmp(1105);
  }
};
