// Module ID: 1218
// Function ID: 1219
// Name: getSystemTheme
// Dependencies: [17, 1184, 2]
// Exports: default

// Module 1218 (getSystemTheme)
import _mod17 from "module_17" /* 17 */;
import ThemeConstants from "ThemeConstants" /* 1184 */;
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
