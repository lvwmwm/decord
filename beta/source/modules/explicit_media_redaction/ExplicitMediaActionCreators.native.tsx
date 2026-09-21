// Module ID: 9506
// Function ID: 9507
// Name: ExplicitMediaActionCreators
// Dependencies: [7537, 7848, 7847, 5111, 1119, 9507, 4725, 9508, 1984, 2]
// Exports: handleSenderFalsePositiveFlow

// Module 9506 (ExplicitMediaActionCreators)
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 7847 */;
import ExplicitMediaStore from "ExplicitMediaStore" /* 7537 */;

require = fn;
let closure_4 = fn(7848).EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_ACTION_SHEET_KEY;
const size = fn(2);
let result = size.fileFinishedImporting("modules/explicit_media_redaction/ExplicitMediaActionCreators.native.tsx");

export const handleSenderFalsePositiveFlow = function handleSenderFalsePositiveFlow(channelId, messageId) {
  const obj = ExplicitMediaRedactionUtils;
  const tmp2 = dependencyMap;
  const result = obj.trackMediaRedactionAction({ action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED, messageId, channelId });
  if (ExplicitMediaStore.canSubmitFpReport(messageId)) {
    const obj3 = { channelId, messageId };
    tmp4(4725).openLazy(tmp(1984)(9508, tmp2.paths), closure_4, obj3);
  } else {
    const obj4 = { title: null, body: null, confirmText: null };
    const intl = tmp(1119).intl;
    obj4.title = intl.string(tmp(1119).t["iS/eFN"]);
    const intl2 = tmp(1119).intl;
    obj4.body = intl2.string(tmp(1119).t.YrjcgR);
    const intl3 = tmp(1119).intl;
    obj4.confirmText = intl3.string(tmp(1119).t.BddRzS);
    tmp4(5111).show(obj4);
    const tmp4Result3 = tmp4(5111);
    const result1 = tmp4(9507).disableFalsePositiveButton(channelId, messageId);
  }
  const obj2 = { action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED, messageId, channelId };
};
