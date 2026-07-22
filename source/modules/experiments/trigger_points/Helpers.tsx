// Module ID: 7153
// Function ID: 57723
// Name: CommonTriggerPointConfiguration
// Dependencies: []

// Module 7153 (CommonTriggerPointConfiguration)
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
const CommonTriggerPoints = arg1(dependencyMap[3]).CommonTriggerPoints;
const tmp2 = () => {
  class CommonTriggerPointConfiguration {
    constructor(arg0, arg1, arg2) {
      tmp = CommonTriggerPointConfiguration(this, CommonTriggerPointConfiguration);
      this.experiments = arg0;
      this.triggerPoint = arg1;
      this.params = arg2;
      return;
    }
  }
  let closure_0 = CommonTriggerPointConfiguration;
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
      const result = closure_2.trackCommonTriggerPointExposures(self.params.location);
      obj = {};
      const merged = Object.assign(self.params);
      const merged1 = Object.assign(obj);
      function triggerCommonExperiments(arg0, experiments, arg2) {
        const item = experiments.forEach((trackExposure) => {
          trackExposure.trackExposure(arg2);
        });
      }(undefined, self.experiments, obj);
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
}();
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/experiments/trigger_points/Helpers.tsx");

export const CommonTriggerPointConfiguration = tmp2;
