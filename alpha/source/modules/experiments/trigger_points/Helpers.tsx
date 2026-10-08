// Module ID: 10150
// Function ID: 10151
// Name: Helpers
// Dependencies: [1258, 4977, 2]

// Module 10150 (Helpers)
import ExperimentConstants from "ExperimentConstants" /* 4977 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1258 */;
import size from "module_2" /* 2 */;

const CommonTriggerPoints = ExperimentConstants.CommonTriggerPoints;
let result = size.fileFinishedImporting("modules/experiments/trigger_points/Helpers.tsx");
class CommonTriggerPointConfiguration {
  constructor(items, COLLECTIBLES_SHOP_OPEN, params) {
    const obj = Object.create(new.target.prototype);
    obj.experiments = items;
    obj.triggerPoint = COLLECTIBLES_SHOP_OPEN;
    obj.params = params;
    return obj;
  }
  registeredExperimentIds() {
    const experiments = this.experiments;
    return experiments.map((definition) => definition.definition.id);
  }
  trigger() {
    let experiments;
    let triggerPoint;
    let obj = arg0;
    if (arg0 === undefined) {
      obj = {};
    }
    const result = ApexExperimentStore.trackCommonTriggerPointExposures(this.params.location);
    ({ triggerPoint, experiments } = this);
    const obj2 = {};
    const merged = Object.assign(this.params);
    const merged1 = Object.assign(obj);
    const item = experiments.forEach((trackExposure) => {
      trackExposure.trackExposure(obj2);
    });
  }
  getExperiments() {
    return this.experiments;
  }
}
const prototype = CommonTriggerPointConfiguration.prototype;

export { CommonTriggerPointConfiguration };
