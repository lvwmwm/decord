// Module ID: 7907
// Function ID: 62923
// Name: createSurveyIndication
// Dependencies: []
// Exports: createSurveyIndication

// Module 7907 (createSurveyIndication)
const NotificationTypes = require(dependencyMap[0]).NotificationTypes;
const _module = require(dependencyMap[6]);
const result = _module.fileFinishedImporting("modules/messages/native/renderer/row_data/SurveyIndication.tsx");

export const createSurveyIndication = function createSurveyIndication(message, forcedTheme, pushFeedbackType) {
  let TOP_MESSAGE_PUSH = pushFeedbackType;
  if (pushFeedbackType === NotificationTypes.TOP_MESSAGE_PUSH) {
  } else {
  }
  let obj = {};
  const intl = require(dependencyMap[1]).intl;
  obj = {};
  obj = { action: "bindUserSurvey", message };
  if (null == TOP_MESSAGE_PUSH) {
    TOP_MESSAGE_PUSH = NotificationTypes.TOP_MESSAGE_PUSH;
  }
  obj.notificationType = TOP_MESSAGE_PUSH;
  obj.handleMessage = obj;
  obj.content = intl.formatToParts(_46_Iqc, obj);
  const obj4 = require(dependencyMap[2]);
  if (obj5.isThemeDark(forcedTheme)) {
    let tmp6Result = tmp6(tmp7[4]);
  } else {
    tmp6Result = tmp6(tmp7[5]);
  }
  obj.feedbackIconUrl = obj4.getAssetUriForEmbed(tmp6Result);
  return obj;
};
