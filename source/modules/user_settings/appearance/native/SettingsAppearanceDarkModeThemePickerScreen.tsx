// Module ID: 14721
// Function ID: 14722
// Name: SettingsAppearanceDarkModeThemePickerScreen
// Dependencies: [19, 1305, 21, 14680, 1236, 2]
// Exports: default

// Module 14721 (SettingsAppearanceDarkModeThemePickerScreen)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import ThemeTypesDefault from "ThemeTypes" /* 14680 */;
import { SystemTheme } from "SystemThemeState" /* 1305 */;
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
