// Module ID: 7913
// Function ID: 62970
// Name: createSurveyIndication
// Dependencies: [5593, 1212, 7635, 3976, 7914, 7915, 2]
// Exports: createSurveyIndication

// Module 7913 (createSurveyIndication)
import { NotificationTypes } from "str2";

const result = require("frozen").fileFinishedImporting("modules/messages/native/renderer/row_data/SurveyIndication.tsx");

export const createSurveyIndication = function createSurveyIndication(message, forcedTheme, pushFeedbackType) {
  let TOP_MESSAGE_PUSH = pushFeedbackType;
  if (pushFeedbackType === NotificationTypes.TOP_MESSAGE_PUSH) {
  } else {
  }
  let obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj = {};
  obj = { action: "bindUserSurvey", message };
  if (null == TOP_MESSAGE_PUSH) {
    TOP_MESSAGE_PUSH = NotificationTypes.TOP_MESSAGE_PUSH;
  }
  obj.notificationType = TOP_MESSAGE_PUSH;
  obj.handleMessage = obj;
  obj.content = intl.formatToParts(_46_Iqc, obj);
  const obj4 = require(7635) /* frozen */;
  if (obj5.isThemeDark(forcedTheme)) {
    let tmp6Result = tmp6(7914);
  } else {
    tmp6Result = tmp6(7915);
  }
  obj.feedbackIconUrl = obj4.getAssetUriForEmbed(tmp6Result);
  return obj;
};
