// Module ID: 17847
// Function ID: 17848
// Name: MultiAccountManager
// Dependencies: [1376, 13933, 7397, 577, 13934, 2]

// Module 17847 (MultiAccountManager)
import DispatcherDefault from "Dispatcher" /* 577 */;
import GatewaySocket from "GatewaySocket" /* 13934 */;
import UserStore from "UserStore" /* 1376 */;
import MultiAccountSwitchStore from "MultiAccountSwitchStore" /* 13933 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7397 */;

require = fn;
class MultiAccountManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.actions = {
      LOGOUT(arg0) {
            return applyArgumentsResult.handleLogout(arg0);
          },
      MULTI_ACCOUNT_SWITCH_START(targetUserId) {
            return applyArgumentsResult.handleMultiAccountSwitchStart(targetUserId);
          }
    };
    applyArgumentsResult.handleConnectionOpen = function handleConnectionOpen() {
      let switchResult = MultiAccountSwitchStore.getSwitchResult();
      if (null != switchResult) {
        const currentUser = UserStore.getCurrentUser();
        if (null != currentUser) {
          let obj = applyArgumentsResult;
          if (switchResult.success) {
            switchResult = obj.onSwitchSuccess(currentUser, switchResult.navigateHome);
            let obj2 = obj;
          } else {
            obj.onSwitchError(currentUser);
            obj2 = obj;
          }
          obj = GatewaySocket;
          const result = obj.setAccountSwitchUserId(null);
          obj2.onSwitchComplete();
        }
      }
    };
    return applyArgumentsResult;
  }
}
const prototype = MultiAccountManager.prototype;
prototype["_initialize"] = function _initialize() {
  const subscription = DispatcherDefault.subscribe("CONNECTION_OPEN", this.handleConnectionOpen);
  this.handleConnectionOpen();
};
prototype["_terminate"] = function _terminate() {
  DispatcherDefault.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen);
};
prototype["handleLogout"] = function handleLogout(isSwitchingAccount) {
  if (isSwitchingAccount.isSwitchingAccount) {
    const self = this;
    this.onSwitchStart();
  }
};
prototype["handleMultiAccountSwitchStart"] = function handleMultiAccountSwitchStart(targetUserId) {
  const result = GatewaySocket.setAccountSwitchUserId(targetUserId.targetUserId);
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/multi_account/MultiAccountManager.tsx");

export default MultiAccountManager;
