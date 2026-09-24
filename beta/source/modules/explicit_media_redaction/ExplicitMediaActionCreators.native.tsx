// Module ID: 9538
// Function ID: 9539
// Name: ExplicitMediaActionCreators
// Dependencies: [7569, 7880, 7879, 5143, 1119, 9539, 4757, 9540, 1984, 2]
// Exports: handleSenderFalsePositiveFlow

// Module 9538 (ExplicitMediaActionCreators)
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 7879 */;
import ExplicitMediaStore from "ExplicitMediaStore" /* 7569 */;

require = fn;
let closure_4 = fn(7880).EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_ACTION_SHEET_KEY;
const size = fn(2);
let result = size.fileFinishedImporting("modules/explicit_media_redaction/ExplicitMediaActionCreators.native.tsx");

export const handleSenderFalsePositiveFlow = function handleSenderFalsePositiveFlow(channelId, messageId) {
  const obj = ExplicitMediaRedactionUtils;
  const tmp2 = dependencyMap;
  const result = obj.trackMediaRedactionAction({ action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED, messageId, channelId });
  if (ExplicitMediaStore.canSubmitFpReport(messageId)) {
    const obj3 = { channelId, messageId };
    tmp4(4757).openLazy(tmp(1984)(9540, tmp2.paths), closure_4, obj3);
  } else {
    const obj4 = { title: null, body: null, confirmText: null };
    const intl = tmp(1119).intl;
    obj4.title = intl.string(tmp(1119).t["iS/eFN"]);
    const intl2 = tmp(1119).intl;
    obj4.body = intl2.string(tmp(1119).t.YrjcgR);
    const intl3 = tmp(1119).intl;
    obj4.confirmText = intl3.string(tmp(1119).t.BddRzS);
    tmp4(5143).show(obj4);
    const tmp4Result3 = tmp4(5143);
    const result1 = tmp4(9539).disableFalsePositiveButton(channelId, messageId);
  }
  const obj2 = { action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED, messageId, channelId };
};
