// Module ID: 11106
// Function ID: 11107
// Name: ExplicitMediaObscuredFalsePositiveActionSheet
// Dependencies: [19, 5863, 5865, 21, 647, 9889, 9890, 11105, 5885, 4157, 5862, 2]
// Exports: default

// Module 11106 (ExplicitMediaObscuredFalsePositiveActionSheet)
import noop from "noop";
import getFpMessageInfo from "getFpMessageInfo";
import { EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_ACTION_SHEET_KEY as closure_5 } from "USER_SETTING_ACTION_SHEET_KEY";
import { jsx } from "jsxProd";

const require = arg1;
let result = require("USER_SETTING_ACTION_SHEET_KEY").fileFinishedImporting("modules/explicit_media_redaction/native/false_positive_reporting/ExplicitMediaSenderFalsePositiveActionSheet.tsx");

export default function ExplicitMediaObscuredFalsePositiveActionSheet(channelId) {
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  let dependencyMap;
  let React;
  let reportFalsePositive;
  let obj = channelId(647);
  const items = [reportFalsePositive];
  const stateFromStores = obj.useStateFromStores(items, () => reportFalsePositive.getFpMessageInfo(messageId));
  const attachments = stateFromStores.attachments;
  dependencyMap = attachments.map((id) => id.id);
  const attachments1 = stateFromStores.attachments;
  React = attachments1.map((filename) => filename.filename);
  obj = {
    onSuccess() {
      channelId(9890).handleSuccess(outer1_5);
      const obj = channelId(9890);
      const result = messageId(11105).disableFalsePositiveButton(channelId, messageId);
    },
    onError() {
      return channelId(9890).handleError();
    },
    report() {
      return channelId(5885).reportFailedSendFalsePositive(channelId, messageId, dependencyMap, noop);
    }
  };
  const explicitMediaActions = channelId(9889).useExplicitMediaActions(obj);
  reportFalsePositive = explicitMediaActions.reportFalsePositive;
  if (stateFromStores.attachments.length <= 0) {
    messageId(4157).hideActionSheet();
    const obj4 = messageId(4157);
  }
  const items1 = [reportFalsePositive];
  const callback = React.useCallback(() => {
    reportFalsePositive();
  }, items1);
  obj = { channelId, messageId, isReportFalsePositiveLoading: explicitMediaActions.isReportFalsePositiveLoading, onConfirmPress: callback, analyticsContext: null };
  obj[4] = channelId(5862).TrackMediaRedactionContext.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW;
  return jsx(channelId(9890).ExplicitMediaFalsePositiveActionSheet, { channelId, messageId, isReportFalsePositiveLoading: explicitMediaActions.isReportFalsePositiveLoading, onConfirmPress: callback, analyticsContext: null });
};
