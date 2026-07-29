// Module ID: 8951
// Function ID: 8952
// Name: get ActivityIndicator
// Dependencies: [17, 2]

// Module 8951 (get ActivityIndicator)
import { NativeModules } from "get ActivityIndicator";

const result = require("set").fileFinishedImporting("modules/samsung/native/SamsungManager.android.tsx");

export default {
  checkIfOAuthRequest(closure_0) {
    const Samsung = NativeModules.Samsung;
    return Samsung.checkIfOAuthRequest(closure_0);
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
