// Module ID: 9189
// Function ID: 71972
// Name: _promptForRegisterCredential
// Dependencies: []

// Module 9189 (_promptForRegisterCredential)
function _promptForRegisterCredential() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _promptForRegisterCredential = obj;
  return obj(...arguments);
}
function registerSecurityKey(setError, register) {
  if (register === undefined) {
    register = NativeModules.DCDSecurityKeyManager.register;
  }
  register = undefined;
  let dependencyMap;
  setError = setError.setError;
  register = setError;
  const setRegistering = setError.setRegistering;
  dependencyMap = setRegistering;
  if (undefined !== setError) {
    setError("");
  }
  setRegistering(true);
  const promise = function promptForRegisterCredential(register) {
    return callback(...arguments);
  }(register);
  const nextPromise = function promptForRegisterCredential(register) {
    return callback(...arguments);
  }(register).then(setError.onRegisterSuccess);
  return function promptForRegisterCredential(register) {
    return callback(...arguments);
  }(register).then(setError.onRegisterSuccess).catch((arg0) => {
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
  const arg1 = register;
  return (arg0) => {
    const parsed = JSON.parse(arg0);
    parsed.publicKey.authenticatorSelection.residentKey = "required";
    return arg0(JSON.stringify(parsed));
  };
}
function registerAndroidCredentialManagerPasskey(setError) {
  return registerSecurityKey(setError, mutateAndroidRegisterChallengeForDiscoverable(NativeModules.DCDSecurityKeyManager.registerPasskey));
}
let closure_2 = importDefault(dependencyMap[0]);
const NativeModules = arg1(dependencyMap[1]).NativeModules;
let importDefaultResult = importDefault(dependencyMap[2]);
importDefaultResult = new importDefaultResult("WebAuthnUtils");
const obj = {};
Object.defineProperty(obj, "hasAndroidPasskeySupport", {
  get: () => {
    let isAndroidResult = arg1(dependencyMap[5]).isAndroid();
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
    let isAndroidResult = arg1(dependencyMap[5]).isAndroid();
    if (isAndroidResult) {
      isAndroidResult = !arg1(dependencyMap[8]).isMetaQuest();
      const obj2 = arg1(dependencyMap[8]);
    }
    return isAndroidResult;
  },
  set: undefined
});
obj.getPasskeyAuthenticator = function getPasskeyAuthenticator() {
  let arg1 = NativeModules.DCDSecurityKeyManager.authenticate;
  let isAndroidResult = arg1(dependencyMap[5]).isAndroid();
  if (isAndroidResult) {
    const DCDSecurityKeyManager = NativeModules.DCDSecurityKeyManager;
    let authenticatePasskey;
    if (null != DCDSecurityKeyManager) {
      authenticatePasskey = DCDSecurityKeyManager.authenticatePasskey;
    }
    isAndroidResult = null != authenticatePasskey;
  }
  if (isAndroidResult) {
    arg1 = NativeModules.DCDSecurityKeyManager.authenticatePasskey;
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
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/webauthn/native/NativeCeremonies.tsx");

export default obj;
