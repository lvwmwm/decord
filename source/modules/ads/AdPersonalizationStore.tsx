// Module ID: 12496
// Function ID: 95746
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 12496 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function reset() {
  let closure_5 = false;
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let closure_5 = false;
let tmp2 = (Store) => {
  class AdPersonalizationStore {
    constructor() {
      self = this;
      tmp = AdPersonalizationStore(this, AdPersonalizationStore);
      obj = closure_3(AdPersonalizationStore);
      tmp2 = closure_2;
      if (closure_6()) {
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
  let closure_0 = AdPersonalizationStore;
  callback2(AdPersonalizationStore, Store);
  const items = [
    {
      key: "isTogglesDisabled",
      value() {
        return closure_5;
      }
    }
  ];
  return callback(AdPersonalizationStore, items);
}(importDefault(dependencyMap[5]).Store);
tmp2 = new tmp2(importDefault(dependencyMap[6]), {
  AD_PERSONALIZATION_TOGGLES_RESTRICTED: function handleAdPersonalizationTogglesRestricted(disabled) {
    disabled = disabled.disabled;
    let closure_5 = null != disabled && disabled;
  },
  CONNECTION_OPEN: reset,
  LOGOUT: reset
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/ads/AdPersonalizationStore.tsx");

export default tmp2;
