// Module ID: 15457
// Function ID: 15458
// Name: toggleLabFeature
// Dependencies: [8283, 706, 2]
// Exports: toggleLabFeature

// Module 15457 (toggleLabFeature)
import dispatcherDefault from "dispatcher" /* 706 */;
import closure_2 from "getUserAgnosticState" /* 8283 */;

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
