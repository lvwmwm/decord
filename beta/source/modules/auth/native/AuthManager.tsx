// Module ID: 15624
// Function ID: 15625
// Name: AuthManager
// Dependencies: [5, 17, 11796, 1086, 5046, 12095, 1989, 585, 2047, 15625, 1370, 11799, 9253, 12157, 12094, 6761, 7183, 2]

// Module 15624 (AuthManager)
import DispatcherDefault from "Dispatcher" /* 585 */;
import Constants from "Constants" /* 1086 */;
import PlatformUtils from "PlatformUtils" /* 1370 */;
import NativePermissionConstants from "NativePermissionConstants" /* 5046 */;
import transitionToGuild from "transitionToGuild" /* 6761 */;
import SentMessageIntentsHandlerDefault from "SentMessageIntentsHandler" /* 7183 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9253 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 11796 */;
import NUFActionCreators from "NUFActionCreators" /* 12094 */;
import NUFConstants from "NUFConstants" /* 12095 */;
import nuf_NUFActionCreators from "nuf/NUFActionCreators" /* 12157 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react_native from "react-native" /* 17 */;
import LifecycleManager from "LifecycleManager" /* 1989 */;
import size from "module_2" /* 2 */;

let DCDShortcutManager, LOGIN, c2;

let closure_4;
let hasOwnProperty;
let tmp;
const PushNotificationActionCreators = tmp(11799);
({ NativeModules: closure_4, Keyboard: hasOwnProperty } = react_native);
const PermissionStateType = PushNotificationPermissionStore.PermissionStateType;
const ME = Constants.ME;
let closure_8 = NativePermissionConstants.NotificationAuthorizationStatus;
const NewUserTypes = NUFConstants.NewUserTypes;
let closure_10 = { REGISTER: "register", LOGIN: "login" };
let c11 = null;
class AuthManager extends LifecycleManager {
  constructor() {
    let constants2;
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.handleRegister = function handleRegister() {
      LOGIN = constants2.REGISTER;
    };
    applyArgumentsResult.handleLogin = function handleLogin() {
      LOGIN = constants2.LOGIN;
    };
    let closure_0 = _asyncToGenerator(async (onComplete) => {
      let closure_1;
      let c3 = 0;
      let c4 = 0;
      return (async (arg0, value) => {
        if (c4 === 2) {
          c4 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            return { value, done: true };
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            c4 = 2;
            if (0 === c3) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                return { value, done: true };
              } else {
                c2 = 0;
                closure_1_5.dismiss();
                const tmp22 = onComplete;
                if (tmp(c2[8])()) {
                  tmp22();
                } else {
                  const NativePermissionManager = c4.NativePermissionManager;
                  c3 = 1;
                  c4 = 1;
                  const obj4 = { value: NativePermissionManager.getNotificationAuthorizationStatus(), done: false };
                  return obj4;
                }
              }
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else if (value === constants.UNDETERMINED) {
              const obj6 = { onComplete };
              const obj = onComplete(c2[9]);
              const result = obj.showPushNotificationPromptModal(obj6);
            } else {
              onComplete();
            }
            c4 = 3;
            return { value: "IconComponent", done: null };
          } catch (tmp18) {
            c4 = 3;
            throw tmp18;
          }
        }
      })();
    });
    applyArgumentsResult.handlePushNotificationOptIn = function() {
      return closure_0(...arguments);
    };
    applyArgumentsResult.handleRegisterWithConnection = function handleRegisterWithConnection() {
      const obj = PlatformUtils;
      if (obj.isIOS()) {
        const tmpResult = PushNotificationActionCreators;
        const result = tmpResult.setPushPermissionState(PermissionStateType.PROMPT_SEEN);
      }
      const result1 = require.handleRegisterComplete();
    };
    applyArgumentsResult.handleRegisterComplete = function handleRegisterComplete() {
      const obj = instant_invite_InstantInviteUtils;
      if (!obj.hasDeferredInvite()) {
        const tmpResult = nuf_NUFActionCreators;
        tmpResult.setNewUser(constants.ORGANIC_REGISTERED);
      }
      const tmpResult2 = NUFActionCreators;
      tmpResult2.startOnboarding();
    };
    applyArgumentsResult.handleLoginWithConnection = function handleLoginWithConnection() {
      const result = require.handlePushNotificationOptIn(() => {
        const obj = closure_1_0(closure_1_2[15]);
        obj.transitionToGuild(closure_1_7);
        const obj2 = closure_1_1(closure_1_2[7]);
        obj2.dispatch({ type: "DEFERRED_INVITE_SHOW" });
      });
    };
    applyArgumentsResult.handleConnectionOpen = function handleConnectionOpen() {
      if (constants2.REGISTER === c11) {
        const result = require.handleRegisterWithConnection();
        const DCDSKAdNetworkManager2 = React3.DCDSKAdNetworkManager;
        if (DCDSKAdNetworkManager2 != null) {
          const result1 = DCDSKAdNetworkManager2.updateConversionValue(1);
        }
      } else if (tmp2.LOGIN === tmp) {
        const result2 = require.handleLoginWithConnection();
        const DCDSKAdNetworkManager = React3.DCDSKAdNetworkManager;
        if (DCDSKAdNetworkManager != null) {
          const result3 = DCDSKAdNetworkManager.updateConversionValue(10);
        }
      } else {
        const obj = transitionToGuild;
        obj.transitionToGuild(ME);
      }
      c11 = null;
    };
    applyArgumentsResult.handleLogout = function handleLogout() {
      const obj = SentMessageIntentsHandlerDefault;
      const result = obj.deleteAllInteractions();
      DCDShortcutManager = DCDShortcutManager.DCDShortcutManager;
      if (DCDShortcutManager != null) {
        DCDShortcutManager.handleLogout();
      }
    };
    return applyArgumentsResult;
  }
  _initialize() {
    const obj = DispatcherDefault;
    const subscription = obj.subscribe("CONNECTION_OPEN", this.handleConnectionOpen);
    const obj2 = DispatcherDefault;
    const subscription1 = obj2.subscribe("LOGIN_SUCCESS", this.handleLogin);
    const obj3 = DispatcherDefault;
    const subscription2 = obj3.subscribe("REGISTER_SUCCESS", this.handleRegister);
    const obj4 = DispatcherDefault;
    const subscription3 = obj4.subscribe("LOGOUT", this.handleLogout);
  }
  _terminate() {
    const obj = DispatcherDefault;
    obj.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen);
    const obj2 = DispatcherDefault;
    obj2.unsubscribe("LOGIN_SUCCESS", this.handleLogin);
    const obj3 = DispatcherDefault;
    obj3.unsubscribe("REGISTER_SUCCESS", this.handleRegister);
    const obj4 = DispatcherDefault;
    obj4.unsubscribe("LOGOUT", this.handleLogout);
  }
}
const prototype = AuthManager.prototype;
const authManager = new AuthManager();
let result = size.fileFinishedImporting("modules/auth/native/AuthManager.tsx");

export default authManager;
