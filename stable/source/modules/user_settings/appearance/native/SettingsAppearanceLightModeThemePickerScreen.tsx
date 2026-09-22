// Module ID: 15391
// Function ID: 15392
// Name: SettingsAppearanceLightModeThemePickerScreen
// Dependencies: [19, 1184, 21, 15352, 1114, 2]
// Exports: default

// Module 15391 (SettingsAppearanceLightModeThemePickerScreen)
import util from "util" /* 1114 */;
import SettingsAppearanceThemePickerScreenDefault from "SettingsAppearanceThemePickerScreen" /* 15352 */;
import noop from "module_19" /* 19 */;

require = fn;
const SystemTheme = fn(1184).SystemTheme;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/appearance/native/SettingsAppearanceLightModeThemePickerScreen.tsx");

export default function SettingsAppearanceLightModeThemePickerScreen() {
  const obj = { mode: SystemTheme.LIGHT, themeSelector: "nitro", headerTitle: null };
  const intl = util.intl;
  obj.headerTitle = intl.string(util.t.NoFvjZ);
  return jsx(SettingsAppearanceThemePickerScreenDefault, { mode: SystemTheme.LIGHT, themeSelector: "nitro", headerTitle: null });
};
