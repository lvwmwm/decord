// Module ID: 11232
// Function ID: 11233
// Name: ExplicitMediaObscuredFalsePositiveActionSheet
// Dependencies: [19, 5819, 6969, 21, 647, 10145, 10146, 11231, 6978, 4253, 6968, 2]
// Exports: default

// Module 11232 (ExplicitMediaObscuredFalsePositiveActionSheet)
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
      channelId(10146).handleSuccess(outer1_5);
      const obj = channelId(10146);
      const result = messageId(11231).disableFalsePositiveButton(channelId, messageId);
    },
    onError() {
      return channelId(10146).handleError();
    },
    report() {
      return channelId(6978).reportFailedSendFalsePositive(channelId, messageId, dependencyMap, noop);
    }
  };
  const explicitMediaActions = channelId(10145).useExplicitMediaActions(obj);
  reportFalsePositive = explicitMediaActions.reportFalsePositive;
  if (stateFromStores.attachments.length <= 0) {
    messageId(4253).hideActionSheet();
    const obj4 = messageId(4253);
  }
  const items1 = [reportFalsePositive];
  const callback = React.useCallback(() => {
    reportFalsePositive();
  }, items1);
  obj = { channelId, messageId, isReportFalsePositiveLoading: explicitMediaActions.isReportFalsePositiveLoading, onConfirmPress: callback, analyticsContext: null };
  obj[4] = channelId(6968).TrackMediaRedactionContext.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW;
  return jsx(channelId(10146).ExplicitMediaFalsePositiveActionSheet, { channelId, messageId, isReportFalsePositiveLoading: explicitMediaActions.isReportFalsePositiveLoading, onConfirmPress: callback, analyticsContext: null });
};
