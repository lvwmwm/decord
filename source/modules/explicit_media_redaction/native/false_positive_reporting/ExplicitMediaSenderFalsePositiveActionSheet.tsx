// Module ID: 8133
// Function ID: 64347
// Name: ExplicitMediaObscuredFalsePositiveActionSheet
// Dependencies: []
// Exports: default

// Module 8133 (ExplicitMediaObscuredFalsePositiveActionSheet)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = arg1(dependencyMap[2]).EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_ACTION_SHEET_KEY;
const jsx = arg1(dependencyMap[3]).jsx;
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/explicit_media_redaction/native/false_positive_reporting/ExplicitMediaSenderFalsePositiveActionSheet.tsx");

export default function ExplicitMediaObscuredFalsePositiveActionSheet(channelId) {
  channelId = channelId.channelId;
  const arg1 = channelId;
  const messageId = channelId.messageId;
  const importDefault = messageId;
  let obj = arg1(closure_2[4]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => reportFalsePositive.getFpMessageInfo(messageId));
  const attachments = stateFromStores.attachments;
  closure_2 = attachments.map((id) => id.id);
  const attachments1 = stateFromStores.attachments;
  const React = attachments1.map((filename) => filename.filename);
  obj = {
    onSuccess() {
      channelId(closure_2[6]).handleSuccess(closure_5);
      const obj = channelId(closure_2[6]);
      const result = messageId(closure_2[7]).disableFalsePositiveButton(channelId, messageId);
    },
    onError() {
      return channelId(closure_2[6]).handleError();
    },
    report() {
      return channelId(closure_2[8]).reportFailedSendFalsePositive(channelId, messageId, closure_2, closure_3);
    }
  };
  const explicitMediaActions = arg1(closure_2[5]).useExplicitMediaActions(obj);
  const reportFalsePositive = explicitMediaActions.reportFalsePositive;
  closure_4 = reportFalsePositive;
  if (stateFromStores.attachments.length <= 0) {
    importDefault(closure_2[9]).hideActionSheet();
    const obj4 = importDefault(closure_2[9]);
  }
  const items1 = [reportFalsePositive];
  const callback = React.useCallback(() => {
    reportFalsePositive();
  }, items1);
  obj = { channelId, messageId, isReportFalsePositiveLoading: explicitMediaActions.isReportFalsePositiveLoading, onConfirmPress: callback, analyticsContext: arg1(closure_2[10]).TrackMediaRedactionContext.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW };
  return jsx(arg1(closure_2[6]).ExplicitMediaFalsePositiveActionSheet, obj);
};
