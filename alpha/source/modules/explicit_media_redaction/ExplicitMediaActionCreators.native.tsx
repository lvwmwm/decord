// Module ID: 8898
// Function ID: 8899
// Name: ExplicitMediaActionCreators
// Dependencies: [6907, 7216, 7215, 5400, 1115, 8899, 4830, 8900, 1981, 2]
// Exports: handleSenderFalsePositiveFlow

// Module 8898 (ExplicitMediaActionCreators)
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 7215 */;
import ExplicitMediaStore from "ExplicitMediaStore" /* 6907 */;

require = fn;
let closure_4 = fn(7216).EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_ACTION_SHEET_KEY;
const size = fn(2);
let result = size.fileFinishedImporting("modules/explicit_media_redaction/ExplicitMediaActionCreators.native.tsx");

export const handleSenderFalsePositiveFlow = function handleSenderFalsePositiveFlow(channelId, messageId) {
  const obj = ExplicitMediaRedactionUtils;
  const tmp2 = dependencyMap;
  const result = obj.trackMediaRedactionAction({ action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED, messageId, channelId });
  if (ExplicitMediaStore.canSubmitFpReport(messageId)) {
    const obj3 = { channelId, messageId };
    tmp4(4830).openLazy(tmp(1981)(8900, tmp2.paths), closure_4, obj3);
  } else {
    const obj4 = { title: null, body: null, confirmText: null };
    const intl = tmp(1115).intl;
    obj4.title = intl.string(tmp(1115).t["iS/eFN"]);
    const intl2 = tmp(1115).intl;
    obj4.body = intl2.string(tmp(1115).t.YrjcgR);
    const intl3 = tmp(1115).intl;
    obj4.confirmText = intl3.string(tmp(1115).t.BddRzS);
    tmp4(5400).show(obj4);
    const tmp4Result3 = tmp4(5400);
    const result1 = tmp4(8899).disableFalsePositiveButton(channelId, messageId);
  }
  const obj2 = { action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED, messageId, channelId };
};
