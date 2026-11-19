// Module ID: 14186
// Function ID: 14187
// Name: SurveyIndication
// Dependencies: [6307, 1113, 8126, 4799, 14187, 14188, 2]
// Exports: createSurveyIndication

// Module 14186 (SurveyIndication)
import intl2 from "intl" /* 1113 */;
import PushNotificationConstants from "PushNotificationConstants" /* 6307 */;
import size from "module_2" /* 2 */;

const NotificationTypes = PushNotificationConstants.NotificationTypes;
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/SurveyIndication.tsx");

export function createSurveyIndication(message, forcedTheme, pushFeedbackType) {
  let GwWhce;
  let getAssetUriForEmbed;
  let tmp2;
  let tmp8Result;
  let TOP_MESSAGE_PUSH = pushFeedbackType;
  const tmp = NotificationTypes;
  if (pushFeedbackType === NotificationTypes.TOP_MESSAGE_PUSH) {
    GwWhce = intl2.t.GwWhce;
    tmp2 = require;
  } else {
    tmp2 = require;
    GwWhce = intl2.t["46+Iqc"];
  }
  const intl = tmp2(1113).intl;
  const formatToParts = intl.formatToParts;
  const obj = { action: "bindUserSurvey", message, notificationType: TOP_MESSAGE_PUSH };
  if (TOP_MESSAGE_PUSH == null) {
    TOP_MESSAGE_PUSH = tmp.TOP_MESSAGE_PUSH;
  }
  const obj2 = { content: formatToParts(GwWhce, { handleMessage: obj }), feedbackIconUrl: getAssetUriForEmbed(tmp8Result) };
  getAssetUriForEmbed = tmp2(8126).getAssetUriForEmbed;
  tmp2(8126);
  const tmp2Result2 = tmp2(4799);
  if (tmp2Result2.isThemeDark(forcedTheme)) {
    tmp8Result = tmp8(14187);
  } else {
    tmp8Result = tmp8(14188);
  }
  return obj2;
}
