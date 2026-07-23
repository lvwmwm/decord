// Module ID: 9868
// Function ID: 76396
// Name: ExplicitMediaObscuredFalsePositiveActionSheet
// Dependencies: [31, 6836, 33, 9869, 8146, 8147, 6845, 4098, 6835, 2]
// Exports: default

// Module 9868 (ExplicitMediaObscuredFalsePositiveActionSheet)
import result from "result";
import { EXPLICIT_MEDIA_FALSE_POSITIVE_ACTION_SHEET_KEY as closure_4 } from "USER_SETTING_ACTION_SHEET_KEY";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/explicit_media_redaction/native/false_positive_reporting/ExplicitMediaObscuredFalsePositiveActionSheet.tsx");

export default function ExplicitMediaObscuredFalsePositiveActionSheet(channelId) {
  let attachmentId;
  let embedId;
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  ({ attachmentId, embedId } = channelId);
  let obj = channelId(redactableMediaAttachmentsForMessage[3]);
  redactableMediaAttachmentsForMessage = obj.useRedactableMediaAttachmentsForMessage(channelId, messageId, attachmentId);
  const redactableMediaEmbedsForMessage = channelId(redactableMediaAttachmentsForMessage[3]).useRedactableMediaEmbedsForMessage(channelId, messageId, embedId);
  const obj2 = channelId(redactableMediaAttachmentsForMessage[3]);
  obj = {
    onSuccess() {
      return channelId(redactableMediaAttachmentsForMessage[5]).handleSuccess(reportFalsePositive);
    },
    onError() {
      return channelId(redactableMediaAttachmentsForMessage[5]).handleError();
    },
    report() {
      let mapped;
      if (null != redactableMediaAttachmentsForMessage) {
        mapped = redactableMediaAttachmentsForMessage.map((id) => id.id);
      }
      if (null == mapped) {
        mapped = [];
      }
      let mapped1 = redactableMediaEmbedsForMessage.map((id) => id.id);
      if (null == mapped1) {
        mapped1 = [];
      }
      return channelId(redactableMediaAttachmentsForMessage[6]).reportFalsePositive(channelId, messageId, mapped, mapped1);
    }
  };
  const explicitMediaActions = channelId(redactableMediaAttachmentsForMessage[4]).useExplicitMediaActions(obj);
  const reportFalsePositive = explicitMediaActions.reportFalsePositive;
  let length;
  if (null != redactableMediaAttachmentsForMessage) {
    length = redactableMediaAttachmentsForMessage.length;
  }
  let num = 0;
  if (null != length) {
    num = length;
  }
  let tmp3 = num > 0;
  if (!tmp3) {
    let length1;
    if (null != redactableMediaEmbedsForMessage) {
      length1 = redactableMediaEmbedsForMessage.length;
    }
    let num2 = 0;
    if (null != length1) {
      num2 = length1;
    }
    tmp3 = num2 > 0;
  }
  if (!tmp3) {
    messageId(redactableMediaAttachmentsForMessage[7]).hideActionSheet();
    const obj5 = messageId(redactableMediaAttachmentsForMessage[7]);
  }
  const items = [reportFalsePositive];
  const callback = redactableMediaEmbedsForMessage.useCallback(() => {
    reportFalsePositive();
  }, items);
  obj = { channelId, messageId, isReportFalsePositiveLoading: explicitMediaActions.isReportFalsePositiveLoading };
  let first;
  if (1 === redactableMediaAttachmentsForMessage.length) {
    first = redactableMediaAttachmentsForMessage[0];
  }
  obj.attachmentPreview = first;
  let first1;
  if (1 === redactableMediaEmbedsForMessage.length) {
    first1 = redactableMediaEmbedsForMessage[0];
  }
  obj.embedPreview = first1;
  obj.onConfirmPress = callback;
  obj.analyticsContext = channelId(redactableMediaAttachmentsForMessage[8]).TrackMediaRedactionContext.EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW;
  return jsx(channelId(redactableMediaAttachmentsForMessage[5]).ExplicitMediaFalsePositiveActionSheet, { channelId, messageId, isReportFalsePositiveLoading: explicitMediaActions.isReportFalsePositiveLoading });
};
