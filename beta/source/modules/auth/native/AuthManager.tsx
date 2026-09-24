// Module ID: 16341
// Function ID: 16342
// Name: AuthManager
// Dependencies: [5, 17, 12594, 1078, 4999, 12888, 1986, 577, 2041, 16342, 1368, 12597, 10094, 12931, 12887, 7618, 8039, 2]

// Module 16341 (AuthManager)
import DispatcherDefault from "Dispatcher" /* 577 */;
import transitionToGuild from "transitionToGuild" /* 7618 */;
import SentMessageIntentsHandlerDefault from "SentMessageIntentsHandler" /* 8039 */;
import PushNotificationActionCreators from "PushNotificationActionCreators" /* 12597 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import LifecycleManager from "LifecycleManager" /* 1986 */;

require = fn;
get_ActivityIndicator = fn(17);
({ NativeModules: closure_4, Keyboard: hasOwnProperty } = get_ActivityIndicator);
const PermissionStateType = fn(12594).PermissionStateType;
const ME = fn(1078).ME;
let closure_8 = fn(4999).NotificationAuthorizationStatus;
const NewUserTypes = fn(12888).NewUserTypes;
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
          return { value: "IconComponent", done: null };
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
              if (tmp2(2041)()) {
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
          const result = applyArgumentsResult(16342).showPushNotificationPromptModal(obj6);
          const obj = applyArgumentsResult(16342);
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
        tmp(12931).setNewUser(constants.ORGANIC_REGISTERED);
        const tmpResult = tmp(12931);
      }
      obj = applyArgumentsResult(10094);
      applyArgumentsResult(12887).startOnboarding();
    };
    applyArgumentsResult.handleLoginWithConnection = function handleLoginWithConnection() {
      const result = applyArgumentsResult.handlePushNotificationOptIn(() => {
        closure_1_0(7618).transitionToGuild(closure_1_7);
        const obj = closure_1_0(7618);
        closure_1_1(577).dispatch({ type: "DEFERRED_INVITE_SHOW" });
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
