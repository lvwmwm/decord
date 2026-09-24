// Module ID: 15658
// Function ID: 15659
// Name: SettingsAppearanceDarkModeThemePickerScreen
// Dependencies: [19, 1185, 21, 15617, 1115, 2]
// Exports: default

// Module 15658 (SettingsAppearanceDarkModeThemePickerScreen)
import util from "util" /* 1115 */;
import SettingsAppearanceThemePickerScreenDefault from "SettingsAppearanceThemePickerScreen" /* 15617 */;
import noop from "module_19" /* 19 */;

require = fn;
const SystemTheme = fn(1185).SystemTheme;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/appearance/native/SettingsAppearanceDarkModeThemePickerScreen.tsx");

export default function SettingsAppearanceDarkModeThemePickerScreen() {
  const obj = { mode: SystemTheme.DARK, themeSelector: "nitro", headerTitle: null };
  const intl = util.intl;
  obj.headerTitle = intl.string(util.t["EgvHH/"]);
  return jsx(SettingsAppearanceThemePickerScreenDefault, { mode: SystemTheme.DARK, themeSelector: "nitro", headerTitle: null });
};
