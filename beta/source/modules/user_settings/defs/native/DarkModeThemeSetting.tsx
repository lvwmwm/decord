// Module ID: 16665
// Function ID: 16666
// Name: DarkModeThemeSetting
// Dependencies: [1207, 1210, 8332, 1087, 558, 576, 504, 11208, 1128, 16663, 16666, 2]

// Module 16665 (DarkModeThemeSetting)
import react from "react" /* 576 */;
import Constants from "Constants" /* 1087 */;
import intl2 from "intl" /* 1128 */;
import ThemeConstants from "ThemeConstants" /* 1210 */;
import SettingsConstants from "SettingsConstants" /* 8332 */;
import useSyncedModeThemeName from "useSyncedModeThemeName" /* 16663 */;
import ThemeStore from "ThemeStore" /* 1207 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11208 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let tmp;
const get_initialized = tmp(504);
const SystemTheme = ThemeConstants.SystemTheme;
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSyncedModePickerVisible() {
  let sameAsDeviceThemeEnabled;
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ThemeStore];
    const fn = function n() {
      return sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStores(tmp4, tmp5);
}) : (function useSyncedModePickerVisible() {
  let sameAsDeviceThemeEnabled;
  const items = [ThemeStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled());
});
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["EgvHH/"]);
  },
  parent: MobileUserSettings.APPEARANCE,
  usePredicate: tmp2,
  useTrailing() {
    const obj = useSyncedModeThemeName;
    return obj.useSyncedModeThemeName(SystemTheme.DARK);
  },
  screen: {
    route: UserSettingsSections.APPEARANCE_DARK_MODE_THEME_PICKER,
    getComponent() {
      return require("SettingsAppearanceDarkModeThemePickerScreen").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DarkModeThemeSetting.tsx");

export default route;
