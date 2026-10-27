// Module ID: 16873
// Function ID: 16874
// Name: SwipeRightToLeftSetting
// Dependencies: [8331, 1084, 558, 576, 4800, 1208, 1125, 11212, 16874, 2]

// Module 16873 (SwipeRightToLeftSetting)
import react from "react" /* 576 */;
import Constants from "Constants" /* 1084 */;
import intl3 from "intl" /* 1125 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1208 */;
import UserSettings from "UserSettings" /* 4800 */;
import SettingsConstants from "SettingsConstants" /* 8331 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11212 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSwipeRightToLeftSettingTrailing() {
  let tmp8;
  const obj = react;
  const cResult = obj.c(2);
  const SwipeRightToLeftModeSetting = UserSettings.SwipeRightToLeftModeSetting;
  const setting = SwipeRightToLeftModeSetting.useSetting();
  if (setting === preloaded_user_settings.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_REPLY) {
    let first;
    const _Symbol2 = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = tmp(1125).intl;
      const stringResult = intl2.string(intl3.t["3tYNDS"]);
      cResult[0] = stringResult;
      first = stringResult;
    } else {
      first = cResult[0];
    }
    tmp8 = first;
  } else {
    tmp8 = null;
    if (setting === preloaded_user_settings.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS) {
      let tmp6;
      const _Symbol = Symbol;
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1125).intl;
        const stringResult1 = intl.string(intl3.t["6eXLcJ"]);
        cResult[1] = stringResult1;
        tmp6 = stringResult1;
      } else {
        tmp6 = cResult[1];
      }
      tmp8 = tmp6;
    }
  }
  return tmp8;
}) : (function useSwipeRightToLeftSettingTrailing() {
  let stringResult;
  const SwipeRightToLeftModeSetting = UserSettings.SwipeRightToLeftModeSetting;
  const setting = SwipeRightToLeftModeSetting.useSetting();
  if (setting === preloaded_user_settings.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_REPLY) {
    const intl2 = tmp(1125).intl;
    stringResult = intl2.string(tmp(1125).t["3tYNDS"]);
  } else {
    stringResult = null;
    if (setting === preloaded_user_settings.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS) {
      const intl = tmp(1125).intl;
      stringResult = intl.string(tmp(1125).t["6eXLcJ"]);
    }
  }
  return stringResult;
});
let obj = {
  useTitle() {
    const intl = intl3.intl;
    return intl.string(intl3.t["D/Dkcd"]);
  },
  parent: MobileUserSettings.CHAT,
  useTrailing: tmp2,
  screen: {
    route: UserSettingsSections.SWIPE_RIGHT_TO_LEFT,
    getComponent() {
      return require("SwipeRightToLeftScreen").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SwipeRightToLeftSetting.tsx");

export default route;
