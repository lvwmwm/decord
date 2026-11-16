// Module ID: 7850
// Function ID: 7851
// Name: PhoneVerificationActionCreators
// Dependencies: [572, 2]

// Module 7850 (PhoneVerificationActionCreators)
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
