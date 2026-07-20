// Module ID: 14587
// Function ID: 109978
// Name: SURVEY_CONFIGS
// Dependencies: []
// Exports: getAvailableSurveys, getSurveyConfig, getSurveyConfigSafe

// Module 14587 (SURVEY_CONFIGS)
const obj = {};
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/screen_recording/native/StudyConfig.tsx");

export const SURVEY_CONFIGS = obj;
export const getSurveyConfig = function getSurveyConfig(currentSurveyId) {
  let tmp2 = null;
  if (null != obj[currentSurveyId]) {
    tmp2 = tmp;
  }
  return tmp2;
};
export const getSurveyConfigSafe = function getSurveyConfigSafe(arg0) {
  let tmp = null;
  if (null != arg0) {
    tmp = null;
    if ("" !== arg0) {
      let tmp4 = null;
      if (null != obj[arg0]) {
        tmp4 = tmp3;
      }
      tmp = tmp4;
    }
  }
  return tmp;
};
export const getAvailableSurveys = function getAvailableSurveys() {
  const values = Object.values(obj);
  return values.filter((predicate) => predicate.predicate());
};
