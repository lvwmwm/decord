// Module ID: 11629
// Function ID: 11630
// Name: ChatGestureSettings
// Dependencies: [8270, 1078, 1190, 1119, 1245, 2023, 558, 11630, 2]
// Exports: getSwipeToReplySettingValue

// Module 11629 (ChatGestureSettings)
import util from "util" /* 1119 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1190 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1245 */;
import UserSettings from "UserSettings" /* 2023 */;
import SettingsConstants from "SettingsConstants" /* 8270 */;
import Constants from "Constants" /* 1078 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11630 */;
import size from "module_2" /* 2 */;

({ AnalyticEvents: c3, AnalyticsSections: closure_4 } = Constants);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const SwipeRightToLeftModeSetting = UserSettings.SwipeRightToLeftModeSetting;
  let SWIPE_RIGHT_TO_LEFT_REPLY = SwipeRightToLeftModeSetting.useSetting();
  if (SWIPE_RIGHT_TO_LEFT_REPLY === preloaded_user_settings.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_UNSET) {
    SWIPE_RIGHT_TO_LEFT_REPLY = preloaded_user_settings.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_REPLY;
  }
  return SWIPE_RIGHT_TO_LEFT_REPLY;
}) : (() => {
  const SwipeRightToLeftModeSetting = UserSettings.SwipeRightToLeftModeSetting;
  let SWIPE_RIGHT_TO_LEFT_REPLY = SwipeRightToLeftModeSetting.useSetting();
  if (SWIPE_RIGHT_TO_LEFT_REPLY === preloaded_user_settings.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_UNSET) {
    SWIPE_RIGHT_TO_LEFT_REPLY = preloaded_user_settings.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_REPLY;
  }
  return SWIPE_RIGHT_TO_LEFT_REPLY;
});
const radio = SettingBuilders.createRadio({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["Jf0C/c"]);
  },
  useSearchTerms() {
    const intl = util.intl;
    const items = [intl.string(util.t["9BGJ1m"])];
    return items;
  },
  parent: SettingsConstants.MobileUserSettings.SWIPE_RIGHT_TO_LEFT,
  useValue: tmp3,
  onValueChange: function onSwipeToReplyValueChange(arg0) {
    const NumberResult = Number(arg0);
    const obj2 = { enabled: NumberResult === preloaded_user_settings.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_REPLY, location: { section: constants2.SETTINGS_TEXT_AND_IMAGES } };
    AnalyticsUtilsDefault.track(constants.USER_SETTINGS_SWIPE_TO_REPLY_TOGGLE, obj2);
    const SwipeRightToLeftModeSetting = UserSettings.SwipeRightToLeftModeSetting;
    SwipeRightToLeftModeSetting.updateSetting(NumberResult);
  },
  useOptions: function useHasSwipeToReplySettingOptions() {
    const obj = { value: preloaded_user_settings.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS, label: null, subLabel: null };
    const intl = util.intl;
    obj.label = intl.string(util.t["6eXLcJ"]);
    const intl2 = util.intl;
    obj.subLabel = intl2.string(util.t.ohhhDK);
    const items = [obj, ];
    const obj2 = { value: preloaded_user_settings.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_REPLY, label: null };
    const intl3 = util.intl;
    obj2.label = intl3.string(util.t["3tYNDS"]);
    items[1] = obj2;
    return items;
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ChatGestureSettings.tsx");

export default radio;
export const useSwipeToReplySettingValue = tmp3;
export const getSwipeToReplySettingValue = function getSwipeToReplySettingValue() {
  const SwipeRightToLeftModeSetting = UserSettings.SwipeRightToLeftModeSetting;
  let SWIPE_RIGHT_TO_LEFT_REPLY = SwipeRightToLeftModeSetting.getSetting();
  if (SWIPE_RIGHT_TO_LEFT_REPLY === preloaded_user_settings.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_UNSET) {
    SWIPE_RIGHT_TO_LEFT_REPLY = preloaded_user_settings.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_REPLY;
  }
  return SWIPE_RIGHT_TO_LEFT_REPLY;
};
