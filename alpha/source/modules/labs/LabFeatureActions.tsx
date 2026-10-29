// Module ID: 17404
// Function ID: 17405
// Name: LabFeatureActions
// Dependencies: [8520, 584, 2]
// Exports: toggleLabFeature

// Module 17404 (LabFeatureActions)
import DispatcherDefault from "Dispatcher" /* 584 */;
import LabFeatureStore from "LabFeatureStore" /* 8520 */;
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
