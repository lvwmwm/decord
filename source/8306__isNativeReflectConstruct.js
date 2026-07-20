// Module ID: 8306
// Function ID: 65760
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 8306 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = {};
let tmp2 = (DeviceSettingsStore) => {
  class ICYMIFiltersStore {
    constructor() {
      self = this;
      tmp = closure_2(this, ICYMIFiltersStore);
      obj = closure_5(ICYMIFiltersStore);
      tmp2 = closure_4;
      if (closure_8()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = ICYMIFiltersStore;
  callback2(ICYMIFiltersStore, DeviceSettingsStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      let obj = arg0;
      if (null == arg0) {
        obj = {};
      }
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "filterStaffContent",
    value() {
      return true === closure_7.filterStaffContent;
    }
  };
  items[1] = obj;
  obj = {
    key: "getDoubleTapBehavior",
    value() {
      let DEFAULT = closure_7.doubleTapBehavior;
      if (null == DEFAULT) {
        DEFAULT = ICYMIFiltersStore(closure_1[5]).GravityICYMIDoubleTapBehavior.DEFAULT;
      }
      return DEFAULT;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getState",
    value() {
      return closure_7;
    }
  };
  items[4] = {
    key: "getUserAgnosticState",
    value() {
      return closure_7;
    }
  };
  return callback(ICYMIFiltersStore, items);
}(importDefault(dependencyMap[6]).DeviceSettingsStore);
tmp2.displayName = "ICYMIFiltersStore";
tmp2.persistKey = "ICYMIFiltersStore";
tmp2 = new tmp2(importDefault(dependencyMap[7]), {
  SET_ICYMI_FILTERS: function handleFilters(filters) {
    filters = filters.filters;
  }
});
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/icymi/ICYMIFiltersStore.tsx");

export default tmp2;
