// Module ID: 8949
// Function ID: 70557
// Dependencies: []

// Module 8949
const NativeModules = require(dependencyMap[0]).NativeModules;
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/samsung/native/SamsungManager.android.tsx");

export default {
  checkIfOAuthRequest(clientId) {
    const Samsung = NativeModules.Samsung;
    return Samsung.checkIfOAuthRequest(clientId);
  },
  showConnectionDisclaimer() {
    const Samsung = NativeModules.Samsung;
    return Samsung.showConnectionDisclaimer();
  },
  getAccountUrlAndAuthCode() {
    const Samsung = NativeModules.Samsung;
    return Samsung.getAccountUrlAndAuthCode();
  },
  finishSamsungAuthorization(arg0, arg1, closure_5) {
    const Samsung = NativeModules.Samsung;
    return Samsung.finishSamsungAuthorization(arg0, arg1, closure_5);
  }
};
