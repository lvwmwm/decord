// Module ID: 14244
// Function ID: 109394
// Name: SettingsAppearanceLightModeThemePickerScreen
// Dependencies: [31, 1281, 33, 14205, 1212, 2]
// Exports: default

// Module 14244 (SettingsAppearanceLightModeThemePickerScreen)
import "result";
import { SystemTheme } from "SystemThemeState";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/appearance/native/SettingsAppearanceLightModeThemePickerScreen.tsx");

export default function SettingsAppearanceLightModeThemePickerScreen() {
  const obj = { mode: SystemTheme.LIGHT, themeSelector: "nitro" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.headerTitle = intl.string(require(1212) /* getSystemLocale */.t.NoFvjZ);
  return jsx(importDefault(14205), { mode: SystemTheme.LIGHT, themeSelector: "nitro" });
};
