// Module ID: 11022
// Function ID: 85803
// Name: _getSafetyHubData
// Dependencies: []
// Exports: getSafetyHubData, getSafetyHubDataForClassification, requestReview, requestSuspendedUserAgeVerification

// Module 11022 (_getSafetyHubData)
function _getSafetyHubData() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _getSafetyHubData = obj;
  return obj(...arguments);
}
function _getSafetyHubDataForClassification() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _getSafetyHubDataForClassification = obj;
  return obj(...arguments);
}
function _setClassificationFlaggedContent(flagged_content) {
  if (null != flagged_content.flagged_content) {
    if (flagged_content.flagged_content.length > 0) {
      const first = flagged_content.flagged_content[0];
      const attachments = first.attachments;
      first.attachments = attachments.filter((filename) => {
        filename = filename.filename;
        let isImageFileResult = callback(closure_2[7]).isImageFile(filename);
        if (!isImageFileResult) {
          isImageFileResult = callback(closure_2[7]).isVideoFile(filename);
          const obj2 = callback(closure_2[7]);
        }
        return isImageFileResult;
      });
      if (obj.isFlaggedContentEmpty(first)) {
        let items = [];
      } else {
        items = [first];
      }
      flagged_content.flagged_content = items;
      const obj = arg1(dependencyMap[8]);
    }
  }
}
function _requestReview() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _requestReview = obj;
  return obj(...arguments);
}
function _requestSuspendedUserAgeVerification() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _requestSuspendedUserAgeVerification = obj;
  return obj(...arguments);
}
function checkSuspendedUserAgeVerification() {
  return _checkSuspendedUserAgeVerification(...arguments);
}
function _checkSuspendedUserAgeVerification() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _checkSuspendedUserAgeVerification = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
({ AGE_CHECK_POLL_INTERVAL_MS: closure_6, AGE_CHECK_MAX_POLL_ATTEMPTS: closure_7 } = arg1(dependencyMap[3]));
const Endpoints = arg1(dependencyMap[4]).Endpoints;
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/safety_hub/SafetyHubActionCreators.tsx");

export const getSafetyHubData = function getSafetyHubData() {
  return _getSafetyHubData(...arguments);
};
export const getSafetyHubDataForClassification = function getSafetyHubDataForClassification(arg0) {
  return _getSafetyHubDataForClassification(...arguments);
};
export const requestReview = function requestReview(arg0, arg1, arg2) {
  return _requestReview(...arguments);
};
export const requestSuspendedUserAgeVerification = function requestSuspendedUserAgeVerification(classificationId) {
  return _requestSuspendedUserAgeVerification(...arguments);
};
export { checkSuspendedUserAgeVerification };
