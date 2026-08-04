// Module ID: 8354
// Function ID: 8355
// Name: dispatcher
// Dependencies: [709, 2]

// Module 8354 (dispatcher)
const result = require("set").fileFinishedImporting("actions/native/PhoneVerificationActionCreators.tsx");

export default {
  openCountrySelector() {
    importDefault(709).dispatch({ type: "VERIFICATION_OPEN_COUNTRY_SELECTOR" });
  },
  setCountrySelectorClosed() {
    importDefault(709).dispatch({ type: "VERIFICATION_CLOSE_COUNTRY_SELECTOR" });
  }
};
