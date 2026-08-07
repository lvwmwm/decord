// Module ID: 11251
// Function ID: 11252
// Name: handleSenderFalsePositiveFlow
// Dependencies: [5850, 7000, 6999, 4641, 1236, 11252, 4270, 11253, 1988, 2]
// Exports: handleSenderFalsePositiveFlow

// Module 11251 (handleSenderFalsePositiveFlow)
import getFpMessageInfo from "getFpMessageInfo";
import { EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_ACTION_SHEET_KEY as closure_4 } from "USER_SETTING_ACTION_SHEET_KEY";

const require = arg1;
let result = require("redactionSettingToRenderedString").fileFinishedImporting("modules/explicit_media_redaction/ExplicitMediaActionCreators.native.tsx");

export const handleSenderFalsePositiveFlow = function handleSenderFalsePositiveFlow(channelId, closure_1) {
  let obj = require(6999) /* redactionSettingToRenderedString */;
  obj = { action: require(6999) /* redactionSettingToRenderedString */.TrackMediaRedactionActionType.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED, messageId: closure_1, channelId };
  const result = obj.trackMediaRedactionAction(obj);
  if (getFpMessageInfo.canSubmitFpReport(closure_1)) {
    let tmp4Result = tmp4(4270);
    obj = { channelId: null, messageId: null };
    obj[0] = channelId;
    obj[1] = closure_1;
    tmp4Result.openLazy(tmp(1988)(11253, tmp2.paths), closure_4, obj);
  } else {
    tmp4Result = tmp4(4641);
    const obj1 = { title: null, body: null, confirmText: null };
    const intl = tmp(1236).intl;
    obj1[0] = intl.string(tmp(1236).t["iS/eFN"]);
    const intl2 = tmp(1236).intl;
    obj1[1] = intl2.string(tmp(1236).t.YrjcgR);
    const intl3 = tmp(1236).intl;
    obj1[2] = intl3.string(tmp(1236).t.BddRzS);
    tmp4Result.show(obj1);
    const result1 = tmp4(11252).disableFalsePositiveButton(channelId, closure_1);
  }
  tmp2 = dependencyMap;
};
