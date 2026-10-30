// Module ID: 10915
// Function ID: 10916
// Name: LocationMetadataStore
// Dependencies: [5690, 504, 572, 2]

// Module 10915 (LocationMetadataStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import CountryCodeUtils from "CountryCodeUtils" /* 5690 */;
import size from "module_2" /* 2 */;

let _window;
let map;
({ getDefaultCountryCode: _window, getCountryCodeByAlpha2: map } = CountryCodeUtils);
let closure_2 = null;
let c3 = null;
const Store = get_initializedDefault.Store;
class LocationMetadataStore extends Store {
  getCountryCode() {
    return closure_2;
  }
  getMinimumAge() {
    return c3;
  }
}
const prototype = LocationMetadataStore.prototype;
LocationMetadataStore.displayName = "LocationMetadataStore";
const obj = {
  CONNECTION_OPEN: function handleConnectionOpen(countryCode) {
    countryCode = countryCode.countryCode;
    let flag = null != countryCode;
    if (flag) {
      let tmp2 = map(countryCode);
      if (tmp2 == null) {
        tmp2 = React();
      }
      closure_2 = tmp2;
      flag = true;
    }
    return flag;
  },
  SET_LOCATION_METADATA: function handleSetLocationMetadata(arg0) {
    let countryCode;
    let minimumAge;
    ({ countryCode, minimumAge } = arg0);
    let flag = null != countryCode;
    if (flag) {
      let tmp2 = map(countryCode);
      if (tmp2 == null) {
        tmp2 = React();
      }
      closure_2 = tmp2;
      flag = true;
    }
    if (minimumAge == null) {
      minimumAge = null;
    }
    if (minimumAge !== c3) {
      c3 = minimumAge;
      flag = true;
    }
    return flag;
  },
  LOGOUT: function handleLogout() {
    let flag = null != c3;
    if (flag) {
      c3 = null;
      flag = true;
    }
    return flag;
  }
};
const locationMetadataStore = new LocationMetadataStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/location_metadata/stores/LocationMetadataStore.tsx");

export default locationMetadataStore;
