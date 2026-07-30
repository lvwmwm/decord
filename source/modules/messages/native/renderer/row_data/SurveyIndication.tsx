// Module ID: 8006
// Function ID: 8007
// Name: createSurveyIndication
// Dependencies: [5644, 1236, 7726, 4035, 8007, 8008, 2]
// Exports: createSurveyIndication

// Module 8006 (createSurveyIndication)
import { NotificationTypes } from "str2";

const result = require("frozen").fileFinishedImporting("modules/messages/native/renderer/row_data/SurveyIndication.tsx");

export const createSurveyIndication = function createSurveyIndication(message, forcedTheme, pushFeedbackType) {
  let TOP_MESSAGE_PUSH = pushFeedbackType;
  if (pushFeedbackType === NotificationTypes.TOP_MESSAGE_PUSH) {
    let tmp2 = require;
  } else {
    tmp2 = require;
  }
  const intl = tmp2(1236).intl;
  let obj = { action: "bindUserSurvey", message, notificationType: null };
  if (TOP_MESSAGE_PUSH == null) {
    TOP_MESSAGE_PUSH = NotificationTypes.TOP_MESSAGE_PUSH;
  }
  obj = { content: intl.formatToParts(_46_Iqc, { handleMessage: obj }), feedbackIconUrl: null };
  obj[2] = TOP_MESSAGE_PUSH;
  let tmp2Result = tmp2(7726);
  tmp2Result = tmp2(4035);
  if (tmp2Result.isThemeDark(forcedTheme)) {
    let tmp6Result = tmp6(8007);
  } else {
    tmp6Result = tmp6(8008);
  }
  obj[1] = tmp2Result.getAssetUriForEmbed(tmp6Result);
  return obj;
};
