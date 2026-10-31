// Module ID: 13291
// Function ID: 13292
// Name: ExplicitMediaObscuredFalsePositiveActionSheet
// Dependencies: [19, 7466, 21, 13292, 13293, 13294, 13295, 5258, 8687, 2]
// Exports: default

// Module 13291 (ExplicitMediaObscuredFalsePositiveActionSheet)
import Fragment from "Fragment" /* 21 */;
import ExplicitMediaRedactionConstants from "ExplicitMediaRedactionConstants" /* 7466 */;
import ExplicitMediaRedactionActionCreators from "ExplicitMediaRedactionActionCreators" /* 13295 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let closure_4 = ExplicitMediaRedactionConstants.EXPLICIT_MEDIA_FALSE_POSITIVE_ACTION_SHEET_KEY;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/explicit_media_redaction/native/false_positive_reporting/ExplicitMediaObscuredFalsePositiveActionSheet.tsx");

export default function ExplicitMediaObscuredFalsePositiveActionSheet(channelId) {
  let attachmentId;
  let embedId;
  let first;
  let first1;
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  let redactableMediaAttachmentsForMessage;
  const tmp = channelId;
  let tmp2 = redactableMediaAttachmentsForMessage;
  ({ attachmentId, embedId } = channelId);
  let obj = channelId(redactableMediaAttachmentsForMessage[3]);
  redactableMediaAttachmentsForMessage = obj.useRedactableMediaAttachmentsForMessage(channelId, messageId, attachmentId);
  const obj2 = channelId(redactableMediaAttachmentsForMessage[3]);
  const redactableMediaEmbedsForMessage = obj2.useRedactableMediaEmbedsForMessage(channelId, messageId, embedId);
  const obj3 = channelId(redactableMediaAttachmentsForMessage[4]);
  const obj4 = {
    onSuccess() {
      const obj = channelId(redactableMediaAttachmentsForMessage[5]);
      return obj.handleSuccess(reportFalsePositive);
    },
    onError() {
      const obj = channelId(redactableMediaAttachmentsForMessage[5]);
      return obj.handleError();
    },
    report() {
      let mapped;
      reportFalsePositive = ExplicitMediaRedactionActionCreators.reportFalsePositive;
      ExplicitMediaRedactionActionCreators;
      const arr = redactableMediaAttachmentsForMessage;
      const tmp2 = channelId;
      const tmp3 = messageId;
      if (redactableMediaAttachmentsForMessage != null) {
        mapped = arr.map((id) => id.id);
      }
      if (mapped == null) {
        mapped = [];
      }
      let mapped1 = redactableMediaEmbedsForMessage.map((id) => id.id);
      if (mapped1 == null) {
        mapped1 = [];
      }
      return reportFalsePositive(tmp2, tmp3, mapped, mapped1);
    }
  };
  const explicitMediaActions = obj3.useExplicitMediaActions(obj4);
  let reportFalsePositive = explicitMediaActions.reportFalsePositive;
  let num;
  const isReportFalsePositiveLoading = explicitMediaActions.isReportFalsePositiveLoading;
  if (redactableMediaAttachmentsForMessage != null) {
    num = redactableMediaAttachmentsForMessage.length;
  }
  if (num == null) {
    num = 0;
  }
  let tmp4 = num > 0;
  if (!tmp4) {
    let num2;
    if (redactableMediaEmbedsForMessage != null) {
      num2 = redactableMediaEmbedsForMessage.length;
    }
    if (num2 == null) {
      num2 = 0;
    }
    tmp4 = num2 > 0;
  }
  if (!tmp4) {
    const obj5 = messageId(tmp2[7]);
    obj5.hideActionSheet();
  }
  const items = [reportFalsePositive];
  const callback = redactableMediaEmbedsForMessage.useCallback(() => {
    reportFalsePositive();
  }, items);
  const obj6 = { channelId, messageId, isReportFalsePositiveLoading, attachmentPreview: first, embedPreview: first1, onConfirmPress: callback, analyticsContext: tmp(tmp2[8]).TrackMediaRedactionContext.EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW };
  first = undefined;
  const ExplicitMediaFalsePositiveActionSheet = tmp(tmp2[5]).ExplicitMediaFalsePositiveActionSheet;
  const tmp8 = jsx;
  if (1 === redactableMediaAttachmentsForMessage.length) {
    first = redactableMediaAttachmentsForMessage[0];
  }
  first1 = undefined;
  if (1 === redactableMediaEmbedsForMessage.length) {
    first1 = redactableMediaEmbedsForMessage[0];
  }
  return tmp8(ExplicitMediaFalsePositiveActionSheet, obj6);
};
