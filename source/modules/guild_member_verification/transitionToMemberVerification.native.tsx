// Module ID: 5480
// Function ID: 5481
// Name: transitionToMemberVerification
// Dependencies: [1908, 4303, 673, 5481, 1219, 4305, 5482, 5524, 2]
// Exports: transitionToMemberVerification

// Module 5480 (transitionToMemberVerification)
import RemoveMemberVerificationRouteExperiment from "RemoveMemberVerificationRouteExperiment" /* 5481 */;
import closure_2 from "createGuildRecordFromRust" /* 1908 */;
import closure_3 from "handleGatewayJoinRequestUpdate" /* 4303 */;
import { Routes } from "ME" /* 673 */;

require = arg1;
let result = require("set").fileFinishedImporting("modules/guild_member_verification/transitionToMemberVerification.native.tsx");

export const transitionToMemberVerification = function transitionToMemberVerification(closure_0) {
  let obj = RemoveMemberVerificationRouteExperiment;
  if (obj.getIsMemberVerificationRouteDeprecated("transitionToMemberVerification")) {
    if (null != guild.getGuild(closure_0)) {
      let tmpResult = tmp(1219);
      tmpResult.transitionToGuild(closure_0);
    } else {
      request = request.getRequest(closure_0);
      let applicationStatus;
      if (request != null) {
        applicationStatus = request.applicationStatus;
      }
      if (tmp(4305).GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
        tmpResult = tmp(5482);
        const result = tmpResult.openMemberVerificationPendingAlert(closure_0);
      } else if (tmp(4305).GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
        obj = { guildId: null, canWithdraw: true };
        obj[0] = closure_0;
        const result1 = tmp(5482).openMemberVerificationRejectedAlert(obj);
        const tmpResult1 = tmp(5482);
      } else if (tmp(4305).GuildJoinRequestApplicationStatuses.APPROVED === applicationStatus) {
        tmp(1219).transitionToGuild(closure_0);
        const tmpResult2 = tmp(1219);
      } else {
        const result2 = tmp(5524).openMemberVerificationModal(closure_0);
        const tmpResult3 = tmp(5524);
      }
    }
  } else {
    tmp(1219).transitionTo(Routes.GUILD_MEMBER_VERIFICATION(closure_0));
    const tmpResult4 = tmp(1219);
  }
};
