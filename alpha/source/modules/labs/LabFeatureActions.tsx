// Module ID: 18047
// Function ID: 18048
// Name: LabFeatureActions
// Dependencies: [9279, 572, 2]
// Exports: toggleLabFeature

// Module 18047 (LabFeatureActions)
import DispatcherDefault from "Dispatcher" /* 572 */;
import LabFeatureStore from "LabFeatureStore" /* 9279 */;
import size from "module_2" /* 2 */;

let closure_3 = {};
const result = size.fileFinishedImporting("modules/labs/LabFeatureActions.tsx");

export function toggleLabFeature(NATIVE_MARKDOWN_LAB_FEATURE, arg1) {
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = closure_3;
  }
  let enabled = tmp.enabled;
  if (enabled === undefined) {
    enabled = !LabFeatureStore.get(NATIVE_MARKDOWN_LAB_FEATURE);
  }
  const obj = DispatcherDefault;
  const obj2 = { type: "LAB_FEATURE_TOGGLE", labFeature: NATIVE_MARKDOWN_LAB_FEATURE, enabled };
  obj.dispatch(obj2);
}
