// Module ID: 15560
// Function ID: 15561
// Name: SwipeRightToLeftSetting
// Dependencies: [8079, 1074, 1935, 1185, 1114, 11605, 15561, 2]

// Module 15560 (SwipeRightToLeftSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1185 */;
import UserSettings from "UserSettings" /* 1935 */;
import SettingsConstants from "SettingsConstants" /* 8079 */;
import SettingBuilders from "SettingBuilders" /* 11605 */;
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
      const intl2 = tmp(1114).intl;
      let stringResult = intl2.string(tmp(1114).t["3tYNDS"]);
    } else {
      stringResult = null;
      if (setting === tmp(1185).SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS) {
        const intl = tmp(1114).intl;
        stringResult = intl.string(tmp(1114).t["6eXLcJ"]);
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
