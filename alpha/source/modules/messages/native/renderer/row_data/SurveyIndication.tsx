// Module ID: 14191
// Function ID: 14192
// Name: SurveyIndication
// Dependencies: [6151, 1128, 8111, 5028, 14192, 14193, 2]
// Exports: createSurveyIndication

// Module 14191 (SurveyIndication)
import intl2 from "intl" /* 1128 */;
import PushNotificationConstants from "PushNotificationConstants" /* 6151 */;
import size from "module_2" /* 2 */;

const NotificationTypes = PushNotificationConstants.NotificationTypes;
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/SurveyIndication.tsx");

export const createSurveyIndication = function createSurveyIndication(message, forcedTheme, pushFeedbackType) {
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
  const intl = tmp2(1128).intl;
  const formatToParts = intl.formatToParts;
  const obj = { action: "bindUserSurvey", message, notificationType: TOP_MESSAGE_PUSH };
  if (TOP_MESSAGE_PUSH == null) {
    TOP_MESSAGE_PUSH = tmp.TOP_MESSAGE_PUSH;
  }
  const obj2 = { content: formatToParts(GwWhce, { handleMessage: obj }), feedbackIconUrl: getAssetUriForEmbed(tmp8Result) };
  getAssetUriForEmbed = tmp2(8111).getAssetUriForEmbed;
  tmp2(8111);
  const tmp2Result2 = tmp2(5028);
  if (tmp2Result2.isThemeDark(forcedTheme)) {
    tmp8Result = tmp8(14192);
  } else {
    tmp8Result = tmp8(14193);
  }
  return obj2;
};
