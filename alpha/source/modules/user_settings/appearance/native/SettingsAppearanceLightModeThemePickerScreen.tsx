// Module ID: 14826
// Function ID: 14827
// Name: SettingsAppearanceLightModeThemePickerScreen
// Dependencies: [19, 1185, 21, 14787, 1115, 2]
// Exports: default

// Module 14826 (SettingsAppearanceLightModeThemePickerScreen)
import util from "util" /* 1115 */;
import SettingsAppearanceThemePickerScreenDefault from "SettingsAppearanceThemePickerScreen" /* 14787 */;
import noop from "module_19" /* 19 */;

require = fn;
const SystemTheme = fn(1185).SystemTheme;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/appearance/native/SettingsAppearanceLightModeThemePickerScreen.tsx");

export default function SettingsAppearanceLightModeThemePickerScreen() {
  const obj = { mode: SystemTheme.LIGHT, themeSelector: "nitro", headerTitle: null };
  const intl = util.intl;
  obj.headerTitle = intl.string(util.t.NoFvjZ);
  return jsx(SettingsAppearanceThemePickerScreenDefault, { mode: SystemTheme.LIGHT, themeSelector: "nitro", headerTitle: null });
};
