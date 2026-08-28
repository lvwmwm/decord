// Module ID: 7746
// Function ID: 7747
// Name: dispatcher
// Dependencies: [709, 2]

// Module 7746 (dispatcher)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const result = set.fileFinishedImporting("actions/native/PhoneVerificationActionCreators.tsx");

export default {
  openCountrySelector() {
    dispatcherDefault.dispatch({ type: "VERIFICATION_OPEN_COUNTRY_SELECTOR" });
  },
  setCountrySelectorClosed() {
    dispatcherDefault.dispatch({ type: "VERIFICATION_CLOSE_COUNTRY_SELECTOR" });
  }
};
