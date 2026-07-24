// Module ID: 8995
// Function ID: 70813
// Name: get ActivityIndicator
// Dependencies: [27, 2]

// Module 8995 (get ActivityIndicator)
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
