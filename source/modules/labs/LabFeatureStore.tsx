// Module ID: 8317
// Function ID: 65920
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 8317 (_isNativeReflectConstruct)
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
  class LabFeatureStore {
    constructor() {
      self = this;
      tmp = closure_2(this, LabFeatureStore);
      obj = closure_5(LabFeatureStore);
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
  const importDefault = LabFeatureStore;
  callback2(LabFeatureStore, DeviceSettingsStore);
  let obj = {
    key: "getUserAgnosticState",
    value() {
      return { toggleStates: closure_7 };
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "initialize",
    value(toggleStates) {
      for (const key10010 in closure_0(closure_1[5])) {
        let tmp5 = key10010;
        let tmp2;
        let tmp6 = closure_7;
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
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "get",
    value(arg0) {
      return null != closure_7[arg0] && closure_7[arg0];
    }
  };
  items[2] = obj;
  items[3] = {
    key: "set",
    value(arg0, arg1) {
      closure_7[arg0] = arg1;
      return arg1;
    }
  };
  return callback(LabFeatureStore, items);
}(importDefault(dependencyMap[6]).DeviceSettingsStore);
tmp2.displayName = "LabFeatureStore";
tmp2.persistKey = "LabFeatureStore";
tmp2 = new tmp2(importDefault(dependencyMap[7]), {
  LAB_FEATURE_TOGGLE: function handleLabFeatureToggleSet(labFeature) {
    closure_7[labFeature.labFeature] = labFeature.enabled;
  }
});
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/labs/LabFeatureStore.tsx");

export default tmp2;
