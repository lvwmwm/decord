// Module ID: 17245
// Function ID: 17246
// Name: PhoneVerificationStore
// Dependencies: [504, 573, 2]

// Module 17245 (PhoneVerificationStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;

let c0 = false;
const Store = initializeDefault.Store;
class PhoneVerificationStore extends Store {
}
PhoneVerificationStore.prototype["getCountrySelectorOpened"] = function getCountrySelectorOpened() {
  return c0;
};
PhoneVerificationStore.displayName = "PhoneVerificationStore";
const phoneVerificationStore = new PhoneVerificationStore(DispatcherDefault, {
  VERIFICATION_OPEN_COUNTRY_SELECTOR: function handleOpenCountry() {
    c0 = true;
  },
  VERIFICATION_CLOSE_COUNTRY_SELECTOR: function handleCloseCountrySelector() {
    c0 = false;
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("stores/PhoneVerificationStore.tsx");

export default phoneVerificationStore;
