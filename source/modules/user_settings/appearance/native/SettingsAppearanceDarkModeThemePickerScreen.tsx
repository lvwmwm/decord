// Module ID: 15307
// Function ID: 15308
// Name: SettingsAppearanceDarkModeThemePickerScreen
// Dependencies: [19, 1186, 21, 15266, 1114, 2]
// Exports: default

// Module 15307 (SettingsAppearanceDarkModeThemePickerScreen)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import ThemeTypesDefault from "ThemeTypes" /* 15266 */;
import { SystemTheme } from "SystemThemeState" /* 1186 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/user_settings/appearance/native/SettingsAppearanceDarkModeThemePickerScreen.tsx");

export default function SettingsAppearanceDarkModeThemePickerScreen() {
  const obj = { mode: SystemTheme.DARK, themeSelector: "nitro", headerTitle: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t["EgvHH/"]);
  return jsx(ThemeTypesDefault, { mode: SystemTheme.DARK, themeSelector: "nitro", headerTitle: null });
};
