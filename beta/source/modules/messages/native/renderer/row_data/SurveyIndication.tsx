// Module ID: 12758
// Function ID: 12759
// Name: SurveyIndication
// Dependencies: [6013, 1115, 7388, 4685, 12759, 12760, 2]
// Exports: createSurveyIndication

// Module 12758 (SurveyIndication)
import intl2 from "intl" /* 1115 */;
import PushNotificationConstants from "PushNotificationConstants" /* 6013 */;
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
  const intl = tmp2(1115).intl;
  const formatToParts = intl.formatToParts;
  const obj = { action: "bindUserSurvey", message, notificationType: TOP_MESSAGE_PUSH };
  if (TOP_MESSAGE_PUSH == null) {
    TOP_MESSAGE_PUSH = tmp.TOP_MESSAGE_PUSH;
  }
  const obj2 = { content: formatToParts(GwWhce, { handleMessage: obj }), feedbackIconUrl: getAssetUriForEmbed(tmp8Result) };
  getAssetUriForEmbed = tmp2(7388).getAssetUriForEmbed;
  tmp2(7388);
  const tmp2Result2 = tmp2(4685);
  if (tmp2Result2.isThemeDark(forcedTheme)) {
    tmp8Result = tmp8(12759);
  } else {
    tmp8Result = tmp8(12760);
  }
  return obj2;
};
