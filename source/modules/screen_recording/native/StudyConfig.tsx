// Module ID: 14720
// Function ID: 112239
// Name: SURVEY_CONFIGS
// Dependencies: [2]
// Exports: getAvailableSurveys, getSurveyConfig, getSurveyConfigSafe

// Module 14720 (SURVEY_CONFIGS)
const obj = {};
const result = require("set").fileFinishedImporting("modules/screen_recording/native/StudyConfig.tsx");

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
