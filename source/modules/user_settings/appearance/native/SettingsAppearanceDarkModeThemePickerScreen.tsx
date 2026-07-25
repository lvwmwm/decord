// Module ID: 14257
// Function ID: 109529
// Name: SettingsAppearanceDarkModeThemePickerScreen
// Dependencies: [31, 1281, 33, 14216, 1212, 2]
// Exports: default

// Module 14257 (SettingsAppearanceDarkModeThemePickerScreen)
import "result";
import { SystemTheme } from "SystemThemeState";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/appearance/native/SettingsAppearanceDarkModeThemePickerScreen.tsx");

export default function SettingsAppearanceDarkModeThemePickerScreen() {
  const obj = { mode: SystemTheme.DARK, themeSelector: "nitro" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.headerTitle = intl.string(require(1212) /* getSystemLocale */.t["EgvHH/"]);
  return jsx(importDefault(14216), { mode: SystemTheme.DARK, themeSelector: "nitro" });
};
