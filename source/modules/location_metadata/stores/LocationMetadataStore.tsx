// Module ID: 12640
// Function ID: 98246
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 3811, 566, 686, 2]

// Module 12640 (_isNativeReflectConstruct)
import initialize from "initialize";
import dispatcher from "dispatcher";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import getCountryCodeByCountryName from "getCountryCodeByCountryName";

let closure_5;
let closure_6;
function _isNativeReflectConstruct() {
  let initialize = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return initialize;
  }
  const result = _isNativeReflectConstruct();
}
function handleSetLocationMetadata(countryCode) {
  countryCode = countryCode.countryCode;
  if (null != countryCode) {
    let tmp2 = callback4(countryCode);
    if (null == tmp2) {
      tmp2 = callback3();
    }
    let c7 = tmp2;
  }
}
({ getDefaultCountryCode: closure_5, getCountryCodeByAlpha2: closure_6 } = getCountryCodeByCountryName);
let c7 = null;
let tmp3 = ((Store) => {
  class LocationMetadataStore {
    constructor() {
      self = this;
      tmp = LocationMetadataStore(this, LocationMetadataStore);
      obj = outer1_3(LocationMetadataStore);
      tmp2 = outer1_2;
      if (outer1_8()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(LocationMetadataStore, Store);
  const items = [
    {
      key: "getCountryCode",
      value() {
        return outer1_7;
      }
    }
  ];
  return callback(LocationMetadataStore, items);
})(require("initialize").Store);
tmp3.displayName = "LocationMetadataStore";
tmp3 = new tmp3(require("dispatcher"), { CONNECTION_OPEN: handleSetLocationMetadata, SET_LOCATION_METADATA: handleSetLocationMetadata });
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/location_metadata/stores/LocationMetadataStore.tsx");

export default tmp3;
