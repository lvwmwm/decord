// Module ID: 11549
// Function ID: 11550
// Name: ExplicitMediaActionCreators
// Dependencies: [6977, 6979, 8218, 5298, 1126, 11550, 5054, 11551, 1999, 2]
// Exports: handleSenderFalsePositiveFlow

// Module 11549 (ExplicitMediaActionCreators)
import intl4 from "intl" /* 1126 */;
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5298 */;
import ExplicitMediaRedactionConstants from "ExplicitMediaRedactionConstants" /* 6979 */;
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 8218 */;
import ExplicitMediaFalsePositiveActionCreatorsDefault from "ExplicitMediaFalsePositiveActionCreators" /* 11550 */;
import ExplicitMediaStore from "ExplicitMediaStore" /* 6977 */;
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
    tmp4Result.openLazy(asyncRequire(11551, tmp2.paths), closure_4, obj3);
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
