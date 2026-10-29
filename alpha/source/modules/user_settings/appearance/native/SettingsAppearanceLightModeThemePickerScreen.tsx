// Module ID: 17174
// Function ID: 17175
// Name: SettingsAppearanceLightModeThemePickerScreen
// Dependencies: [19, 1207, 21, 558, 576, 17135, 1125, 2]

// Module 17174 (SettingsAppearanceLightModeThemePickerScreen)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl2 from "intl" /* 1125 */;
import ThemeConstants from "ThemeConstants" /* 1207 */;
import SettingsAppearanceThemePickerScreenDefault from "SettingsAppearanceThemePickerScreen" /* 17135 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const SystemTheme = ThemeConstants.SystemTheme;
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function SettingsAppearanceLightModeThemePickerScreen() {
  let first;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    SettingsAppearanceThemePickerScreenDefault;
    const intl = tmp(1125).intl;
    const tmp9 = <tmp7 mode={SystemTheme.LIGHT} themeSelector="nitro" headerTitle={intl.string(intl2.t.NoFvjZ)} />;
    cResult[0] = tmp9;
    first = tmp9;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function SettingsAppearanceLightModeThemePickerScreen() {
  SettingsAppearanceThemePickerScreenDefault;
  const intl = intl2.intl;
  return <tmp mode={SystemTheme.LIGHT} themeSelector="nitro" headerTitle={intl.string(intl2.t.NoFvjZ)} />;
});
const result = size.fileFinishedImporting("modules/user_settings/appearance/native/SettingsAppearanceLightModeThemePickerScreen.tsx");

export default tmp3;
