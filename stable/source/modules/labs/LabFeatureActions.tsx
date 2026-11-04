// Module ID: 16928
// Function ID: 16929
// Name: LabFeatureActions
// Dependencies: [8875, 584, 2]
// Exports: toggleLabFeature

// Module 16928 (LabFeatureActions)
import DispatcherDefault from "Dispatcher" /* 584 */;
import LabFeatureStore from "LabFeatureStore" /* 8875 */;
import size from "module_2" /* 2 */;

let closure_3 = {};
const result = size.fileFinishedImporting("modules/labs/LabFeatureActions.tsx");

export const toggleLabFeature = function toggleLabFeature(ICYMI_LAB_FEATURE, arg1) {
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = closure_3;
  }
  let enabled = tmp.enabled;
  if (enabled === undefined) {
    enabled = !LabFeatureStore.get(ICYMI_LAB_FEATURE);
  }
  const obj = DispatcherDefault;
  const obj2 = { type: "LAB_FEATURE_TOGGLE", labFeature: ICYMI_LAB_FEATURE, enabled };
  obj.dispatch(obj2);
};
