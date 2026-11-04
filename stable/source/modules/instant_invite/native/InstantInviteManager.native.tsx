// Module ID: 18887
// Function ID: 18888
// Name: InstantInviteManager
// Dependencies: [7246, 5695, 1128, 2]

// Module 18887 (InstantInviteManager)
import intl2 from "intl" /* 1128 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5695 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7246 */;
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
