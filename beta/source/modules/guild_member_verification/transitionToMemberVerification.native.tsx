// Module ID: 5837
// Function ID: 5838
// Name: transitionToMemberVerification
// Dependencies: [2067, 4656, 1074, 5838, 1101, 4658, 5839, 5881, 2]
// Exports: transitionToMemberVerification

// Module 5837 (transitionToMemberVerification)
import Constants from "Constants" /* 1074 */;
import router_utils from "router_utils" /* 1101 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 4658 */;
import MemberVerificationRouteExperiment from "MemberVerificationRouteExperiment" /* 5838 */;
import MemberVerificationAlertActionCreators from "MemberVerificationAlertActionCreators" /* 5839 */;
import MemberVerificationModalActionCreators from "MemberVerificationModalActionCreators" /* 5881 */;
import GuildStore from "GuildStore" /* 2067 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 4656 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
let result = size.fileFinishedImporting("modules/guild_member_verification/transitionToMemberVerification.native.tsx");

export const transitionToMemberVerification = function transitionToMemberVerification(guildId) {
  const obj = MemberVerificationRouteExperiment;
  if (obj.getIsMemberVerificationRouteDeprecated("transitionToMemberVerification")) {
    if (null != GuildStore.getGuild(guildId)) {
      const tmpResult = router_utils;
      tmpResult.transitionToGuild(guildId);
    } else {
      const request = UserGuildJoinRequestStore.getRequest(guildId);
      let applicationStatus;
      if (request != null) {
        applicationStatus = request.applicationStatus;
      }
      if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
        const tmpResult6 = MemberVerificationAlertActionCreators;
        const result = tmpResult6.openMemberVerificationPendingAlert(guildId);
      } else if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
        const obj2 = { guildId, canWithdraw: true };
        const tmpResult7 = MemberVerificationAlertActionCreators;
        const result1 = tmpResult7.openMemberVerificationRejectedAlert(obj2);
      } else if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.APPROVED === applicationStatus) {
        const tmpResult8 = router_utils;
        tmpResult8.transitionToGuild(guildId);
      } else {
        const tmpResult9 = MemberVerificationModalActionCreators;
        const result2 = tmpResult9.openMemberVerificationModal(guildId);
      }
    }
  } else {
    const tmpResult10 = router_utils;
    tmpResult10.transitionTo(Routes.GUILD_MEMBER_VERIFICATION(guildId));
  }
};
