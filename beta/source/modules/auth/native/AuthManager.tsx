// Module ID: 16331
// Function ID: 16332
// Name: AuthManager
// Dependencies: [5, 17, 12692, 1074, 4997, 12987, 1982, 573, 2037, 16332, 1364, 12695, 10115, 13028, 12986, 7616, 8034, 2]

// Module 16331 (AuthManager)
import DispatcherDefault from "Dispatcher" /* 573 */;
import transitionToGuild from "transitionToGuild" /* 7616 */;
import SentMessageIntentsHandlerDefault from "SentMessageIntentsHandler" /* 8034 */;
import PushNotificationActionCreators from "PushNotificationActionCreators" /* 12695 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import LifecycleManager from "LifecycleManager" /* 1982 */;

require = fn;
get_ActivityIndicator = fn(17);
({ NativeModules: closure_4, Keyboard: hasOwnProperty } = get_ActivityIndicator);
const PermissionStateType = fn(12692).PermissionStateType;
const ME = fn(1074).ME;
let closure_8 = fn(4997).NotificationAuthorizationStatus;
const NewUserTypes = fn(12987).NewUserTypes;
let closure_10 = { REGISTER: "register", LOGIN: "login" };
let c11 = null;
class AuthManager extends tmp3 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.handleRegister = function handleRegister() {
      LOGIN = constants2.REGISTER;
    };
    applyArgumentsResult.handleLogin = function handleLogin() {
      LOGIN = constants2.LOGIN;
    };
    closure_129_0 = undefined;
    closure_129_0 = closure_3(async (arg0, value) => {
      if (DCDShortcutManager === 2) {
        DCDShortcutManager = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          DCDShortcutManager = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              DCDShortcutManager = 3;
              throw value;
            } else if (arg0 === 2) {
              DCDShortcutManager = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              dependencyMap = 0;
              closure_129_0 = applyArgumentsResult;
              closure_1_5.dismiss();
              if (tmp2(2037)()) {
                tmp24();
                DCDShortcutManager = 3;
              } else {
                const NativePermissionManager = DCDShortcutManager.NativePermissionManager;
                c3 = 1;
                DCDShortcutManager = 1;
                const obj4 = { value: NativePermissionManager.getNotificationAuthorizationStatus(), done: false };
                return obj4;
              }
              tmp24 = applyArgumentsResult;
            }
          } else if (arg0 === 1) {
            DCDShortcutManager = 3;
            throw value;
          } else if (arg0 === 2) {
            DCDShortcutManager = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else if (value !== constants.UNDETERMINED) {
            closure_129_0();
          }
          const obj6 = { onComplete: closure_129_0 };
          const result = applyArgumentsResult(16332).showPushNotificationPromptModal(obj6);
          const obj = applyArgumentsResult(16332);
        } catch (tmp19) {
          DCDShortcutManager = tmp;
          throw tmp19;
        }
      }
    });
    applyArgumentsResult.handlePushNotificationOptIn = function() {
      const self = this;
      const apply = applyArgumentsResult.apply;
      if (typeof apply === "unknown") {
        applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    applyArgumentsResult.handleRegisterWithConnection = function handleRegisterWithConnection() {
      if (obj.isIOS()) {
        const result = PushNotificationActionCreators.setPushPermissionState(PermissionStateType.PROMPT_SEEN);
        const tmpResult = PushNotificationActionCreators;
      }
      const result1 = applyArgumentsResult.handleRegisterComplete();
    };
    applyArgumentsResult.handleRegisterComplete = function handleRegisterComplete() {
      if (!obj.hasDeferredInvite()) {
        tmp(13028).setNewUser(constants.ORGANIC_REGISTERED);
        const tmpResult = tmp(13028);
      }
      obj = applyArgumentsResult(10115);
      applyArgumentsResult(12986).startOnboarding();
    };
    applyArgumentsResult.handleLoginWithConnection = function handleLoginWithConnection() {
      const result = applyArgumentsResult.handlePushNotificationOptIn(() => {
        closure_1_0(7616).transitionToGuild(closure_1_7);
        const obj = closure_1_0(7616);
        closure_1_1(573).dispatch({ type: "DEFERRED_INVITE_SHOW" });
      });
    };
    applyArgumentsResult.handleConnectionOpen = function handleConnectionOpen() {
      if (constants2.REGISTER === c11) {
        const result = applyArgumentsResult.handleRegisterWithConnection();
        const DCDSKAdNetworkManager2 = React4.DCDSKAdNetworkManager;
        if (DCDSKAdNetworkManager2 != null) {
          const result1 = DCDSKAdNetworkManager2.updateConversionValue(1);
        }
      } else if (tmp2.LOGIN === tmp) {
        const result2 = applyArgumentsResult.handleLoginWithConnection();
        const DCDSKAdNetworkManager = React4.DCDSKAdNetworkManager;
        if (DCDSKAdNetworkManager != null) {
          const result3 = DCDSKAdNetworkManager.updateConversionValue(10);
        }
      } else {
        transitionToGuild.transitionToGuild(ME);
      }
      c11 = null;
    };
    applyArgumentsResult.handleLogout = function handleLogout() {
      const result = SentMessageIntentsHandlerDefault.deleteAllInteractions();
      DCDShortcutManager = DCDShortcutManager.DCDShortcutManager;
      if (DCDShortcutManager != null) {
        DCDShortcutManager.handleLogout();
      }
    };
    return applyArgumentsResult;
  }
}
const prototype = AuthManager.prototype;
prototype["_initialize"] = function _initialize() {
  const subscription = DispatcherDefault.subscribe("CONNECTION_OPEN", this.handleConnectionOpen);
  const subscription1 = DispatcherDefault.subscribe("LOGIN_SUCCESS", this.handleLogin);
  const subscription2 = DispatcherDefault.subscribe("REGISTER_SUCCESS", this.handleRegister);
  const subscription3 = DispatcherDefault.subscribe("LOGOUT", this.handleLogout);
};
prototype["_terminate"] = function _terminate() {
  DispatcherDefault.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen);
  DispatcherDefault.unsubscribe("LOGIN_SUCCESS", this.handleLogin);
  DispatcherDefault.unsubscribe("REGISTER_SUCCESS", this.handleRegister);
  DispatcherDefault.unsubscribe("LOGOUT", this.handleLogout);
};
const authManager = new AuthManager();
const size = fn(2);
let result = size.fileFinishedImporting("modules/auth/native/AuthManager.tsx");

export default authManager;
