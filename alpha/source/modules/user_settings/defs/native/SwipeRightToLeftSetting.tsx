// Module ID: 15232
// Function ID: 15233
// Name: SwipeRightToLeftSetting
// Dependencies: [7612, 1074, 2021, 1186, 1115, 11211, 15233, 2]

// Module 15232 (SwipeRightToLeftSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1186 */;
import UserSettings from "UserSettings" /* 2021 */;
import SettingsConstants from "SettingsConstants" /* 7612 */;
import SettingBuilders from "SettingBuilders" /* 11211 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["D/Dkcd"]);
  },
  parent: SettingsConstants.MobileUserSettings.CHAT,
  useTrailing: function useSwipeRightToLeftSettingTrailing() {
    const SwipeRightToLeftModeSetting = UserSettings.SwipeRightToLeftModeSetting;
    const setting = SwipeRightToLeftModeSetting.useSetting();
    if (setting === preloaded_user_settings.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_REPLY) {
      const intl2 = tmp(1115).intl;
      let stringResult = intl2.string(tmp(1115).t["3tYNDS"]);
    } else {
      stringResult = null;
      if (setting === tmp(1186).SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS) {
        const intl = tmp(1115).intl;
        stringResult = intl.string(tmp(1115).t["6eXLcJ"]);
      }
    }
    return stringResult;
  },
  screen: {
    route: Constants.UserSettingsSections.SWIPE_RIGHT_TO_LEFT,
    getComponent() {
      return require("SwipeRightToLeftScreen").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SwipeRightToLeftSetting.tsx");

export default route;
