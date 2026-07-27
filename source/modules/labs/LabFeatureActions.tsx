// Module ID: 14430
// Function ID: 110301
// Name: toggleLabFeature
// Dependencies: [8125, 686, 2]
// Exports: toggleLabFeature

// Module 14430 (toggleLabFeature)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

let closure_3 = {};
const result = require("set").fileFinishedImporting("modules/labs/LabFeatureActions.tsx");

export const toggleLabFeature = function toggleLabFeature(ICYMI_LAB_FEATURE, arg1) {
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = closure_3;
  }
  let enabled = tmp.enabled;
  if (enabled === undefined) {
    enabled = !_isNativeReflectConstruct.get(ICYMI_LAB_FEATURE);
  }
  let obj = importDefault(686);
  obj = { type: "LAB_FEATURE_TOGGLE", labFeature: ICYMI_LAB_FEATURE, enabled };
  obj.dispatch(obj);
};
