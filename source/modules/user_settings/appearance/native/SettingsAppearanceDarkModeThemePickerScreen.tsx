// Module ID: 14541
// Function ID: 14542
// Name: SettingsAppearanceDarkModeThemePickerScreen
// Dependencies: [19, 1305, 21, 14500, 1236, 2]
// Exports: default

// Module 14541 (SettingsAppearanceDarkModeThemePickerScreen)
import "noop";
import { SystemTheme } from "SystemThemeState";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/appearance/native/SettingsAppearanceDarkModeThemePickerScreen.tsx");

export default function SettingsAppearanceDarkModeThemePickerScreen() {
  const obj = { mode: SystemTheme.DARK, themeSelector: "nitro", headerTitle: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl.string(require(1236) /* getSystemLocale */.t["EgvHH/"]);
  return jsx(importDefault(14500), { mode: SystemTheme.DARK, themeSelector: "nitro", headerTitle: null });
};
