// Module ID: 13515
// Function ID: 102540
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 13515 (_isNativeReflectConstruct)
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
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
const LoginStates = arg1(dependencyMap[8]).LoginStates;
let closure_12 = false;
let closure_13 = false;
let tmp2 = (arg0) => {
  class PasskeyUpsellManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, PasskeyUpsellManager);
      items1 = [...items];
      obj = closure_6(PasskeyUpsellManager);
      tmp2 = closure_5;
      if (closure_14()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.actions = { POST_CONNECTION_OPEN: tmp2Result.handlePasskeyUpsellShow, LOGIN_RESET: tmp2Result.handleLogout, LOGIN_SUCCESS: tmp2Result.handleLoginSuccess, LOGOUT: tmp2Result.handleLogout };
      map = new Map();
      result = map.set(closure_8, tmp2Result.handlePasskeyUpsellShow);
      result1 = result.set(closure_9, tmp2Result.handlePasskeyUpsellShow);
      tmp2Result.stores = result1.set(closure_10, tmp2Result.handlePasskeyUpsellShow);
      return tmp2Result;
    }
  }
  const arg1 = PasskeyUpsellManager;
  callback2(PasskeyUpsellManager, arg0);
  let obj = {
    key: "handlePasskeyUpsellShow",
    value() {
      if (closure_13) {
        if (PasskeyUpsellManager(closure_2[9]).hasWebAuthn) {
          if (closure_8.getLoginStatus() === constants.NONE) {
            if (closure_8.attemptedPasswordLogin()) {
              if (!obj.UNSAFE_isDismissibleContentDismissed(PasskeyUpsellManager(closure_2[11]).DismissibleContent.PASSWORDLESS_UPSELL)) {
                if (!closure_10.hasFetchedCredentials()) {
                  if (!obj2.isModalOpen()) {
                    const currentUser = currentUser.getCurrentUser();
                    if (tmp13) {
                      if (closure_10.hasFetchedCredentials()) {
                        callback(closure_2[14]).openPasskeyUpsell();
                        const obj4 = callback(closure_2[14]);
                      } else if (!closure_12) {
                        closure_12 = true;
                        const webAuthnCredentials = PasskeyUpsellManager(closure_2[13]).fetchWebAuthnCredentials();
                        const obj3 = PasskeyUpsellManager(closure_2[13]);
                      }
                    }
                    const tmp13 = undefined !== currentUser && currentUser.verified;
                  }
                  const obj2 = PasskeyUpsellManager(closure_2[12]);
                }
              }
              const obj = PasskeyUpsellManager(closure_2[10]);
            }
          }
        }
      }
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "handleLoginSuccess",
    value() {
      let closure_13 = true;
    }
  };
  items[1] = obj;
  obj = {
    key: "handleLogout",
    value() {
      let closure_12 = false;
      let closure_13 = false;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "markDismissed",
    value(dismissAction) {
      let obj = PasskeyUpsellManager(closure_2[10]);
      obj = { dismissAction, forceTrack: true };
      return obj.UNSAFE_markDismissibleContentAsDismissed(PasskeyUpsellManager(closure_2[11]).DismissibleContent.PASSWORDLESS_UPSELL, obj);
    }
  };
  return callback(PasskeyUpsellManager, items);
}(importDefault(dependencyMap[15]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/webauthn/native/PasskeyUpsellManager.tsx");

export default tmp2;
