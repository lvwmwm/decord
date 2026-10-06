// Module ID: 6359
// Function ID: 6360
// Name: PhoneStore
// Dependencies: [5052, 504, 585, 2]

// Module 6359 (PhoneStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 585 */;
import CountryCodeUtils from "CountryCodeUtils" /* 5052 */;
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
const DeviceSettingsStore = get_initializedDefault.DeviceSettingsStore;
class PhoneStore extends DeviceSettingsStore {
  initialize(selectedCountryCode) {
    if (null != selectedCountryCode) {
      countryCode = selectedCountryCode.selectedCountryCode;
    }
  }
  getUserAgnosticState() {
    return { selectedCountryCode: countryCode };
  }
  getCountryCode() {
    return null != countryCode ? countryCode : closure_3;
  }
}
const prototype = PhoneStore.prototype;
PhoneStore.displayName = "PhoneStore";
PhoneStore.persistKey = "PhoneStore";
const obj = {
  PHONE_SET_COUNTRY_CODE: function handleSetCountryCode(countryCode) {
    countryCode = countryCode.countryCode;
  },
  CONNECTION_OPEN: handleSetLocationMetadata,
  SET_LOCATION_METADATA: handleSetLocationMetadata
};
const phoneStore = new PhoneStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/phone/PhoneStore.tsx");

export default phoneStore;
