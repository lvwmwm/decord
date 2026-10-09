// Module ID: 15512
// Function ID: 15513
// Name: SameAsDeviceThemeSetting
// Dependencies: [1205, 7974, 558, 576, 504, 15369, 10629, 1126, 2]

// Module 15512 (SameAsDeviceThemeSetting)
import react from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import SettingsConstants from "SettingsConstants" /* 7974 */;
import UserSettingsAppearanceThemeUtils from "UserSettingsAppearanceThemeUtils" /* 15369 */;
import ThemeStore from "ThemeStore" /* 1205 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 10629 */;
import size from "module_2" /* 2 */;

let tmp;
const get_initialized = tmp(504);
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSameAsDeviceThemeValue() {
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
}) : (function useSameAsDeviceThemeValue() {
  let sameAsDeviceThemeEnabled;
  const items = [ThemeStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled());
});
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.c445ix);
  },
  parent: MobileUserSettings.APPEARANCE,
  useValue: tmp2,
  onValueChange: function onSameAsDeviceThemeValueChange(arg0) {
    const obj = UserSettingsAppearanceThemeUtils;
    const tmp = arg0;
    if (tmp) {
      const result = obj.enableSameAsDeviceTheme();
    } else {
      const result1 = obj.disableSameAsDeviceTheme();
    }
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(intl2.t["+tBsvs"]);
  }
};
const toggle = SettingBuilders.createToggle(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/SameAsDeviceThemeSetting.tsx");

export default toggle;
