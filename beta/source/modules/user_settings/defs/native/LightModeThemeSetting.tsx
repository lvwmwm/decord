// Module ID: 14838
// Function ID: 14839
// Name: LightModeThemeSetting
// Dependencies: [1194, 1197, 7421, 1086, 558, 576, 504, 10874, 1127, 14839, 14840, 2]

// Module 14838 (LightModeThemeSetting)
import react from "react" /* 576 */;
import Constants from "Constants" /* 1086 */;
import intl2 from "intl" /* 1127 */;
import ThemeConstants from "ThemeConstants" /* 1197 */;
import SettingsConstants from "SettingsConstants" /* 7421 */;
import useSyncedModeThemeName from "useSyncedModeThemeName" /* 14839 */;
import ThemeStore from "ThemeStore" /* 1194 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 10874 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let tmp;
const get_initialized = tmp(504);
const SystemTheme = ThemeConstants.SystemTheme;
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
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
}) : (() => {
  let sameAsDeviceThemeEnabled;
  const items = [ThemeStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled());
});
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.NoFvjZ);
  },
  parent: MobileUserSettings.APPEARANCE,
  usePredicate: tmp2,
  useTrailing() {
    const obj = useSyncedModeThemeName;
    return obj.useSyncedModeThemeName(SystemTheme.LIGHT);
  },
  screen: {
    route: UserSettingsSections.APPEARANCE_LIGHT_MODE_THEME_PICKER,
    getComponent() {
      return require("SettingsAppearanceLightModeThemePickerScreen").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/LightModeThemeSetting.tsx");

export default route;
