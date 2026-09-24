// Module ID: 15576
// Function ID: 15577
// Name: SettingsAppearanceLightModeThemePickerScreen
// Dependencies: [19, 1189, 21, 558, 568, 15537, 1119, 2]

// Module 15576 (SettingsAppearanceLightModeThemePickerScreen)
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import SettingsAppearanceThemePickerScreenDefault from "SettingsAppearanceThemePickerScreen" /* 15537 */;
import noop from "module_19" /* 19 */;

require = fn;
const SystemTheme = fn(1189).SystemTheme;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/appearance/native/SettingsAppearanceLightModeThemePickerScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { mode: SystemTheme.LIGHT, themeSelector: "nitro", headerTitle: null };
    const intl = tmp(1119).intl;
    obj2.headerTitle = intl.string(tmp(1119).t.NoFvjZ);
    const tmp9 = jsx(SettingsAppearanceThemePickerScreenDefault, { mode: SystemTheme.LIGHT, themeSelector: "nitro", headerTitle: null });
    cResult[0] = tmp9;
    let first = tmp9;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => {
  const obj = { mode: SystemTheme.LIGHT, themeSelector: "nitro", headerTitle: null };
  const intl = util.intl;
  obj.headerTitle = intl.string(util.t.NoFvjZ);
  return jsx(SettingsAppearanceThemePickerScreenDefault, { mode: SystemTheme.LIGHT, themeSelector: "nitro", headerTitle: null });
});
