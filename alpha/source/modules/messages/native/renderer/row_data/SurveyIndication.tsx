// Module ID: 13588
// Function ID: 13589
// Name: SurveyIndication
// Dependencies: [6925, 1115, 8294, 4680, 13589, 13590, 2]
// Exports: createSurveyIndication

// Module 13588 (SurveyIndication)
import util from "util" /* 1115 */;
import PushNotificationConstants from "PushNotificationConstants" /* 6925 */;
import size from "module_2" /* 2 */;

const NotificationTypes = PushNotificationConstants.NotificationTypes;
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/SurveyIndication.tsx");

export const createSurveyIndication = function createSurveyIndication(message, forcedTheme, pushFeedbackType) {
  let TOP_MESSAGE_PUSH = pushFeedbackType;
  if (pushFeedbackType === NotificationTypes.TOP_MESSAGE_PUSH) {
    let GwWhce = util.t.GwWhce;
    let tmp2 = require;
  } else {
    tmp2 = require;
    GwWhce = util.t["46+Iqc"];
  }
  const intl = tmp2(1115).intl;
  const obj = { action: "bindUserSurvey", message, notificationType: null };
  if (TOP_MESSAGE_PUSH == null) {
    TOP_MESSAGE_PUSH = tmp.TOP_MESSAGE_PUSH;
  }
  const obj2 = { content: intl.formatToParts(GwWhce, { handleMessage: obj }), feedbackIconUrl: null };
  obj.notificationType = TOP_MESSAGE_PUSH;
  tmp = NotificationTypes;
  const tmp2Result = tmp2(8294);
  if (tmp2Result2.isThemeDark(forcedTheme)) {
    let tmp7Result = tmp7(13589);
  } else {
    tmp7Result = tmp7(13590);
  }
  obj2.feedbackIconUrl = tmp2Result.getAssetUriForEmbed(tmp7Result);
  return obj2;
};
