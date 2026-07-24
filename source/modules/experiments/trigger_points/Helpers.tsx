// Module ID: 7158
// Function ID: 57786
// Name: CommonTriggerPointConfiguration
// Dependencies: [6, 7, 1188, 4045, 2]

// Module 7158 (CommonTriggerPointConfiguration)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { CommonTriggerPoints } from "ExperimentBuckets";

const tmp2 = (() => {
  class CommonTriggerPointConfiguration {
    constructor(arg0, arg1, arg2) {
      tmp = CommonTriggerPointConfiguration(this, CommonTriggerPointConfiguration);
      this.experiments = arg0;
      this.triggerPoint = arg1;
      this.params = arg2;
      return;
    }
  }
  let obj = {
    key: "registeredExperimentIds",
    value() {
      const experiments = this.experiments;
      return experiments.map((definition) => definition.definition.id);
    }
  };
  const items = [obj, , ];
  obj = {
    key: "trigger",
    value() {
      let obj = arg0;
      const self = this;
      if (arg0 === undefined) {
        obj = {};
      }
      const result = outer1_2.trackCommonTriggerPointExposures(self.params.location);
      obj = {};
      const merged = Object.assign(self.params);
      const merged1 = Object.assign(obj);
      (function triggerCommonExperiments(arg0, experiments, arg2) {
        let _classCallCheck = arg2;
        const item = experiments.forEach((trackExposure) => {
          trackExposure.trackExposure(_classCallCheck);
        });
      })(undefined, self.experiments, obj);
    }
  };
  items[1] = obj;
  obj = {
    key: "getExperiments",
    value() {
      return this.experiments;
    }
  };
  items[2] = obj;
  return callback(CommonTriggerPointConfiguration, items);
})();
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/experiments/trigger_points/Helpers.tsx");

export const CommonTriggerPointConfiguration = tmp2;
