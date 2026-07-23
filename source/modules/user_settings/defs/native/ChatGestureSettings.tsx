// Module ID: 10094
// Function ID: 78177
// Name: useSwipeToReplySettingValue
// Dependencies: [7662, 653, 1282, 1212, 675, 3803, 10095, 2]
// Exports: getSwipeToReplySettingValue, useSwipeToReplySettingValue

// Module 10094 (useSwipeToReplySettingValue)
import ME from "ME";
import createToggle from "createToggle";

let closure_3;
let closure_4;
function useSwipeToReplySettingValue() {
  const SwipeRightToLeftModeSetting = require(3803) /* explicitContentFromProto */.SwipeRightToLeftModeSetting;
  let SWIPE_RIGHT_TO_LEFT_REPLY = SwipeRightToLeftModeSetting.useSetting();
  if (SWIPE_RIGHT_TO_LEFT_REPLY === require(1282) /* _callSuper */.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_UNSET) {
    SWIPE_RIGHT_TO_LEFT_REPLY = require(1282) /* _callSuper */.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_REPLY;
  }
  return SWIPE_RIGHT_TO_LEFT_REPLY;
}
({ AnalyticEvents: closure_3, AnalyticsSections: closure_4 } = ME);
const radio = createToggle.createRadio({
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["Jf0C/c"]);
  },
  useSearchTerms() {
    const intl = require(1212) /* getSystemLocale */.intl;
    const items = [intl.string(require(1212) /* getSystemLocale */.t["9BGJ1m"])];
    return items;
  },
  parent: require("MobileSetting").MobileSetting.SWIPE_RIGHT_TO_LEFT,
  useValue: useSwipeToReplySettingValue,
  onValueChange: function onSwipeToReplyValueChange(arg0) {
    const NumberResult = Number(arg0);
    let obj = importDefault(675);
    obj = { enabled: NumberResult === require(1282) /* _callSuper */.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_REPLY, location: obj };
    obj = { section: constants2.SETTINGS_TEXT_AND_IMAGES };
    obj.track(constants.USER_SETTINGS_SWIPE_TO_REPLY_TOGGLE, obj);
    const SwipeRightToLeftModeSetting = require(3803) /* explicitContentFromProto */.SwipeRightToLeftModeSetting;
    SwipeRightToLeftModeSetting.updateSetting(NumberResult);
  },
  useOptions: function useHasSwipeToReplySettingOptions() {
    let obj = { value: require(1282) /* _callSuper */.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.label = intl.string(require(1212) /* getSystemLocale */.t["6eXLcJ"]);
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj.subLabel = intl2.string(require(1212) /* getSystemLocale */.t.ohhhDK);
    const items = [obj, ];
    obj = { value: require(1282) /* _callSuper */.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_REPLY };
    const intl3 = require(1212) /* getSystemLocale */.intl;
    obj.label = intl3.string(require(1212) /* getSystemLocale */.t["3tYNDS"]);
    items[1] = obj;
    return items;
  }
});
let obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["Jf0C/c"]);
  },
  useSearchTerms() {
    const intl = require(1212) /* getSystemLocale */.intl;
    const items = [intl.string(require(1212) /* getSystemLocale */.t["9BGJ1m"])];
    return items;
  },
  parent: require("MobileSetting").MobileSetting.SWIPE_RIGHT_TO_LEFT,
  useValue: useSwipeToReplySettingValue,
  onValueChange: function onSwipeToReplyValueChange(arg0) {
    const NumberResult = Number(arg0);
    let obj = importDefault(675);
    obj = { enabled: NumberResult === require(1282) /* _callSuper */.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_REPLY, location: obj };
    obj = { section: constants2.SETTINGS_TEXT_AND_IMAGES };
    obj.track(constants.USER_SETTINGS_SWIPE_TO_REPLY_TOGGLE, obj);
    const SwipeRightToLeftModeSetting = require(3803) /* explicitContentFromProto */.SwipeRightToLeftModeSetting;
    SwipeRightToLeftModeSetting.updateSetting(NumberResult);
  },
  useOptions: function useHasSwipeToReplySettingOptions() {
    let obj = { value: require(1282) /* _callSuper */.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.label = intl.string(require(1212) /* getSystemLocale */.t["6eXLcJ"]);
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj.subLabel = intl2.string(require(1212) /* getSystemLocale */.t.ohhhDK);
    const items = [obj, ];
    obj = { value: require(1282) /* _callSuper */.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_REPLY };
    const intl3 = require(1212) /* getSystemLocale */.intl;
    obj.label = intl3.string(require(1212) /* getSystemLocale */.t["3tYNDS"]);
    items[1] = obj;
    return items;
  }
};
const result = require("_callSuper").fileFinishedImporting("modules/user_settings/defs/native/ChatGestureSettings.tsx");

export default radio;
export { useSwipeToReplySettingValue };
export const getSwipeToReplySettingValue = function getSwipeToReplySettingValue() {
  const SwipeRightToLeftModeSetting = require(3803) /* explicitContentFromProto */.SwipeRightToLeftModeSetting;
  let SWIPE_RIGHT_TO_LEFT_REPLY = SwipeRightToLeftModeSetting.getSetting();
  if (SWIPE_RIGHT_TO_LEFT_REPLY === require(1282) /* _callSuper */.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_UNSET) {
    SWIPE_RIGHT_TO_LEFT_REPLY = require(1282) /* _callSuper */.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_REPLY;
  }
  return SWIPE_RIGHT_TO_LEFT_REPLY;
};
