// Module ID: 15393
// Function ID: 15394
// Name: SettingsAppearanceDarkModeThemePickerScreen
// Dependencies: [19, 1184, 21, 15352, 1114, 2]
// Exports: default

// Module 15393 (SettingsAppearanceDarkModeThemePickerScreen)
import util from "util" /* 1114 */;
import SettingsAppearanceThemePickerScreenDefault from "SettingsAppearanceThemePickerScreen" /* 15352 */;
import noop from "module_19" /* 19 */;

require = fn;
const SystemTheme = fn(1184).SystemTheme;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/appearance/native/SettingsAppearanceDarkModeThemePickerScreen.tsx");

export default function SettingsAppearanceDarkModeThemePickerScreen() {
  const obj = { mode: SystemTheme.DARK, themeSelector: "nitro", headerTitle: null };
  const intl = util.intl;
  obj.headerTitle = intl.string(util.t["EgvHH/"]);
  return jsx(SettingsAppearanceThemePickerScreenDefault, { mode: SystemTheme.DARK, themeSelector: "nitro", headerTitle: null });
};
