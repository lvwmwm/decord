// Module ID: 12279
// Function ID: 12280
// Name: ExplicitMediaActionCreators
// Dependencies: [6991, 6993, 8243, 5300, 1126, 12280, 5056, 12281, 2000, 2]
// Exports: handleSenderFalsePositiveFlow

// Module 12279 (ExplicitMediaActionCreators)
import intl4 from "intl" /* 1126 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5300 */;
import ExplicitMediaRedactionConstants from "ExplicitMediaRedactionConstants" /* 6993 */;
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 8243 */;
import ExplicitMediaFalsePositiveActionCreatorsDefault from "ExplicitMediaFalsePositiveActionCreators" /* 12280 */;
import ExplicitMediaStore from "ExplicitMediaStore" /* 6991 */;
import size from "module_2" /* 2 */;

let closure_4 = ExplicitMediaRedactionConstants.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_ACTION_SHEET_KEY;
let result = size.fileFinishedImporting("modules/explicit_media_redaction/ExplicitMediaActionCreators.native.tsx");

export const handleSenderFalsePositiveFlow = function handleSenderFalsePositiveFlow(channelId, messageId) {
  let intl;
  let intl2;
  let intl3;
  const obj = ExplicitMediaRedactionUtils;
  const obj2 = { action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED, messageId, channelId };
  const result = obj.trackMediaRedactionAction(obj2);
  const tmp2 = dependencyMap;
  if (ExplicitMediaStore.canSubmitFpReport(messageId)) {
    const obj3 = { channelId, messageId };
    const tmp4Result = ActionSheetActionCreatorsDefault;
    tmp4Result.openLazy(asyncRequire(12281, tmp2.paths), closure_4, obj3);
  } else {
    const obj4 = { title: intl.string(intl4.t["iS/eFN"]), body: intl2.string(intl4.t.YrjcgR), confirmText: intl3.string(intl4.t.BddRzS) };
    const show = actions_AlertActionCreatorsDefault.show;
    actions_AlertActionCreatorsDefault;
    intl = tmp(1126).intl;
    intl2 = tmp(1126).intl;
    intl3 = tmp(1126).intl;
    show(obj4);
    const tmp4Result4 = ExplicitMediaFalsePositiveActionCreatorsDefault;
    const result1 = tmp4Result4.disableFalsePositiveButton(channelId, messageId);
  }
};
