// Module ID: 10538
// Function ID: 82260
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 566, 686, 2]

// Module 10538 (_isNativeReflectConstruct)
import dispatcher from "dispatcher";
import set from "set";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

function _isNativeReflectConstruct() {
  let dispatcher = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return dispatcher;
  }
  const result = _isNativeReflectConstruct();
}
let closure_5 = { usageByApplicationId: {}, shelfOrder: [] };
let tmp2 = ((PersistedStore) => {
  class ActivityShelfStore {
    constructor() {
      self = this;
      tmp = ActivityShelfStore(this, ActivityShelfStore);
      obj = outer1_3(ActivityShelfStore);
      tmp2 = outer1_2;
      if (outer1_6()) {
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
  callback2(ActivityShelfStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      let obj = arg0;
      obj = { usageByApplicationId: {}, shelfOrder: [] };
      if (null == arg0) {
        obj = {};
      }
      const merged = Object.assign(obj);
      const outer1_5 = obj;
    }
  };
  const items = [obj, ];
  obj = {
    key: "getState",
    value() {
      return outer1_5;
    }
  };
  items[1] = obj;
  return callback(ActivityShelfStore, items);
})(require("initialize").PersistedStore);
tmp2.displayName = "ActivityShelfStore";
tmp2.persistKey = "ActivityShelfStore";
tmp2 = new tmp2(require("dispatcher"), {
  LOGOUT: function reset() {
    let closure_5 = { usageByApplicationId: {}, shelfOrder: [] };
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/activities/ActivityShelfStore.tsx");

export default tmp2;
