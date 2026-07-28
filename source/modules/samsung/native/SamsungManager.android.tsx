// Module ID: 8927
// Function ID: 70444
// Name: get ActivityIndicator
// Dependencies: [27, 2]

// Module 8927 (get ActivityIndicator)
import { NativeModules } from "get ActivityIndicator";

const result = require("set").fileFinishedImporting("modules/samsung/native/SamsungManager.android.tsx");

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
  finishSamsungAuthorization(arg0, arg1, outer1_5) {
    const Samsung = NativeModules.Samsung;
    return Samsung.finishSamsungAuthorization(arg0, arg1, outer1_5);
  }
};
