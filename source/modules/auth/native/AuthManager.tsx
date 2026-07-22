// Module ID: 14667
// Function ID: 110583
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 14667 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
({ NativeModules: closure_9, Keyboard: closure_10 } = arg1(dependencyMap[6]));
const PermissionStateType = arg1(dependencyMap[7]).PermissionStateType;
const ME = arg1(dependencyMap[8]).ME;
let closure_13 = arg1(dependencyMap[9]).NotificationAuthorizationStatus;
const NewUserTypes = arg1(dependencyMap[10]).NewUserTypes;
let closure_15 = { REGISTER: "register", LOGIN: "login" };
let closure_16 = null;
let tmp3 = (arg0) => {
  class AuthManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_4(this, AuthManager);
      items1 = [...items];
      obj = closure_7(AuthManager);
      tmp2 = closure_6;
      if (closure_17()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_7;
        constructResult = Reflect.construct(obj, items1, closure_7(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      AuthManager = tmp2Result;
      tmp2Result.handleRegister = () => {
        const REGISTER = constants3.REGISTER;
      };
      tmp2Result.handleLogin = () => {
        const LOGIN = constants3.LOGIN;
      };
      tmp2Result.handlePushNotificationOptIn = () => {
        // CreateGeneratorClosureLongIndex (0x67)
        let closure_0 = callback2(tmp);
        return function() {
          return callback(...arguments);
        };
      }();
      tmp2Result.handleRegisterWithConnection = () => {
        if (obj.isIOS()) {
          const result = tmp2Result(closure_2[14]).setPushPermissionState(constants.PROMPT_SEEN);
          const obj2 = tmp2Result(closure_2[14]);
        }
        const result1 = tmp2Result.handleRegisterComplete();
      };
      tmp2Result.handleRegisterComplete = () => {
        if (!obj.hasDeferredInvite()) {
          tmp2Result(closure_2[16]).setNewUser(constants2.ORGANIC_REGISTERED);
          const obj2 = tmp2Result(closure_2[16]);
        }
        const obj = tmp2Result(closure_2[15]);
        tmp2Result(closure_2[17]).startOnboarding();
      };
      tmp2Result.handleLoginWithConnection = () => {
        const result = tmp2Result.handlePushNotificationOptIn(() => {
          callback(closure_2[18]).transitionToGuild(closure_12);
          const obj = callback(closure_2[18]);
          callback2(closure_2[19]).dispatch({ type: "DEFERRED_INVITE_SHOW" });
        });
      };
      tmp2Result.handleConnectionOpen = () => {
        if (constants3.REGISTER === closure_16) {
          const result = tmp2Result.handleRegisterWithConnection();
          const DCDSKAdNetworkManager2 = closure_9.DCDSKAdNetworkManager;
          if (null != DCDSKAdNetworkManager2) {
            const result1 = DCDSKAdNetworkManager2.updateConversionValue(1);
          }
        } else if (constants3.LOGIN === tmp) {
          const result2 = tmp2Result.handleLoginWithConnection();
          const DCDSKAdNetworkManager = closure_9.DCDSKAdNetworkManager;
          if (null != DCDSKAdNetworkManager) {
            const result3 = DCDSKAdNetworkManager.updateConversionValue(10);
          }
        } else {
          tmp2Result(closure_2[18]).transitionToGuild(closure_12);
          const obj = tmp2Result(closure_2[18]);
        }
        closure_16 = null;
      };
      tmp2Result.handleLogout = () => {
        const result = callback(closure_2[20]).deleteAllInteractions();
        const DCDShortcutManager = closure_9.DCDShortcutManager;
        if (null != DCDShortcutManager) {
          DCDShortcutManager.handleLogout();
        }
      };
      return tmp2Result;
    }
  }
  const arg1 = AuthManager;
  callback2(AuthManager, arg0);
  let obj = {
    key: "_initialize",
    value() {
      const subscription = callback(closure_2[19]).subscribe("CONNECTION_OPEN", this.handleConnectionOpen);
      const obj = callback(closure_2[19]);
      const subscription1 = callback(closure_2[19]).subscribe("LOGIN_SUCCESS", this.handleLogin);
      const obj2 = callback(closure_2[19]);
      const subscription2 = callback(closure_2[19]).subscribe("REGISTER_SUCCESS", this.handleRegister);
      const obj3 = callback(closure_2[19]);
      const subscription3 = callback(closure_2[19]).subscribe("LOGOUT", this.handleLogout);
    }
  };
  const items = [obj, ];
  obj = {
    key: "_terminate",
    value() {
      callback(closure_2[19]).unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen);
      const obj = callback(closure_2[19]);
      callback(closure_2[19]).unsubscribe("LOGIN_SUCCESS", this.handleLogin);
      const obj2 = callback(closure_2[19]);
      callback(closure_2[19]).unsubscribe("REGISTER_SUCCESS", this.handleRegister);
      const obj3 = callback(closure_2[19]);
      callback(closure_2[19]).unsubscribe("LOGOUT", this.handleLogout);
    }
  };
  items[1] = obj;
  return callback(AuthManager, items);
}(importDefault(dependencyMap[21]));
tmp3 = new tmp3();
const tmp2 = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[22]).fileFinishedImporting("modules/auth/native/AuthManager.tsx");

export default tmp3;
