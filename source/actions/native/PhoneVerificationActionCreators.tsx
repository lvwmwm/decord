// Module ID: 9296
// Function ID: 72564
// Name: dispatcher
// Dependencies: [686, 2]

// Module 9296 (dispatcher)
const result = require("set").fileFinishedImporting("actions/native/PhoneVerificationActionCreators.tsx");

export default {
  openCountrySelector() {
    importDefault(686).dispatch({ type: "VERIFICATION_OPEN_COUNTRY_SELECTOR" });
  },
  setCountrySelectorClosed() {
    importDefault(686).dispatch({ type: "VERIFICATION_CLOSE_COUNTRY_SELECTOR" });
  }
};
