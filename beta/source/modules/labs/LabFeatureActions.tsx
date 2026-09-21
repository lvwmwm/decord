// Module ID: 15799
// Function ID: 15800
// Name: LabFeatureActions
// Dependencies: [8629, 577, 2]
// Exports: toggleLabFeature

// Module 15799 (LabFeatureActions)
import DispatcherDefault from "Dispatcher" /* 577 */;
import LabFeatureStore from "LabFeatureStore" /* 8629 */;

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
