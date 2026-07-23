// Module ID: 8145
// Function ID: 64421
// Name: ExplicitMediaObscuredFalsePositiveActionSheet
// Dependencies: [31, 5671, 6836, 33, 624, 8146, 8147, 8144, 6845, 4098, 6835, 2]
// Exports: default

// Module 8145 (ExplicitMediaObscuredFalsePositiveActionSheet)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_ACTION_SHEET_KEY as closure_5 } from "USER_SETTING_ACTION_SHEET_KEY";
import { jsx } from "jsxProd";

const require = arg1;
let result = require("USER_SETTING_ACTION_SHEET_KEY").fileFinishedImporting("modules/explicit_media_redaction/native/false_positive_reporting/ExplicitMediaSenderFalsePositiveActionSheet.tsx");

export default function ExplicitMediaObscuredFalsePositiveActionSheet(channelId) {
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  let obj = channelId(624);
  const items = [reportFalsePositive];
  const stateFromStores = obj.useStateFromStores(items, () => reportFalsePositive.getFpMessageInfo(messageId));
  const attachments = stateFromStores.attachments;
  const dependencyMap = attachments.map((id) => id.id);
  const attachments1 = stateFromStores.attachments;
  const React = attachments1.map((filename) => filename.filename);
  obj = {
    onSuccess() {
      channelId(8147).handleSuccess(outer1_5);
      const obj = channelId(8147);
      const result = messageId(8144).disableFalsePositiveButton(channelId, messageId);
    },
    onError() {
      return channelId(8147).handleError();
    },
    report() {
      return channelId(6845).reportFailedSendFalsePositive(channelId, messageId, dependencyMap, result);
    }
  };
  const explicitMediaActions = channelId(8146).useExplicitMediaActions(obj);
  reportFalsePositive = explicitMediaActions.reportFalsePositive;
  if (stateFromStores.attachments.length <= 0) {
    messageId(4098).hideActionSheet();
    const obj4 = messageId(4098);
  }
  const items1 = [reportFalsePositive];
  const callback = React.useCallback(() => {
    reportFalsePositive();
  }, items1);
  obj = { channelId, messageId, isReportFalsePositiveLoading: explicitMediaActions.isReportFalsePositiveLoading, onConfirmPress: callback, analyticsContext: channelId(6835).TrackMediaRedactionContext.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW };
  return jsx(channelId(8147).ExplicitMediaFalsePositiveActionSheet, { channelId, messageId, isReportFalsePositiveLoading: explicitMediaActions.isReportFalsePositiveLoading, onConfirmPress: callback, analyticsContext: channelId(6835).TrackMediaRedactionContext.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW });
};
