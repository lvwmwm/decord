// Module ID: 7238
// Function ID: 7239
// Name: PhoneVerificationActionCreators
// Dependencies: [572, 2]

// Module 7238 (PhoneVerificationActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

let obj = {
  openCountrySelector() {
    const obj = DispatcherDefault;
    obj.dispatch({ type: "VERIFICATION_OPEN_COUNTRY_SELECTOR" });
  },
  setCountrySelectorClosed() {
    const obj = DispatcherDefault;
    obj.dispatch({ type: "VERIFICATION_CLOSE_COUNTRY_SELECTOR" });
  }
};
const result = size.fileFinishedImporting("actions/native/PhoneVerificationActionCreators.tsx");

export default obj;
