// Module ID: 18060
// Function ID: 18061
// Name: MemberVerificationApplicationManager
// Dependencies: [4939, 4940, 6807, 5300, 4942, 6102, 6116, 2]

// Module 18060 (MemberVerificationApplicationManager)
import MemberVerificationTypes from "MemberVerificationTypes" /* 4942 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5300 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4939 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 4940 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6807 */;
import size from "module_2" /* 2 */;

class MemberVerificationApplicationManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.isShowingAlert = false;
    applyArgumentsResult.actions = {
      POST_CONNECTION_OPEN() {
        return require.showApplicationApprovedAlert();
      },
      GUILD_JOIN_REQUEST_UPDATE() {
        return require.showApplicationApprovedAlert();
      },
      CHANNEL_SELECT() {
        return require.showApplicationApprovedAlert();
      }
    };
    applyArgumentsResult.showApplicationApprovedAlert = function showApplicationApprovedAlert() {
      const guildId = SelectedGuildStore.getGuildId();
      if (null == guildId) {
        if (require.isShowingAlert) {
          const obj3 = actions_AlertActionCreatorsDefault;
          obj3.close();
          tmp11.isShowingAlert = false;
        }
      } else {
        const request = UserGuildJoinRequestStore.getRequest(guildId);
        let applicationStatus;
        if (request != null) {
          applicationStatus = request.applicationStatus;
        }
        const tmp3 = require;
        if (applicationStatus === MemberVerificationTypes.GuildJoinRequestApplicationStatuses.APPROVED) {
          if (require.isShowingAlert) {
            let lastSeen;
            if (request != null) {
              lastSeen = request.lastSeen;
            }
            if (null !== lastSeen) {
              const obj2 = actions_AlertActionCreatorsDefault;
              obj2.close();
              require.isShowingAlert = false;
            }
          }
          let tmp6 = tmp17.isShowingAlert || null == request;
          if (!tmp6) {
            let lastSeen1;
            if (request != null) {
              lastSeen1 = request.lastSeen;
            }
            tmp6 = null !== lastSeen1;
          }
          if (!tmp6) {
            const tmp3Result = tmp3(6102);
            let result = tmp3Result.openMemberVerificationSuccessAlert(guildId, () => {
              const obj = closure_2_1(closure_2_2[6]);
              const result = obj.ackUserGuildJoinRequest(guildId, request.joinRequestId);
            });
            require.isShowingAlert = true;
          }
        }
      }
    };
    return applyArgumentsResult;
  }
}
const memberVerificationApplicationManager = new MemberVerificationApplicationManager();
let result = size.fileFinishedImporting("modules/guild_member_verification/native/components/MemberVerificationApplicationManager.tsx");

export default memberVerificationApplicationManager;
