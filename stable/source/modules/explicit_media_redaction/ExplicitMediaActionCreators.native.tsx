// Module ID: 9526
// Function ID: 9527
// Name: ExplicitMediaActionCreators
// Dependencies: [7396, 7703, 7702, 4981, 1114, 9527, 4603, 9528, 1896, 2]
// Exports: handleSenderFalsePositiveFlow

// Module 9526 (ExplicitMediaActionCreators)
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 7702 */;
import ExplicitMediaStore from "ExplicitMediaStore" /* 7396 */;

require = fn;
let closure_4 = fn(7703).EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_ACTION_SHEET_KEY;
const size = fn(2);
let result = size.fileFinishedImporting("modules/explicit_media_redaction/ExplicitMediaActionCreators.native.tsx");

export const handleSenderFalsePositiveFlow = function handleSenderFalsePositiveFlow(channelId, messageId) {
  const obj = ExplicitMediaRedactionUtils;
  const tmp2 = dependencyMap;
  const result = obj.trackMediaRedactionAction({ action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED, messageId, channelId });
  if (ExplicitMediaStore.canSubmitFpReport(messageId)) {
    const obj3 = { channelId, messageId };
    tmp4(4603).openLazy(tmp(1896)(9528, tmp2.paths), closure_4, obj3);
  } else {
    const obj4 = { title: null, body: null, confirmText: null };
    const intl = tmp(1114).intl;
    obj4.title = intl.string(tmp(1114).t["iS/eFN"]);
    const intl2 = tmp(1114).intl;
    obj4.body = intl2.string(tmp(1114).t.YrjcgR);
    const intl3 = tmp(1114).intl;
    obj4.confirmText = intl3.string(tmp(1114).t.BddRzS);
    tmp4(4981).show(obj4);
    const tmp4Result3 = tmp4(4981);
    const result1 = tmp4(9527).disableFalsePositiveButton(channelId, messageId);
  }
  const obj2 = { action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED, messageId, channelId };
};
