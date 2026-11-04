// Module ID: 17532
// Function ID: 17533
// Name: SettingsAppearanceLightModeThemePickerScreen
// Dependencies: [19, 1195, 21, 17493, 1113, 2]
// Exports: default

// Module 17532 (SettingsAppearanceLightModeThemePickerScreen)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import ThemeConstants from "ThemeConstants" /* 1195 */;
import SettingsAppearanceThemePickerScreenDefault from "SettingsAppearanceThemePickerScreen" /* 17493 */;
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
