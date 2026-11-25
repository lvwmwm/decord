// Module ID: 10517
// Function ID: 10518
// Name: ExplicitMediaActionCreators
// Dependencies: [8225, 8227, 8448, 5861, 1112, 10518, 5127, 10519, 2119, 2]
// Exports: handleSenderFalsePositiveFlow

// Module 10517 (ExplicitMediaActionCreators)
import intl4 from "intl" /* 1112 */;
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5861 */;
import ExplicitMediaRedactionConstants from "ExplicitMediaRedactionConstants" /* 8227 */;
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 8448 */;
import ExplicitMediaFalsePositiveActionCreatorsDefault from "ExplicitMediaFalsePositiveActionCreators" /* 10518 */;
import ExplicitMediaStore from "ExplicitMediaStore" /* 8225 */;
import size from "module_2" /* 2 */;

let closure_4 = ExplicitMediaRedactionConstants.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_ACTION_SHEET_KEY;
let result = size.fileFinishedImporting("modules/explicit_media_redaction/ExplicitMediaActionCreators.native.tsx");

export function handleSenderFalsePositiveFlow(channelId, messageId) {
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
    tmp4Result.openLazy(asyncRequire(10519, tmp2.paths), closure_4, obj3);
  } else {
    const obj4 = { title: intl.string(intl4.t["iS/eFN"]), body: intl2.string(intl4.t.YrjcgR), confirmText: intl3.string(intl4.t.BddRzS) };
    const show = actions_AlertActionCreatorsDefault.show;
    actions_AlertActionCreatorsDefault;
    intl = tmp(1112).intl;
    intl2 = tmp(1112).intl;
    intl3 = tmp(1112).intl;
    show(obj4);
    const tmp4Result4 = ExplicitMediaFalsePositiveActionCreatorsDefault;
    const result1 = tmp4Result4.disableFalsePositiveButton(channelId, messageId);
  }
}
