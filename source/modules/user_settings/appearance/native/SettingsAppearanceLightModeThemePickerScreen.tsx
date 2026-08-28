// Module ID: 14834
// Function ID: 14835
// Name: SettingsAppearanceLightModeThemePickerScreen
// Dependencies: [19, 1305, 21, 14795, 1236, 2]
// Exports: default

// Module 14834 (SettingsAppearanceLightModeThemePickerScreen)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import ThemeTypesDefault from "ThemeTypes" /* 14795 */;
import { SystemTheme } from "SystemThemeState" /* 1305 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/user_settings/appearance/native/SettingsAppearanceLightModeThemePickerScreen.tsx");

export default function SettingsAppearanceLightModeThemePickerScreen() {
  const obj = { mode: SystemTheme.LIGHT, themeSelector: "nitro", headerTitle: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t.NoFvjZ);
  return jsx(ThemeTypesDefault, { mode: SystemTheme.LIGHT, themeSelector: "nitro", headerTitle: null });
};
