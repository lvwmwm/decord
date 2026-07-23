// Module ID: 6961
// Function ID: 55629
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1838, 1849, 4045, 1856, 1855, 566, 686, 2]

// Module 6961 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ExperimentBuckets from "ExperimentBuckets";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_8 from "_isNativeReflectConstruct";
import { ExperimentBuckets } from "ExperimentBuckets";
import { Environments } from "Environments";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function init() {
  let closure_10 = require(1855) /* getEnv */.isStaffEnv(currentUser.getCurrentUser());
}
let tmp2 = "production" === Environments.DEVELOPMENT;
if (!tmp2) {
  const _window = window;
  tmp2 = window.GLOBAL_ENV.RELEASE_CHANNEL === Environments.STAGING;
}
let closure_10 = tmp2;
let tmp3 = ((Store) => {
  class DeveloperExperimentStore {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = outer1_2(this, DeveloperExperimentStore);
      items1 = [...items];
      obj = outer1_5(DeveloperExperimentStore);
      tmp2 = outer1_4;
      if (outer1_11()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_5;
        constructResult = Reflect.construct(obj, items1, outer1_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.isDeveloper = false;
      return tmp2Result;
    }
  }
  callback2(DeveloperExperimentStore, Store);
  let obj = {
    key: "initialize",
    value() {
      const self = this;
      this.waitFor(outer1_8, outer1_7);
      Object.defineProperties(this, {
        isDeveloper: {
          configurable: false,
          get() {
            return outer2_10;
          },
          set() {

          }
        }
      });
      outer1_12();
      const timerId = setTimeout(() => Object.freeze(self));
    }
  };
  let items = [obj, ];
  obj = {
    key: "getExperimentDescriptor",
    value() {
      let tmp = null;
      if (outer1_10) {
        const obj = { type: "developer", name: "discord_dev_testing", revision: 1, override: true, bucket: outer1_9.TREATMENT_1 };
        tmp = obj;
      }
      return tmp;
    }
  };
  items[1] = obj;
  return callback(DeveloperExperimentStore, items);
})(require("initialize").Store);
tmp3.displayName = "DeveloperExperimentStore";
tmp3 = new tmp3(require("dispatcher"), { CONNECTION_OPEN: init, OVERLAY_INITIALIZE: init, CURRENT_USER_UPDATE: init });
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/DeveloperExperimentStore.tsx");

export default tmp3;
