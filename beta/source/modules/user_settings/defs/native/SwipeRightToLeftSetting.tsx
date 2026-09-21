// Module ID: 15737
// Function ID: 15738
// Name: SwipeRightToLeftSetting
// Dependencies: [8238, 1078, 558, 568, 2023, 1190, 1119, 11594, 15738, 2]

// Module 15737 (SwipeRightToLeftSetting)
import c from "c" /* 568 */;
import Constants from "Constants" /* 1078 */;
import util from "util" /* 1119 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1190 */;
import UserSettings from "UserSettings" /* 2023 */;
import SettingsConstants from "SettingsConstants" /* 8238 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11594 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let stringResult = dependencyMap;
  const cResult = c.c(2);
  const SwipeRightToLeftModeSetting = UserSettings.SwipeRightToLeftModeSetting;
  const setting = SwipeRightToLeftModeSetting.useSetting();
  if (setting === preloaded_user_settings.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_REPLY) {
    const _Symbol2 = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = tmp(1119).intl;
      stringResult = intl2.string(tmp(1119).t["3tYNDS"]);
      cResult[0] = stringResult;
      let first = stringResult;
    } else {
      first = cResult[0];
    }
  } else if (setting !== tmp(1190).SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS) {
    return null;
  } else {
    const _Symbol = Symbol;
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1119).intl;
      const stringResult1 = intl.string(tmp(1119).t["6eXLcJ"]);
      cResult[1] = stringResult1;
    }
  }
}) : (() => {
  const SwipeRightToLeftModeSetting = UserSettings.SwipeRightToLeftModeSetting;
  const setting = SwipeRightToLeftModeSetting.useSetting();
  if (setting === preloaded_user_settings.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_REPLY) {
    const intl2 = tmp(1119).intl;
    let stringResult = intl2.string(tmp(1119).t["3tYNDS"]);
  } else {
    stringResult = null;
    if (setting === tmp(1190).SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS) {
      const intl = tmp(1119).intl;
      stringResult = intl.string(tmp(1119).t["6eXLcJ"]);
    }
  }
  return stringResult;
});
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["D/Dkcd"]);
  },
  parent: SettingsConstants.MobileUserSettings.CHAT,
  useTrailing: ReactCompilerGating.isReactCompilerEnabled() ? (() => {
    let stringResult = dependencyMap;
    const cResult = c.c(2);
    const SwipeRightToLeftModeSetting = UserSettings.SwipeRightToLeftModeSetting;
    const setting = SwipeRightToLeftModeSetting.useSetting();
    if (setting === preloaded_user_settings.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_REPLY) {
      const _Symbol2 = Symbol;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = tmp(1119).intl;
        stringResult = intl2.string(tmp(1119).t["3tYNDS"]);
        cResult[0] = stringResult;
        let first = stringResult;
      } else {
        first = cResult[0];
      }
    } else if (setting !== tmp(1190).SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS) {
      return null;
    } else {
      const _Symbol = Symbol;
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1119).intl;
        const stringResult1 = intl.string(tmp(1119).t["6eXLcJ"]);
        cResult[1] = stringResult1;
      }
    }
  }) : (() => {
    const SwipeRightToLeftModeSetting = UserSettings.SwipeRightToLeftModeSetting;
    const setting = SwipeRightToLeftModeSetting.useSetting();
    if (setting === preloaded_user_settings.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_REPLY) {
      const intl2 = tmp(1119).intl;
      let stringResult = intl2.string(tmp(1119).t["3tYNDS"]);
    } else {
      stringResult = null;
      if (setting === tmp(1190).SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS) {
        const intl = tmp(1119).intl;
        stringResult = intl.string(tmp(1119).t["6eXLcJ"]);
      }
    }
    return stringResult;
  }),
  screen: {
    route: Constants.UserSettingsSections.SWIPE_RIGHT_TO_LEFT,
    getComponent() {
      return require("SwipeRightToLeftScreen").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SwipeRightToLeftSetting.tsx");

export default route;
