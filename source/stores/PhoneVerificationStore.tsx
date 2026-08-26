// Module ID: 16940
// Function ID: 16941
// Name: getCountrySelectorOpened
// Dependencies: [589, 709, 2]

// Module 16940 (getCountrySelectorOpened)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;

let c0 = false;
const Store = initializeDefault.Store;
class PhoneVerificationStore extends Store {
}
PhoneVerificationStore.prototype["getCountrySelectorOpened"] = function getCountrySelectorOpened() {
  return c0;
};
PhoneVerificationStore.displayName = "PhoneVerificationStore";
const phoneVerificationStore = new PhoneVerificationStore(dispatcherDefault, {
  VERIFICATION_OPEN_COUNTRY_SELECTOR: function handleOpenCountry() {
    c0 = true;
  },
  VERIFICATION_CLOSE_COUNTRY_SELECTOR: function handleCloseCountrySelector() {
    c0 = false;
  }
});
const result = require("set").fileFinishedImporting("stores/PhoneVerificationStore.tsx");

export default phoneVerificationStore;
