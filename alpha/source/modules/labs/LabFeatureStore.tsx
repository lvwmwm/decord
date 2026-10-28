// Module ID: 8498
// Function ID: 8499
// Name: LabFeatureStore
// Dependencies: [504, 8499, 584, 2]

// Module 8498 (LabFeatureStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import LabFeatures from "LabFeatures" /* 8499 */;
import size from "module_2" /* 2 */;

const LabFeaturesDefault = LabFeatures;

const _false = {};
const DeviceSettingsStore = get_initializedDefault.DeviceSettingsStore;
class LabFeatureStore extends DeviceSettingsStore {
  getUserAgnosticState() {
    return { toggleStates };
  }
  initialize(toggleStates) {
    for (const key10008 in LabFeaturesDefault) {
      let labFeatureDefaultValue;
      let tmp5 = closure_3;
      if (toggleStates != null) {
        toggleStates = toggleStates.toggleStates;
        if (toggleStates != null) {
          labFeatureDefaultValue = toggleStates[key10008];
        }
      }
      if (labFeatureDefaultValue == null) {
        let obj = LabFeatures;
        labFeatureDefaultValue = obj.getLabFeatureDefaultValue(key10008);
      }
      tmp5[key10008] = labFeatureDefaultValue;
      continue;
    }
  }
  get(key10008) {
    let labFeatureDefaultValue = toggleStates[key10008];
    if (labFeatureDefaultValue == null) {
      const obj = LabFeatures;
      labFeatureDefaultValue = obj.getLabFeatureDefaultValue(key10008);
    }
    return labFeatureDefaultValue;
  }
  set(arg0, arg1) {
    toggleStates[arg0] = arg1;
    return arg1;
  }
}
const prototype = LabFeatureStore.prototype;
LabFeatureStore.displayName = "LabFeatureStore";
LabFeatureStore.persistKey = "LabFeatureStore";
let obj = {
  LAB_FEATURE_TOGGLE: function handleLabFeatureToggleSet(labFeature) {
    toggleStates[labFeature.labFeature] = labFeature.enabled;
  }
};
const labFeatureStore = new LabFeatureStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/labs/LabFeatureStore.tsx");

export default labFeatureStore;
