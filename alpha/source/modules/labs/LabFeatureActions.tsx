// Module ID: 16483
// Function ID: 16484
// Name: LabFeatureActions
// Dependencies: [8692, 584, 2]
// Exports: toggleLabFeature

// Module 16483 (LabFeatureActions)
import DispatcherDefault from "Dispatcher" /* 584 */;
import LabFeatureStore from "LabFeatureStore" /* 8692 */;
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
