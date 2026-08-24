// Module ID: 14907
// Function ID: 14908
// Name: toggleLabFeature
// Dependencies: [9096, 709, 2]
// Exports: toggleLabFeature

// Module 14907 (toggleLabFeature)
import dispatcherDefault from "dispatcher" /* 709 */;
import closure_2 from "getUserAgnosticState" /* 9096 */;

let closure_3 = {};
const result = require("set").fileFinishedImporting("modules/labs/LabFeatureActions.tsx");

export const toggleLabFeature = function toggleLabFeature(ICYMI_LAB_FEATURE, arg1) {
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = closure_3;
  }
  let enabled = tmp.enabled;
  if (enabled === undefined) {
    enabled = !closure_2.get(ICYMI_LAB_FEATURE);
  }
  let obj = dispatcherDefault;
  obj = { type: "LAB_FEATURE_TOGGLE", labFeature: ICYMI_LAB_FEATURE, enabled };
  obj.dispatch(obj);
};
