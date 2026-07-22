// Module ID: 14254
// Function ID: 107693
// Name: toggleLabFeature
// Dependencies: []
// Exports: toggleLabFeature

// Module 14254 (toggleLabFeature)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = {};
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/labs/LabFeatureActions.tsx");

export const toggleLabFeature = function toggleLabFeature(ICYMI_LAB_FEATURE, arg1) {
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = closure_3;
  }
  let enabled = tmp.enabled;
  if (enabled === undefined) {
    enabled = !closure_2.get(ICYMI_LAB_FEATURE);
  }
  let obj = importDefault(dependencyMap[1]);
  obj = { type: "LAB_FEATURE_TOGGLE", labFeature: ICYMI_LAB_FEATURE, enabled };
  obj.dispatch(obj);
};
