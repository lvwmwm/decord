// Module ID: 9276
// Function ID: 72466
// Name: fetchSurveyDetails
// Dependencies: [57, 5, 9277, 9279, 9280, 9281, 653, 507, 686, 1184, 9282, 2]
// Exports: fetchSurveyDetails, fireSurveyAction, submitSurveyResponse

// Module 9276 (fetchSurveyDetails)
import _slicedToArray from "_slicedToArray";
import closure_4 from "QuestionTypeEnum";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { useQualtricsResponseStore } from "useQualtricsResponseStore";
import closure_7 from "_isNativeReflectConstruct";
import QuestionTypeEnum from "QuestionTypeEnum";
import { Endpoints } from "ME";

let closure_8;
let closure_9;
const require = arg1;
function fetchSurveyDetails() {
  return _fetchSurveyDetails(...arguments);
}
function _fetchSurveyDetails() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function submitSurveyResponse() {
  return _submitSurveyResponse(...arguments);
}
function _submitSurveyResponse() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function fireSurveyAction(BOUNTY_ABANDONED, arg1) {
  return _fireSurveyAction(...arguments);
}
function _fireSurveyAction() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
({ QuestionSelectorEnum: closure_8, QuestionTypeEnum: closure_9 } = QuestionTypeEnum);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/qualtrics/QualtricsActionCreators.tsx");

export default { fetchSurveyDetails, submitSurveyResponse, fireSurveyAction };
export { fetchSurveyDetails };
export { submitSurveyResponse };
export { fireSurveyAction };
