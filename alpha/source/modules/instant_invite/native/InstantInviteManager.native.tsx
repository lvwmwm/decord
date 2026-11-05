// Module ID: 19824
// Function ID: 19825
// Name: InstantInviteManager
// Dependencies: [7426, 5849, 1113, 2]

// Module 19824 (InstantInviteManager)
import intl2 from "intl" /* 1113 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5849 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7426 */;
import size from "module_2" /* 2 */;

class InstantInviteManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.actions = {
      NATIVE_APP_INSTANT_INVITE_GDM_SHARE_FAILED() {
        return require.shareInviteFailed();
      }
    };
    applyArgumentsResult.shareInviteFailed = function shareInviteFailed() {
      let intl;
      const obj = { text: intl.string(intl2.t["N/9OFy"]) };
      const open = ToastActionCreatorsDefault.open;
      ToastActionCreatorsDefault;
      intl = intl2.intl;
      open("GROUP_DM_ADD_ERROR", obj);
    };
    return applyArgumentsResult;
  }
}
const instantInviteManager = new InstantInviteManager();
const result = size.fileFinishedImporting("modules/instant_invite/native/InstantInviteManager.native.tsx");

export default instantInviteManager;
