// Module ID: 16714
// Function ID: 16715
// Name: SettingsAppearanceDarkModeThemePickerScreen
// Dependencies: [19, 1194, 21, 16673, 1112, 2]
// Exports: default

// Module 16714 (SettingsAppearanceDarkModeThemePickerScreen)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1112 */;
import ThemeConstants from "ThemeConstants" /* 1194 */;
import SettingsAppearanceThemePickerScreenDefault from "SettingsAppearanceThemePickerScreen" /* 16673 */;
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
