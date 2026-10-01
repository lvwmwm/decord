// Module ID: 8701
// Function ID: 8702
// Name: ExplicitMediaSenderFalsePositiveActionSheet
// Dependencies: [19, 6711, 7021, 21, 563, 8702, 8703, 8700, 7024, 4800, 7020, 2]
// Exports: default

// Module 8701 (ExplicitMediaSenderFalsePositiveActionSheet)
import Fragment from "Fragment" /* 21 */;
import ExplicitMediaRedactionConstants from "ExplicitMediaRedactionConstants" /* 7021 */;
import ExplicitMediaRedactionActionCreators from "ExplicitMediaRedactionActionCreators" /* 7024 */;
import ExplicitMediaFalsePositiveActionCreatorsDefault from "ExplicitMediaFalsePositiveActionCreators" /* 8700 */;
import ExplicitMediaFalsePositiveActionSheet2 from "ExplicitMediaFalsePositiveActionSheet" /* 8703 */;
import react_mod from "react" /* 19 */;
import ExplicitMediaStore from "ExplicitMediaStore" /* 6711 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let react = react_mod;
let closure_5 = ExplicitMediaRedactionConstants.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_ACTION_SHEET_KEY;
const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/explicit_media_redaction/native/false_positive_reporting/ExplicitMediaSenderFalsePositiveActionSheet.tsx");

export default function ExplicitMediaObscuredFalsePositiveActionSheet(channelId) {
  let closure_2;
  let closure_3;
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  let reportFalsePositive;
  let obj = channelId(563);
  const items = [reportFalsePositive];
  const stateFromStores = obj.useStateFromStores(items, () => ExplicitMediaStore.getFpMessageInfo(messageId));
  const attachments = stateFromStores.attachments;
  dependencyMap = attachments.map((id) => id.id);
  const attachments1 = stateFromStores.attachments;
  react = attachments1.map((filename) => filename.filename);
  let obj2 = channelId(8702);
  const obj3 = {
    onSuccess() {
      const obj = ExplicitMediaFalsePositiveActionSheet2;
      obj.handleSuccess(closure_5);
      const obj2 = ExplicitMediaFalsePositiveActionCreatorsDefault;
      const result = obj2.disableFalsePositiveButton(channelId, messageId);
    },
    onError() {
      const obj = channelId(closure_2[6]);
      return obj.handleError();
    },
    report() {
      const obj = ExplicitMediaRedactionActionCreators;
      return obj.reportFailedSendFalsePositive(channelId, messageId, closure_2, closure_3);
    }
  };
  const explicitMediaActions = obj2.useExplicitMediaActions(obj3);
  reportFalsePositive = explicitMediaActions.reportFalsePositive;
  const isReportFalsePositiveLoading = explicitMediaActions.isReportFalsePositiveLoading;
  if (stateFromStores.attachments.length <= 0) {
    const obj4 = messageId(4800);
    obj4.hideActionSheet();
  }
  const items1 = [reportFalsePositive];
  const callback = react.useCallback(() => {
    reportFalsePositive();
  }, items1);
  const ExplicitMediaFalsePositiveActionSheet = tmp(8703).ExplicitMediaFalsePositiveActionSheet;
  return <ExplicitMediaFalsePositiveActionSheet channelId={channelId} messageId={messageId} isReportFalsePositiveLoading={isReportFalsePositiveLoading} onConfirmPress={callback} analyticsContext={channelId(7020).TrackMediaRedactionContext.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW} />;
};
