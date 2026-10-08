// Module ID: 17863
// Function ID: 17864
// Name: InstantInviteManager
// Dependencies: [6797, 4766, 1126, 2]

// Module 17863 (InstantInviteManager)
import intl2 from "intl" /* 1126 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4766 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6797 */;
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
