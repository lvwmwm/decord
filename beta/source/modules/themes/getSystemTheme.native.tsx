// Module ID: 1223
// Function ID: 1224
// Name: getSystemTheme
// Dependencies: [17, 1189, 2]
// Exports: default

// Module 1223 (getSystemTheme)
import _mod17 from "module_17" /* 17 */;
import ThemeConstants from "ThemeConstants" /* 1189 */;
import size from "module_2" /* 2 */;

const Appearance = _mod17.Appearance;
const SystemTheme = ThemeConstants.SystemTheme;
const result = size.fileFinishedImporting("modules/themes/getSystemTheme.native.tsx");

export default function getSystemTheme() {
  const colorScheme = Appearance.getColorScheme();
  if ("light" === colorScheme) {
    return SystemTheme.LIGHT;
  } else if ("dark" === colorScheme) {
    return SystemTheme.DARK;
  } else {
    return SystemTheme.NO_PREFERENCE;
  }
};
