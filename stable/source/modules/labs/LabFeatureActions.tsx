// Module ID: 15813
// Function ID: 15814
// Name: LabFeatureActions
// Dependencies: [8656, 573, 2]
// Exports: toggleLabFeature

// Module 15813 (LabFeatureActions)
import DispatcherDefault from "Dispatcher" /* 573 */;
import LabFeatureStore from "LabFeatureStore" /* 8656 */;

let closure_3 = {};
const size = fn(2);
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
  DispatcherDefault.dispatch({ type: "LAB_FEATURE_TOGGLE", labFeature: ICYMI_LAB_FEATURE, enabled });
};
