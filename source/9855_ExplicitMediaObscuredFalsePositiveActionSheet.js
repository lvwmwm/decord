// Module ID: 9855
// Function ID: 76315
// Name: ExplicitMediaObscuredFalsePositiveActionSheet
// Dependencies: []
// Exports: default

// Module 9855 (ExplicitMediaObscuredFalsePositiveActionSheet)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = arg1(dependencyMap[1]).EXPLICIT_MEDIA_FALSE_POSITIVE_ACTION_SHEET_KEY;
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/explicit_media_redaction/native/false_positive_reporting/ExplicitMediaObscuredFalsePositiveActionSheet.tsx");

export default function ExplicitMediaObscuredFalsePositiveActionSheet(channelId) {
  let attachmentId;
  let embedId;
  channelId = channelId.channelId;
  const arg1 = channelId;
  const messageId = channelId.messageId;
  const importDefault = messageId;
  ({ attachmentId, embedId } = channelId);
  let obj = arg1(dependencyMap[3]);
  const redactableMediaAttachmentsForMessage = obj.useRedactableMediaAttachmentsForMessage(channelId, messageId, attachmentId);
  const dependencyMap = redactableMediaAttachmentsForMessage;
  const redactableMediaEmbedsForMessage = arg1(dependencyMap[3]).useRedactableMediaEmbedsForMessage(channelId, messageId, embedId);
  const React = redactableMediaEmbedsForMessage;
  const obj2 = arg1(dependencyMap[3]);
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
  const explicitMediaActions = arg1(dependencyMap[4]).useExplicitMediaActions(obj);
  const reportFalsePositive = explicitMediaActions.reportFalsePositive;
  let closure_4 = reportFalsePositive;
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
    importDefault(dependencyMap[7]).hideActionSheet();
    const obj5 = importDefault(dependencyMap[7]);
  }
  const items = [reportFalsePositive];
  const callback = React.useCallback(() => {
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
  obj.analyticsContext = arg1(dependencyMap[8]).TrackMediaRedactionContext.EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW;
  return jsx(arg1(dependencyMap[5]).ExplicitMediaFalsePositiveActionSheet, obj);
};
