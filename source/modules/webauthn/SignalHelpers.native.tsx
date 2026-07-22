// Module ID: 5592
// Function ID: 47524
// Name: SignalHelpers
// Dependencies: []

// Module 5592 (SignalHelpers)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const NativeModules = arg1(dependencyMap[3]).NativeModules;
let importDefaultResult = importDefault(dependencyMap[4]);
importDefaultResult = new importDefaultResult("SignalHelpers.native");
const tmp4 = () => {
  class SignalHelpers {
    constructor() {
      tmp = SignalHelpers(this, SignalHelpers);
      return;
    }
  }
  let closure_3 = SignalHelpers;
  let obj = { key: "signalAllAcceptedCredentials" };
  const callback = callback(async (arg0, arg1) => {
    if (undefined !== closure_5.DCDSecurityKeyManager.signalAllAcceptedCredentials) {
      let obj = callback(closure_1[5]);
      const result = obj.encodeUserIdForWebAuthn(arg1);
      const mapped = arg0.map((cred_id) => cred_id.cred_id);
      const found = mapped.filter((arg0) => arg0);
      obj = { rpId: closure_7, encodedId: result, allAcceptedCredentialIds: found, credentials: arg0 };
      closure_6.info("signalAllAcceptedCredentials", obj);
      const DCDSecurityKeyManager = closure_5.DCDSecurityKeyManager;
      const result1 = DCDSecurityKeyManager.signalAllAcceptedCredentials(closure_7, result, found);
      yield result1.catch(closure_6.warn);
    }
  });
  obj.value = function signalAllAcceptedCredentials(closure_7, id, found) {
    return callback3(...arguments);
  };
  const items = [obj, , ];
  obj = { key: "signalCurrentUserDetails" };
  let closure_1 = callback(async (arg0) => {
    if (undefined !== closure_5.DCDSecurityKeyManager.signalCurrentUserDetails) {
      const result = callback(closure_1[5]).encodeUserIdForWebAuthn(arg0.id);
      let username = arg0.email;
      if (null == username) {
        username = arg0.global_name;
      }
      if (null == username) {
        username = arg0.username;
      }
      const username2 = arg0.username;
      const obj = { rpId: closure_7, encodedId: result, name: username, displayName: username2 };
      closure_6.info("signalCurrentUserDetails", obj);
      const DCDSecurityKeyManager = closure_5.DCDSecurityKeyManager;
      const result1 = DCDSecurityKeyManager.signalCurrentUserDetails(closure_7, result, username, username2);
      yield result1.catch(closure_6.warn);
      const obj2 = callback(closure_1[5]);
    }
  });
  obj.value = function signalCurrentUserDetails(closure_7, result, username, username2) {
    return callback2(...arguments);
  };
  items[1] = obj;
  obj = { key: "signalUnknownCredential" };
  let closure_0 = callback(async (arg0) => {
    if (undefined !== closure_5.DCDSecurityKeyManager.signalUnknownCredential) {
      if ("string" === typeof arg0) {
        const _JSON = JSON;
        let cred_id = JSON.parse(arg0).id;
      } else {
        cred_id = arg0.cred_id;
      }
      const obj = { rpId: closure_7, credentialId: cred_id };
      closure_6.info("signalUnknownCredential", obj);
      const DCDSecurityKeyManager = closure_5.DCDSecurityKeyManager;
      const result = DCDSecurityKeyManager.signalUnknownCredential(closure_7, cred_id);
      yield result.catch(closure_6.warn);
    }
  });
  obj.value = function signalUnknownCredential(closure_7, cred_id) {
    return callback(...arguments);
  };
  items[2] = obj;
  return callback2(SignalHelpers, null, items);
}();
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/webauthn/SignalHelpers.native.tsx");

export default tmp4;
