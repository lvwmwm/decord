// Module ID: 18455
// Function ID: 18456
// Name: MultiAccountManager
// Dependencies: [1390, 14600, 7028, 584, 14601, 2]

// Module 18455 (MultiAccountManager)
import DispatcherDefault from "Dispatcher" /* 584 */;
import GatewaySocket from "GatewaySocket" /* 14601 */;
import UserStore from "UserStore" /* 1390 */;
import MultiAccountSwitchStore from "MultiAccountSwitchStore" /* 14600 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7028 */;
import size from "module_2" /* 2 */;

class MultiAccountManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.actions = {
      LOGOUT(arg0) {
        return require.handleLogout(arg0);
      },
      MULTI_ACCOUNT_SWITCH_START(targetUserId) {
        return require.handleMultiAccountSwitchStart(targetUserId);
      }
    };
    applyArgumentsResult.handleConnectionOpen = function handleConnectionOpen() {
      const switchResult = MultiAccountSwitchStore.getSwitchResult();
      if (null != switchResult) {
        const currentUser = UserStore.getCurrentUser();
        if (null != currentUser) {
          let obj2;
          if (switchResult.success) {
            require.onSwitchSuccess(currentUser, switchResult.navigateHome);
            obj2 = obj;
          } else {
            require.onSwitchError(currentUser);
            obj2 = obj;
          }
          const obj3 = GatewaySocket;
          const result = obj3.setAccountSwitchUserId(null);
          obj2.onSwitchComplete();
        }
      }
    };
    return applyArgumentsResult;
  }
  _initialize() {
    const obj = DispatcherDefault;
    const subscription = obj.subscribe("CONNECTION_OPEN", this.handleConnectionOpen);
    this.handleConnectionOpen();
  }
  _terminate() {
    const obj = DispatcherDefault;
    obj.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen);
  }
  handleLogout(isSwitchingAccount) {
    if (isSwitchingAccount.isSwitchingAccount) {
      const self = this;
      this.onSwitchStart();
    }
  }
  handleMultiAccountSwitchStart(targetUserId) {
    const obj = GatewaySocket;
    const result = obj.setAccountSwitchUserId(targetUserId.targetUserId);
  }
}
const prototype = MultiAccountManager.prototype;
let result = size.fileFinishedImporting("modules/multi_account/MultiAccountManager.tsx");

export default MultiAccountManager;
