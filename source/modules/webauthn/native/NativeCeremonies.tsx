// Module ID: 9237
// Function ID: 72258
// Name: _promptForRegisterCredential
// Dependencies: [5, 27, 3, 5592, 1212, 477, 9238, 9239, 1553, 2]

// Module 9237 (_promptForRegisterCredential)
import set from "set";
import { NativeModules } from "get ActivityIndicator";
import importDefaultResult from "_fetchWebAuthnConditionalChallenge";

const require = arg1;
function _promptForRegisterCredential() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function registerSecurityKey(setError, register) {
  if (register === undefined) {
    register = NativeModules.DCDSecurityKeyManager.register;
  }
  setError = undefined;
  let setRegistering;
  setError = setError.setError;
  setRegistering = setError.setRegistering;
  if (undefined !== setError) {
    setError("");
  }
  setRegistering(true);
  const promise = (function promptForRegisterCredential(register) {
    return outer1_5(...arguments);
  })(register);
  const nextPromise = (function promptForRegisterCredential(register) {
    return outer1_5(...arguments);
  })(register).then(setError.onRegisterSuccess);
  return (function promptForRegisterCredential(register) {
    return outer1_5(...arguments);
  })(register).then(setError.onRegisterSuccess).catch((arg0) => {
    if (undefined === setError) {
      throw arg0;
    } else {
      const intl = setError(setRegistering[4]).intl;
      setError(intl.string(setError(setRegistering[4]).t.xSCvBf));
      throw arg0;
    }
  }).finally(() => setRegistering(false));
}
function mutateAndroidRegisterChallengeForDiscoverable(register) {
  let closure_0 = register;
  return (arg0) => {
    const parsed = JSON.parse(arg0);
    parsed.publicKey.authenticatorSelection.residentKey = "required";
    return callback(JSON.stringify(parsed));
  };
}
function registerAndroidCredentialManagerPasskey(setError) {
  return registerSecurityKey(setError, mutateAndroidRegisterChallengeForDiscoverable(NativeModules.DCDSecurityKeyManager.registerPasskey));
}
importDefaultResult = new importDefaultResult("WebAuthnUtils");
let obj = {};
Object.defineProperty(obj, "hasAndroidPasskeySupport", {
  get: () => {
    let isAndroidResult = require(477) /* set */.isAndroid();
    if (isAndroidResult) {
      const DCDSecurityKeyManager = NativeModules.DCDSecurityKeyManager;
      let registerPasskey;
      if (null != DCDSecurityKeyManager) {
        registerPasskey = DCDSecurityKeyManager.registerPasskey;
      }
      isAndroidResult = null != registerPasskey;
    }
    return isAndroidResult;
  },
  set: undefined
});
Object.defineProperty(obj, "shouldDisplayAndroidFidoSelector", {
  get: () => {
    let isAndroidResult = require(477) /* set */.isAndroid();
    if (isAndroidResult) {
      isAndroidResult = !require(1553) /* isMetaQuest */.isMetaQuest();
      const obj2 = require(1553) /* isMetaQuest */;
    }
    return isAndroidResult;
  },
  set: undefined
});
obj.getPasskeyAuthenticator = function getPasskeyAuthenticator() {
  let authenticatePasskey = NativeModules.DCDSecurityKeyManager.authenticate;
  let isAndroidResult = authenticatePasskey(477).isAndroid();
  if (isAndroidResult) {
    const DCDSecurityKeyManager = NativeModules.DCDSecurityKeyManager;
    authenticatePasskey = undefined;
    if (null != DCDSecurityKeyManager) {
      authenticatePasskey = DCDSecurityKeyManager.authenticatePasskey;
    }
    isAndroidResult = null != authenticatePasskey;
  }
  if (isAndroidResult) {
    authenticatePasskey = NativeModules.DCDSecurityKeyManager.authenticatePasskey;
  }
  // CreateGeneratorClosureLongIndex (0x67)
  return callback(tmp);
};
obj.registerAndroidCredentialManagerPasskey = registerAndroidCredentialManagerPasskey;
obj.registerAndroidDevicePasskey = function registerAndroidDevicePasskey(setError) {
  return registerSecurityKey(setError, mutateAndroidRegisterChallengeForDiscoverable(NativeModules.DCDSecurityKeyManager.register));
};
obj.registerPasskey = function registerPasskey(setError) {
  if (obj.isAndroid()) {
    let tmp2 = registerAndroidCredentialManagerPasskey(setError);
  } else {
    tmp2 = registerSecurityKey(setError);
  }
  return tmp2;
};
obj.registerSecurityKey = registerSecurityKey;
const result = require("timestamp").fileFinishedImporting("modules/webauthn/native/NativeCeremonies.tsx");

export default obj;
