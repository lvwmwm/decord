// Module ID: 17228
// Function ID: 17229
// Name: SettingsAppearanceLightModeThemePickerScreen
// Dependencies: [19, 1196, 21, 17189, 1114, 2]
// Exports: default

// Module 17228 (SettingsAppearanceLightModeThemePickerScreen)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1114 */;
import ThemeConstants from "ThemeConstants" /* 1196 */;
import SettingsAppearanceThemePickerScreenDefault from "SettingsAppearanceThemePickerScreen" /* 17189 */;
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
