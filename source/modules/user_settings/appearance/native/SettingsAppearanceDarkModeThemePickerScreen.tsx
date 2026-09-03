// Module ID: 15147
// Function ID: 15148
// Name: SettingsAppearanceDarkModeThemePickerScreen
// Dependencies: [19, 1304, 21, 15106, 1233, 2]
// Exports: default

// Module 15147 (SettingsAppearanceDarkModeThemePickerScreen)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import ThemeTypesDefault from "ThemeTypes" /* 15106 */;
import { SystemTheme } from "SystemThemeState" /* 1304 */;
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
