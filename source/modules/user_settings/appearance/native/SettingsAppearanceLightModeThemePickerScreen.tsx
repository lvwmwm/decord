// Module ID: 14453
// Function ID: 14454
// Name: SettingsAppearanceLightModeThemePickerScreen
// Dependencies: [19, 1305, 21, 14414, 1236, 2]
// Exports: default

// Module 14453 (SettingsAppearanceLightModeThemePickerScreen)
import "noop";
import { SystemTheme } from "SystemThemeState";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/appearance/native/SettingsAppearanceLightModeThemePickerScreen.tsx");

export default function SettingsAppearanceLightModeThemePickerScreen() {
  const obj = { mode: SystemTheme.LIGHT, themeSelector: "nitro", headerTitle: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl.string(require(1236) /* getSystemLocale */.t.NoFvjZ);
  return jsx(importDefault(14414), { mode: SystemTheme.LIGHT, themeSelector: "nitro", headerTitle: null });
};
