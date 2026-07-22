// Module ID: 9253
// Function ID: 72314
// Dependencies: []

// Module 9253
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("actions/native/PhoneVerificationActionCreators.tsx");

export default {
  openCountrySelector() {
    importDefault(dependencyMap[0]).dispatch({ type: "VERIFICATION_OPEN_COUNTRY_SELECTOR" });
  },
  setCountrySelectorClosed() {
    importDefault(dependencyMap[0]).dispatch({ type: "VERIFICATION_CLOSE_COUNTRY_SELECTOR" });
  }
};
