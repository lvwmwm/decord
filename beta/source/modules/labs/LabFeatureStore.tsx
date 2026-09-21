// Module ID: 8629
// Function ID: 8630
// Name: LabFeatureStore
// Dependencies: [504, 8630, 577, 2]

// Module 8629 (LabFeatureStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 577 */;
import LabFeaturesDefault from "LabFeatures" /* 8630 */;

let toggleStates = {};
const DeviceSettingsStore = initializeDefault.DeviceSettingsStore;
class LabFeatureStore extends DeviceSettingsStore {
}
const prototype = LabFeatureStore.prototype;
prototype["getUserAgnosticState"] = function getUserAgnosticState() {
  return { toggleStates };
};
prototype["initialize"] = function initialize(toggleStates) {
  for (const key10008 in LabFeaturesDefault) {
    let flag;
    let tmp2 = closure_2;
    if (arg0 != null) {
      toggleStates = arg0.toggleStates;
      if (toggleStates != null) {
        flag = toggleStates[key10008];
      }
    }
    if (flag == null) {
      flag = false;
    }
    tmp2[key10008] = flag;
    continue;
  }
};
prototype["get"] = function get(arg0) {
  let flag = toggleStates[arg0];
  if (flag == null) {
    flag = false;
  }
  return flag;
};
prototype["set"] = function set(arg0, arg1) {
  closure_2[arg0] = arg1;
  return arg1;
};
LabFeatureStore.displayName = "LabFeatureStore";
LabFeatureStore.persistKey = "LabFeatureStore";
const labFeatureStore = new LabFeatureStore(DispatcherDefault, {
  LAB_FEATURE_TOGGLE: function handleLabFeatureToggleSet(labFeature) {
    closure_2[labFeature.labFeature] = labFeature.enabled;
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/labs/LabFeatureStore.tsx");

export default labFeatureStore;
