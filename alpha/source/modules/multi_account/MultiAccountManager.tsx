// Module ID: 19724
// Function ID: 19725
// Name: MultiAccountManager
// Dependencies: [4861, 1386, 13333, 15054, 7444, 572, 15055, 6095, 2]

// Module 19724 (MultiAccountManager)
import DispatcherDefault from "Dispatcher" /* 572 */;
import transitionToChannel from "transitionToChannel" /* 6095 */;
import GatewaySocket from "GatewaySocket" /* 15055 */;
import ChannelStore from "ChannelStore" /* 4861 */;
import UserStore from "UserStore" /* 1386 */;
import MultiAccountStore from "MultiAccountStore" /* 13333 */;
import MultiAccountSwitchStore from "MultiAccountSwitchStore" /* 15054 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7444 */;
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
