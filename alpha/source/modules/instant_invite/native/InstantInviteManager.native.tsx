// Module ID: 18017
// Function ID: 18018
// Name: InstantInviteManager
// Dependencies: [6804, 4768, 1126, 2]

// Module 18017 (InstantInviteManager)
import intl2 from "intl" /* 1126 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4768 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6804 */;
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
      const obj = { key: "GROUP_DM_ADD_ERROR", content: intl.string(intl2.t["N/9OFy"]) };
      const open = ToastActionCreatorsDefault.open;
      ToastActionCreatorsDefault;
      intl = intl2.intl;
      open(obj);
    };
    return applyArgumentsResult;
  }
}
const instantInviteManager = new InstantInviteManager();
const result = size.fileFinishedImporting("modules/instant_invite/native/InstantInviteManager.native.tsx");

export default instantInviteManager;
