// Module ID: 1242
// Function ID: 1243
// Name: getSystemTheme
// Dependencies: [17, 1208, 2]
// Exports: default

// Module 1242 (getSystemTheme)
import react_native from "react-native" /* 17 */;
import ThemeConstants from "ThemeConstants" /* 1208 */;
import size from "module_2" /* 2 */;

const Appearance = react_native.Appearance;
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
