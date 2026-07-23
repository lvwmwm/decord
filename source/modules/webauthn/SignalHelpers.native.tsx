// Module ID: 5595
// Function ID: 47547
// Name: SignalHelpers
// Dependencies: [5, 6, 7, 27, 3, 5596, 2]

// Module 5595 (SignalHelpers)
import encodeUserIdForWebAuthn from "encodeUserIdForWebAuthn";
import set from "set";
import _defineProperties from "_defineProperties";
import { NativeModules } from "get ActivityIndicator";
import importDefaultResult from "get ActivityIndicator";

const require = arg1;
importDefaultResult = new importDefaultResult("SignalHelpers.native");
const tmp4 = (() => {
  class SignalHelpers {
    constructor() {
      tmp = SignalHelpers(this, SignalHelpers);
      return;
    }
  }
  let obj = { key: "signalAllAcceptedCredentials" };
  callback = callback(async (arg0, arg1) => {
    if (undefined !== outer2_5.DCDSecurityKeyManager.signalAllAcceptedCredentials) {
      let obj = callback(table[5]);
      const result = obj.encodeUserIdForWebAuthn(arg1);
      const mapped = arg0.map((cred_id) => cred_id.cred_id);
      const found = mapped.filter((arg0) => arg0);
      obj = { rpId: outer2_7, encodedId: result, allAcceptedCredentialIds: found, credentials: arg0 };
      outer2_6.info("signalAllAcceptedCredentials", obj);
      const DCDSecurityKeyManager = outer2_5.DCDSecurityKeyManager;
      const result1 = DCDSecurityKeyManager.signalAllAcceptedCredentials(outer2_7, result, found);
      yield result1.catch(outer2_6.warn);
    }
  });
  obj.value = function signalAllAcceptedCredentials(credentials, id, found) {
    return callback3(...arguments);
  };
  const items = [obj, , ];
  obj = { key: "signalCurrentUserDetails" };
  let closure_1 = callback(async (arg0) => {
    if (undefined !== outer2_5.DCDSecurityKeyManager.signalCurrentUserDetails) {
      const result = callback(table[5]).encodeUserIdForWebAuthn(arg0.id);
      let username = arg0.email;
      if (null == username) {
        username = arg0.global_name;
      }
      if (null == username) {
        username = arg0.username;
      }
      const username2 = arg0.username;
      const obj = { rpId: outer2_7, encodedId: result, name: username, displayName: username2 };
      outer2_6.info("signalCurrentUserDetails", obj);
      const DCDSecurityKeyManager = outer2_5.DCDSecurityKeyManager;
      const result1 = DCDSecurityKeyManager.signalCurrentUserDetails(outer2_7, result, username, username2);
      yield result1.catch(outer2_6.warn);
      const obj2 = callback(table[5]);
    }
  });
  obj.value = function signalCurrentUserDetails(outer2_7, result, username, username2) {
    return callback2(...arguments);
  };
  items[1] = obj;
  obj = { key: "signalUnknownCredential" };
  let closure_0 = callback(async (arg0) => {
    if (undefined !== outer2_5.DCDSecurityKeyManager.signalUnknownCredential) {
      if ("string" === typeof arg0) {
        const _JSON = JSON;
        let cred_id = JSON.parse(arg0).id;
      } else {
        cred_id = arg0.cred_id;
      }
      const obj = { rpId: outer2_7, credentialId: cred_id };
      outer2_6.info("signalUnknownCredential", obj);
      const DCDSecurityKeyManager = outer2_5.DCDSecurityKeyManager;
      const result = DCDSecurityKeyManager.signalUnknownCredential(outer2_7, cred_id);
      yield result.catch(outer2_6.warn);
    }
  });
  obj.value = function signalUnknownCredential(credential, cred_id) {
    return callback(...arguments);
  };
  items[2] = obj;
  return callback2(SignalHelpers, null, items);
})();
let result = require("_defineProperties").fileFinishedImporting("modules/webauthn/SignalHelpers.native.tsx");

export default tmp4;
