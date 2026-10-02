// Module ID: 6498
// Function ID: 6499
// Name: PhoneVerificationActionCreators
// Dependencies: [585, 2]

// Module 6498 (PhoneVerificationActionCreators)
import DispatcherDefault from "Dispatcher" /* 585 */;
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
