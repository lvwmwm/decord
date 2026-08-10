// Module ID: 14543
// Function ID: 14544
// Name: SettingsAppearanceDarkModeThemePickerScreen
// Dependencies: [19, 1305, 21, 14502, 1236, 2]
// Exports: default

// Module 14543 (SettingsAppearanceDarkModeThemePickerScreen)
import "noop";
import { SystemTheme } from "SystemThemeState";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/appearance/native/SettingsAppearanceDarkModeThemePickerScreen.tsx");

export default function SettingsAppearanceDarkModeThemePickerScreen() {
  const obj = { mode: SystemTheme.DARK, themeSelector: "nitro", headerTitle: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl.string(require(1236) /* getSystemLocale */.t["EgvHH/"]);
  return jsx(importDefault(14502), { mode: SystemTheme.DARK, themeSelector: "nitro", headerTitle: null });
};
