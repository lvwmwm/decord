// Module ID: 11059
// Function ID: 86042
// Name: _getSafetyHubData
// Dependencies: [5, 1194, 11053, 7589, 653, 686, 507, 4317, 7588, 2]
// Exports: getSafetyHubData, getSafetyHubDataForClassification, requestReview, requestSuspendedUserAgeVerification

// Module 11059 (_getSafetyHubData)
import dispatcher from "dispatcher";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import SafetyHubLinks from "SafetyHubLinks";
import { Endpoints } from "ME";

let closure_6;
let closure_7;
const require = arg1;
function _getSafetyHubData() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _getSafetyHubDataForClassification() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _setClassificationFlaggedContent(flagged_content) {
  if (null != flagged_content.flagged_content) {
    if (flagged_content.flagged_content.length > 0) {
      const first = flagged_content.flagged_content[0];
      const attachments = first.attachments;
      first.attachments = attachments.filter((filename) => {
        filename = filename.filename;
        let isImageFileResult = outer1_0(outer1_2[7]).isImageFile(filename);
        if (!isImageFileResult) {
          isImageFileResult = outer1_0(outer1_2[7]).isVideoFile(filename);
          const obj2 = outer1_0(outer1_2[7]);
        }
        return isImageFileResult;
      });
      if (obj.isFlaggedContentEmpty(first)) {
        let items = [];
      } else {
        items = [first];
      }
      flagged_content.flagged_content = items;
      obj = require(7588) /* parseMessageEmbedForProps */;
    }
  }
}
function _requestReview() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _requestSuspendedUserAgeVerification() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function checkSuspendedUserAgeVerification() {
  return _checkSuspendedUserAgeVerification(...arguments);
}
function _checkSuspendedUserAgeVerification() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
({ AGE_CHECK_POLL_INTERVAL_MS: closure_6, AGE_CHECK_MAX_POLL_ATTEMPTS: closure_7 } = SafetyHubLinks);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/safety_hub/SafetyHubActionCreators.tsx");

export const getSafetyHubData = function getSafetyHubData() {
  return _getSafetyHubData(...arguments);
};
export const getSafetyHubDataForClassification = function getSafetyHubDataForClassification(closure_0) {
  return _getSafetyHubDataForClassification(...arguments);
};
export const requestReview = function requestReview(arg0, arg1, arg2) {
  return _requestReview(...arguments);
};
export const requestSuspendedUserAgeVerification = function requestSuspendedUserAgeVerification(classificationId) {
  return _requestSuspendedUserAgeVerification(...arguments);
};
export { checkSuspendedUserAgeVerification };
