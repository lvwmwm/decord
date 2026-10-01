// Module ID: 14854
// Function ID: 14855
// Name: SettingsAppearanceDarkModeThemePickerScreen
// Dependencies: [19, 1185, 21, 14813, 1115, 2]
// Exports: default

// Module 14854 (SettingsAppearanceDarkModeThemePickerScreen)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1115 */;
import ThemeConstants from "ThemeConstants" /* 1185 */;
import SettingsAppearanceThemePickerScreenDefault from "SettingsAppearanceThemePickerScreen" /* 14813 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const SystemTheme = ThemeConstants.SystemTheme;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_settings/appearance/native/SettingsAppearanceDarkModeThemePickerScreen.tsx");

export default function SettingsAppearanceDarkModeThemePickerScreen() {
  SettingsAppearanceThemePickerScreenDefault;
  const intl = intl2.intl;
  return <tmp mode={SystemTheme.DARK} themeSelector="nitro" headerTitle={intl.string(intl2.t["EgvHH/"])} />;
};
