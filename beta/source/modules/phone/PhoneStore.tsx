// Module ID: 7216
// Function ID: 7217
// Name: PhoneStore
// Dependencies: [5005, 504, 577, 2]

// Module 7216 (PhoneStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 577 */;
import CountryCodeUtils from "CountryCodeUtils" /* 5005 */;
import size from "module_2" /* 2 */;

function handleSetLocationMetadata(countryCode) {
  countryCode = countryCode.countryCode;
  if (null != countryCode) {
    let tmp2 = getCountryCodeByAlpha2(countryCode);
    if (tmp2 == null) {
      tmp2 = getDefaultCountryCode();
    }
    closure_3 = tmp2;
  }
}
const getDefaultCountryCode = CountryCodeUtils.getDefaultCountryCode;
const getCountryCodeByAlpha2 = CountryCodeUtils.getCountryCodeByAlpha2;
let closure_3 = getDefaultCountryCode();
const DeviceSettingsStore = initializeDefault.DeviceSettingsStore;
class PhoneStore extends DeviceSettingsStore {
}
const prototype = PhoneStore.prototype;
prototype["initialize"] = function initialize(selectedCountryCode) {
  if (null != selectedCountryCode) {
    countryCode = selectedCountryCode.selectedCountryCode;
  }
};
prototype["getUserAgnosticState"] = function getUserAgnosticState() {
  return { selectedCountryCode: countryCode };
};
prototype["getCountryCode"] = function getCountryCode() {
  return null != countryCode ? countryCode : closure_3;
};
PhoneStore.displayName = "PhoneStore";
PhoneStore.persistKey = "PhoneStore";
const phoneStore = new PhoneStore(DispatcherDefault, {
  PHONE_SET_COUNTRY_CODE: function handleSetCountryCode(countryCode) {
    countryCode = countryCode.countryCode;
  },
  CONNECTION_OPEN: handleSetLocationMetadata,
  SET_LOCATION_METADATA: handleSetLocationMetadata
});
const result = size.fileFinishedImporting("modules/phone/PhoneStore.tsx");

export default phoneStore;
