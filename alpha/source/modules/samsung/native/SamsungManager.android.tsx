// Module ID: 9133
// Function ID: 9134
// Name: react-native
// Dependencies: [17, 2]

// Module 9133 (react-native)
import react_native from "react-native" /* 17 */;
import size from "module_2" /* 2 */;

const NativeModules = react_native.NativeModules;
const obj = {
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
  finishSamsungAuthorization(arg0, arg1, arg2) {
    const Samsung = NativeModules.Samsung;
    return Samsung.finishSamsungAuthorization(arg0, arg1, arg2);
  }
};
const result = size.fileFinishedImporting("modules/samsung/native/SamsungManager.android.tsx");

export default obj;
