// Module ID: 8143
// Function ID: 64417
// Name: handleSenderFalsePositiveFlow
// Dependencies: [5671, 6836, 6835, 4471, 1212, 8144, 4098, 8145, 1934, 2]
// Exports: handleSenderFalsePositiveFlow

// Module 8143 (handleSenderFalsePositiveFlow)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_ACTION_SHEET_KEY as closure_4 } from "USER_SETTING_ACTION_SHEET_KEY";

const require = arg1;
let result = require("timeoutAttachmentsAndEmbedsForMessage").fileFinishedImporting("modules/explicit_media_redaction/ExplicitMediaActionCreators.native.tsx");

export const handleSenderFalsePositiveFlow = function handleSenderFalsePositiveFlow(channelId, closure_1) {
  let obj = require(6835) /* timeoutAttachmentsAndEmbedsForMessage */;
  obj = { action: require(6835) /* timeoutAttachmentsAndEmbedsForMessage */.TrackMediaRedactionActionType.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED, messageId: closure_1, channelId };
  const result = obj.trackMediaRedactionAction(obj);
  if (_isNativeReflectConstruct.canSubmitFpReport(closure_1)) {
    let tmp2Result = tmp2(4098);
    obj = { channelId, messageId: closure_1 };
    tmp2Result.openLazy(require(1934) /* maybeLoadBundle */(8145, tmp3.paths), closure_4, obj);
  } else {
    tmp2Result = tmp2(4471);
    const obj1 = {};
    const intl = require(1212) /* getSystemLocale */.intl;
    obj1.title = intl.string(require(1212) /* getSystemLocale */.t["iS/eFN"]);
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj1.body = intl2.string(require(1212) /* getSystemLocale */.t.YrjcgR);
    const intl3 = require(1212) /* getSystemLocale */.intl;
    obj1.confirmText = intl3.string(require(1212) /* getSystemLocale */.t.BddRzS);
    tmp2Result.show(obj1);
    const result1 = tmp2(8144).disableFalsePositiveButton(channelId, closure_1);
  }
  tmp3 = dependencyMap;
};
