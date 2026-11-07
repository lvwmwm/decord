// Module ID: 17848
// Function ID: 17849
// Name: LabFeatureActions
// Dependencies: [8633, 572, 2]
// Exports: toggleLabFeature

// Module 17848 (LabFeatureActions)
import DispatcherDefault from "Dispatcher" /* 572 */;
import LabFeatureStore from "LabFeatureStore" /* 8633 */;
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
