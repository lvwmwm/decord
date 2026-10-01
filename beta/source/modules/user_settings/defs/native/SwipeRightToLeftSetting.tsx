// Module ID: 15024
// Function ID: 15025
// Name: SwipeRightToLeftSetting
// Dependencies: [7417, 1074, 2021, 1186, 1115, 11006, 15025, 2]

// Module 15024 (SwipeRightToLeftSetting)
import Constants from "Constants" /* 1074 */;
import intl3 from "intl" /* 1115 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1186 */;
import UserSettings from "UserSettings" /* 2021 */;
import SettingsConstants from "SettingsConstants" /* 7417 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl3.intl;
    return intl.string(intl3.t["D/Dkcd"]);
  },
  parent: MobileUserSettings.CHAT,
  useTrailing: function useSwipeRightToLeftSettingTrailing() {
    let stringResult;
    const SwipeRightToLeftModeSetting = UserSettings.SwipeRightToLeftModeSetting;
    const setting = SwipeRightToLeftModeSetting.useSetting();
    if (setting === preloaded_user_settings.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_REPLY) {
      const intl2 = tmp(1115).intl;
      stringResult = intl2.string(tmp(1115).t["3tYNDS"]);
    } else {
      stringResult = null;
      if (setting === preloaded_user_settings.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS) {
        const intl = tmp(1115).intl;
        stringResult = intl.string(tmp(1115).t["6eXLcJ"]);
      }
    }
    return stringResult;
  },
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
