// Module ID: 12521
// Function ID: 96062
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 12521 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
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
    let closure_7 = tmp2;
  }
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
({ getDefaultCountryCode: closure_5, getCountryCodeByAlpha2: closure_6 } = arg1(dependencyMap[5]));
let closure_7 = null;
let tmp3 = (Store) => {
  class LocationMetadataStore {
    constructor() {
      self = this;
      tmp = LocationMetadataStore(this, LocationMetadataStore);
      obj = closure_3(LocationMetadataStore);
      tmp2 = closure_2;
      if (closure_8()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  let closure_0 = LocationMetadataStore;
  callback2(LocationMetadataStore, Store);
  const items = [
    {
      key: "getCountryCode",
      value() {
        return closure_7;
      }
    }
  ];
  return callback(LocationMetadataStore, items);
}(importDefault(dependencyMap[6]).Store);
tmp3.displayName = "LocationMetadataStore";
tmp3 = new tmp3(importDefault(dependencyMap[7]), { CONNECTION_OPEN: handleSetLocationMetadata, SET_LOCATION_METADATA: handleSetLocationMetadata });
const obj = { CONNECTION_OPEN: handleSetLocationMetadata, SET_LOCATION_METADATA: handleSetLocationMetadata };
const tmp2 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/location_metadata/stores/LocationMetadataStore.tsx");

export default tmp3;
