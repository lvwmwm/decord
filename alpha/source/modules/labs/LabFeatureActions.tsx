// Module ID: 17458
// Function ID: 17459
// Name: LabFeatureActions
// Dependencies: [8554, 572, 2]
// Exports: toggleLabFeature

// Module 17458 (LabFeatureActions)
import DispatcherDefault from "Dispatcher" /* 572 */;
import LabFeatureStore from "LabFeatureStore" /* 8554 */;
import size from "module_2" /* 2 */;

let closure_3 = {};
const result = size.fileFinishedImporting("modules/labs/LabFeatureActions.tsx");

export function toggleLabFeature(ICYMI_LAB_FEATURE, arg1) {
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
}
