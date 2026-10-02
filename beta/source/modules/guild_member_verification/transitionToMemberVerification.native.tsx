// Module ID: 5838
// Function ID: 5839
// Name: transitionToMemberVerification
// Dependencies: [2073, 4658, 1086, 5839, 1113, 4660, 5840, 5882, 2]
// Exports: transitionToMemberVerification

// Module 5838 (transitionToMemberVerification)
import Constants from "Constants" /* 1086 */;
import router_utils from "router_utils" /* 1113 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 4660 */;
import MemberVerificationRouteExperiment from "MemberVerificationRouteExperiment" /* 5839 */;
import MemberVerificationAlertActionCreators from "MemberVerificationAlertActionCreators" /* 5840 */;
import MemberVerificationModalActionCreators from "MemberVerificationModalActionCreators" /* 5882 */;
import GuildStore from "GuildStore" /* 2073 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 4658 */;
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
