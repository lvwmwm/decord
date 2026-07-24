// Module ID: 8367
// Function ID: 66185
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 8368, 566, 686, 2]

// Module 8367 (_isNativeReflectConstruct)
import initialize from "initialize";
import dispatcher from "dispatcher";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

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
  class LabFeatureStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, LabFeatureStore);
      obj = outer1_5(LabFeatureStore);
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
  callback2(LabFeatureStore, DeviceSettingsStore);
  let obj = {
    key: "getUserAgnosticState",
    value() {
      return { toggleStates: outer1_7 };
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "initialize",
    value(toggleStates) {
      for (const key10010 in LabFeatureStore(outer1_1[5])) {
        let tmp5 = key10010;
        let tmp2;
        let tmp6 = outer1_7;
        if (null != arg0) {
          toggleStates = arg0.toggleStates;
          let tmp = toggleStates;
          if (null != toggleStates) {
            tmp2 = toggleStates[key10010];
            let tmp3 = toggleStates;
          }
        }
        let tmp4 = null != tmp2;
        if (tmp4) {
          tmp4 = tmp2;
        }
        tmp6[key10010] = tmp4;
        continue;
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "get",
    value(arg0) {
      return null != outer1_7[arg0] && outer1_7[arg0];
    }
  };
  items[2] = obj;
  items[3] = {
    key: "set",
    value(arg0, arg1) {
      outer1_7[arg0] = arg1;
      return arg1;
    }
  };
  return callback(LabFeatureStore, items);
})(require("initialize").DeviceSettingsStore);
tmp2.displayName = "LabFeatureStore";
tmp2.persistKey = "LabFeatureStore";
tmp2 = new tmp2(require("dispatcher"), {
  LAB_FEATURE_TOGGLE: function handleLabFeatureToggleSet(labFeature) {
    closure_7[labFeature.labFeature] = labFeature.enabled;
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/labs/LabFeatureStore.tsx");

export default tmp2;
