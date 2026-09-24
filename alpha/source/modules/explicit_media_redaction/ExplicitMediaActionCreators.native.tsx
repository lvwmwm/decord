// Module ID: 9593
// Function ID: 9594
// Name: ExplicitMediaActionCreators
// Dependencies: [7623, 7931, 7930, 5196, 1115, 9594, 4796, 9595, 1980, 2]
// Exports: handleSenderFalsePositiveFlow

// Module 9593 (ExplicitMediaActionCreators)
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 7930 */;
import ExplicitMediaStore from "ExplicitMediaStore" /* 7623 */;

require = fn;
let closure_4 = fn(7931).EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_ACTION_SHEET_KEY;
const size = fn(2);
let result = size.fileFinishedImporting("modules/explicit_media_redaction/ExplicitMediaActionCreators.native.tsx");

export const handleSenderFalsePositiveFlow = function handleSenderFalsePositiveFlow(channelId, messageId) {
  const obj = ExplicitMediaRedactionUtils;
  const tmp2 = dependencyMap;
  const result = obj.trackMediaRedactionAction({ action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED, messageId, channelId });
  if (ExplicitMediaStore.canSubmitFpReport(messageId)) {
    const obj3 = { channelId, messageId };
    tmp4(4796).openLazy(tmp(1980)(9595, tmp2.paths), closure_4, obj3);
  } else {
    const obj4 = { title: null, body: null, confirmText: null };
    const intl = tmp(1115).intl;
    obj4.title = intl.string(tmp(1115).t["iS/eFN"]);
    const intl2 = tmp(1115).intl;
    obj4.body = intl2.string(tmp(1115).t.YrjcgR);
    const intl3 = tmp(1115).intl;
    obj4.confirmText = intl3.string(tmp(1115).t.BddRzS);
    tmp4(5196).show(obj4);
    const tmp4Result3 = tmp4(5196);
    const result1 = tmp4(9594).disableFalsePositiveButton(channelId, messageId);
  }
  const obj2 = { action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED, messageId, channelId };
};
