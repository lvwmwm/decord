// Module ID: 7150
// Function ID: 7151
// Name: PhoneVerificationActionCreators
// Dependencies: [584, 2]

// Module 7150 (PhoneVerificationActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
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
