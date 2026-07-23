// Module ID: 12615
// Function ID: 97966
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 4044, 1188, 12616, 12617, 686, 566, 2]

// Module 12615 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "apexExperiment";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import apexExperiment from "apexExperiment";

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
  const ConnectionOpenTriggerPoint = require(12617) /* commonTriggerPointConfiguration */.ConnectionOpenTriggerPoint;
  ConnectionOpenTriggerPoint.trigger();
}
let tmp3 = ((Store) => {
  class ExperimentTriggerPointStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, ExperimentTriggerPointStore);
      items = [, , ];
      items[0] = outer1_1(outer1_2[9]);
      obj = { CONNECTION_OPEN: outer1_11 };
      items[1] = obj;
      items[2] = ExperimentTriggerPointStore(outer1_2[9]).DispatchBand.Early;
      obj2 = outer1_6(ExperimentTriggerPointStore);
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
  callback2(ExperimentTriggerPointStore, Store);
  let items = [
    {
      key: "initialize",
      value() {
        this.waitFor(outer1_8, outer1_9);
      }
    }
  ];
  return callback(ExperimentTriggerPointStore, items);
})(require("initialize").Store);
tmp3.displayName = "ExperimentTriggerPointStore";
tmp3 = new tmp3();
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/experiments/ExperimentTriggerPointStore.tsx");

export default tmp3;
