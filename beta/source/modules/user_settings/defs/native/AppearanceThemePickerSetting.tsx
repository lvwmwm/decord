// Module ID: 15536
// Function ID: 15537
// Name: AppearanceThemePickerSetting
// Dependencies: [1186, 8270, 1078, 558, 568, 504, 11630, 1119, 15530, 15537, 2]

// Module 15536 (AppearanceThemePickerSetting)
import initialize from "initialize" /* 504 */;
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import ThemeStore from "ThemeStore" /* 1186 */;

require = fn;
const ReactCompilerGating = fn(558);
const SettingBuilders = fn(11630);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ThemeStore];
    const fn = function s() {
      return sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return !initialize.useStateFromStores(tmp4, tmp5);
}) : (() => {
  const items = [ThemeStore];
  return !initialize.useStateFromStores(items, () => sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled());
});
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.Ksh3ik);
  },
  parent: fn(8270).MobileUserSettings.APPEARANCE,
  usePredicate: ReactCompilerGating.isReactCompilerEnabled() ? (() => {
    const cResult = c.c(2);
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [ThemeStore];
      const fn = function s() {
        return sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled();
      };
      cResult[0] = items;
      cResult[1] = fn;
      tmp4 = items;
      tmp5 = fn;
    } else {
      [tmp4, tmp5] = cResult;
    }
    return !initialize.useStateFromStores(tmp4, tmp5);
  }) : (() => {
    const items = [ThemeStore];
    return !initialize.useStateFromStores(items, () => sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled());
  }),
  useTrailing: fn(15530).useAppearanceSettingTrailing,
  screen: {
    route: fn(1078).UserSettingsSections.APPEARANCE_THEME_PICKER,
    getComponent() {
      return require("SettingsAppearanceThemePickerScreen").default;
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AppearanceThemePickerSetting.tsx");

export default route;
