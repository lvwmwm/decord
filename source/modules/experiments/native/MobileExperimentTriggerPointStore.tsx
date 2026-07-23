// Module ID: 12619
// Function ID: 97981
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 4044, 1188, 12620, 686, 566, 2]

// Module 12619 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import commonTriggerPointConfiguration from "commonTriggerPointConfiguration";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleConnectionOpen() {
  const MobileConnectionOpenTriggerPoint = require(12620) /* commonTriggerPointConfiguration */.MobileConnectionOpenTriggerPoint;
  MobileConnectionOpenTriggerPoint.trigger();
}
let tmp2 = ((Store) => {
  class MobileExperimentTriggerPointStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, MobileExperimentTriggerPointStore);
      items = [, , ];
      items[0] = outer1_1(outer1_2[8]);
      obj = { CONNECTION_OPEN: outer1_11 };
      items[1] = obj;
      items[2] = MobileExperimentTriggerPointStore(outer1_2[8]).DispatchBand.Early;
      obj2 = outer1_6(MobileExperimentTriggerPointStore);
      tmp2 = outer1_5;
      if (outer1_10()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_6;
        constructResult = Reflect.construct(obj2, items, outer1_6(self).constructor);
      } else {
        constructResult = obj2.apply(self, items);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(MobileExperimentTriggerPointStore, Store);
  let items = [
    {
      key: "initialize",
      value() {
        this.waitFor(outer1_8, outer1_9);
      }
    }
  ];
  return callback(MobileExperimentTriggerPointStore, items);
})(require("initialize").Store);
tmp2.displayName = "MobileExperimentTriggerPointStore";
tmp2 = new tmp2();
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/experiments/native/MobileExperimentTriggerPointStore.tsx");

export default tmp2;
