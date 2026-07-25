// Module ID: 14255
// Function ID: 109521
// Name: SettingsAppearanceLightModeThemePickerScreen
// Dependencies: [31, 1281, 33, 14216, 1212, 2]
// Exports: default

// Module 14255 (SettingsAppearanceLightModeThemePickerScreen)
import "result";
import { SystemTheme } from "SystemThemeState";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/appearance/native/SettingsAppearanceLightModeThemePickerScreen.tsx");

export default function SettingsAppearanceLightModeThemePickerScreen() {
  const obj = { mode: SystemTheme.LIGHT, themeSelector: "nitro" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.headerTitle = intl.string(require(1212) /* getSystemLocale */.t.NoFvjZ);
  return jsx(importDefault(14216), { mode: SystemTheme.LIGHT, themeSelector: "nitro" });
};
