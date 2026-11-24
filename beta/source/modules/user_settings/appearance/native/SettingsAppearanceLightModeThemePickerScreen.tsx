// Module ID: 16710
// Function ID: 16711
// Name: SettingsAppearanceLightModeThemePickerScreen
// Dependencies: [19, 1194, 21, 16671, 1112, 2]
// Exports: default

// Module 16710 (SettingsAppearanceLightModeThemePickerScreen)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1112 */;
import ThemeConstants from "ThemeConstants" /* 1194 */;
import SettingsAppearanceThemePickerScreenDefault from "SettingsAppearanceThemePickerScreen" /* 16671 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const SystemTheme = ThemeConstants.SystemTheme;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_settings/appearance/native/SettingsAppearanceLightModeThemePickerScreen.tsx");

export default function SettingsAppearanceLightModeThemePickerScreen() {
  SettingsAppearanceThemePickerScreenDefault;
  const intl = intl2.intl;
  return <tmp mode={SystemTheme.LIGHT} themeSelector="nitro" headerTitle={intl.string(intl2.t.NoFvjZ)} />;
};
