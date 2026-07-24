// Module ID: 8362
// Function ID: 66062
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 7086, 566, 686, 2]

// Module 8362 (_isNativeReflectConstruct)
import initialize from "initialize";
import dispatcher from "dispatcher";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_7 = {};
let tmp2 = ((DeviceSettingsStore) => {
  class ICYMIFiltersStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, ICYMIFiltersStore);
      obj = outer1_5(ICYMIFiltersStore);
      tmp2 = outer1_4;
      if (outer1_8()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(ICYMIFiltersStore, DeviceSettingsStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      let obj = arg0;
      if (null == arg0) {
        obj = {};
      }
      const outer1_7 = obj;
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "filterStaffContent",
    value() {
      return true === outer1_7.filterStaffContent;
    }
  };
  items[1] = obj;
  obj = {
    key: "getDoubleTapBehavior",
    value() {
      let DEFAULT = outer1_7.doubleTapBehavior;
      if (null == DEFAULT) {
        DEFAULT = ICYMIFiltersStore(outer1_1[5]).GravityICYMIDoubleTapBehavior.DEFAULT;
      }
      return DEFAULT;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getState",
    value() {
      return outer1_7;
    }
  };
  items[4] = {
    key: "getUserAgnosticState",
    value() {
      return outer1_7;
    }
  };
  return callback(ICYMIFiltersStore, items);
})(require("initialize").DeviceSettingsStore);
tmp2.displayName = "ICYMIFiltersStore";
tmp2.persistKey = "ICYMIFiltersStore";
tmp2 = new tmp2(require("dispatcher"), {
  SET_ICYMI_FILTERS: function handleFilters(filters) {
    filters = filters.filters;
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/icymi/ICYMIFiltersStore.tsx");

export default tmp2;
