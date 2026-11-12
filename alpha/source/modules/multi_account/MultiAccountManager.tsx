// Module ID: 20154
// Function ID: 20155
// Name: MultiAccountManager
// Dependencies: [5092, 1385, 14716, 15997, 7816, 572, 15998, 6000, 2]

// Module 20154 (MultiAccountManager)
import DispatcherDefault from "Dispatcher" /* 572 */;
import transitionToChannel from "transitionToChannel" /* 6000 */;
import GatewaySocket from "GatewaySocket" /* 15998 */;
import ChannelStore from "ChannelStore" /* 5092 */;
import UserStore from "UserStore" /* 1385 */;
import MultiAccountStore from "MultiAccountStore" /* 14716 */;
import MultiAccountSwitchStore from "MultiAccountSwitchStore" /* 15997 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7816 */;
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
  transitionToLastChannel(id) {
    const lastChannelId = MultiAccountStore.getLastChannelId(id);
    let flag = null != lastChannelId && null != ChannelStore.getChannel(lastChannelId);
    if (flag) {
      const obj = transitionToChannel;
      obj.transitionToChannel(lastChannelId, { navigationReplace: true });
      flag = true;
    }
    return flag;
  }
}
const prototype = MultiAccountManager.prototype;
let result = size.fileFinishedImporting("modules/multi_account/MultiAccountManager.tsx");

export default MultiAccountManager;
