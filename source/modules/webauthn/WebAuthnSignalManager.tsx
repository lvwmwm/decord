// Module ID: 16395
// Function ID: 126661
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 16395 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
let tmp2 = (arg0) => {
  class WebAuthnSignalManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = WebAuthnSignalManager(this, WebAuthnSignalManager);
      items1 = [...items];
      obj = closure_6(WebAuthnSignalManager);
      tmp2 = closure_5;
      if (closure_9()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.actions = { AUTHENTICATOR_DELETE: tmp2Result.handleAuthenticatorDelete, MFA_WEBAUTHN_CREDENTIALS_LOADED: tmp2Result.handleWebAuthnCredentialsLoaded, CURRENT_USER_UPDATE: tmp2Result.handleCurrentUserUpdate };
      return tmp2Result;
    }
  }
  let closure_3 = WebAuthnSignalManager;
  callback3(WebAuthnSignalManager, arg0);
  let obj = { key: "handleAuthenticatorDelete" };
  // CreateGeneratorClosureLongIndex (0x67)
  const callback = callback(tmp);
  obj.value = function handleAuthenticatorDelete() {
    return callback3(...arguments);
  };
  const items = [obj, , ];
  obj = { key: "handleWebAuthnCredentialsLoaded" };
  // CreateGeneratorClosureLongIndex (0x67)
  let closure_1 = callback("handleWebAuthnCredentialsLoaded");
  obj.value = function handleWebAuthnCredentialsLoaded() {
    return callback2(...arguments);
  };
  items[1] = obj;
  obj = { key: "handleCurrentUserUpdate" };
  // CreateGeneratorClosureLongIndex (0x67)
  let closure_0 = callback("handleCurrentUserUpdate");
  obj.value = function handleCurrentUserUpdate() {
    return callback(...arguments);
  };
  items[2] = obj;
  return callback2(WebAuthnSignalManager, items);
}(importDefault(dependencyMap[8]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/webauthn/WebAuthnSignalManager.tsx");

export default tmp2;
