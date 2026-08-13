// Module ID: 14606
// Function ID: 14607
// Name: SettingsAppearanceLightModeThemePickerScreen
// Dependencies: [19, 1305, 21, 14567, 1236, 2]
// Exports: default

// Module 14606 (SettingsAppearanceLightModeThemePickerScreen)
import "noop";
import { SystemTheme } from "SystemThemeState";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/appearance/native/SettingsAppearanceLightModeThemePickerScreen.tsx");

export default function SettingsAppearanceLightModeThemePickerScreen() {
  const obj = { mode: SystemTheme.LIGHT, themeSelector: "nitro", headerTitle: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl.string(require(1236) /* getSystemLocale */.t.NoFvjZ);
  return jsx(importDefault(14567), { mode: SystemTheme.LIGHT, themeSelector: "nitro", headerTitle: null });
};
