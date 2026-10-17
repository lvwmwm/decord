// Module ID: 12644
// Function ID: 12645
// Name: ExplicitMediaActionCreators
// Dependencies: [7267, 7269, 8515, 5400, 1128, 12645, 5155, 12646, 2002, 2]
// Exports: handleSenderFalsePositiveFlow

// Module 12644 (ExplicitMediaActionCreators)
import intl4 from "intl" /* 1128 */;
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5155 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5400 */;
import ExplicitMediaRedactionConstants from "ExplicitMediaRedactionConstants" /* 7269 */;
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 8515 */;
import ExplicitMediaFalsePositiveActionCreatorsDefault from "ExplicitMediaFalsePositiveActionCreators" /* 12645 */;
import ExplicitMediaStore from "ExplicitMediaStore" /* 7267 */;
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
    tmp4Result.openLazy(asyncRequire(12646, tmp2.paths), closure_4, obj3);
  } else {
    const obj4 = { title: intl.string(intl4.t["iS/eFN"]), body: intl2.string(intl4.t.YrjcgR), confirmText: intl3.string(intl4.t.BddRzS) };
    const show = actions_AlertActionCreatorsDefault.show;
    actions_AlertActionCreatorsDefault;
    intl = tmp(1128).intl;
    intl2 = tmp(1128).intl;
    intl3 = tmp(1128).intl;
    show(obj4);
    const tmp4Result4 = ExplicitMediaFalsePositiveActionCreatorsDefault;
    const result1 = tmp4Result4.disableFalsePositiveButton(channelId, messageId);
  }
};
