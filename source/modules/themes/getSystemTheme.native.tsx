// Module ID: 1315
// Function ID: 15346
// Name: getSystemTheme
// Dependencies: [27, 1281, 2]
// Exports: default

// Module 1315 (getSystemTheme)
import { Appearance } from "get ActivityIndicator";
import { SystemTheme } from "SystemThemeState";

const result = require("set").fileFinishedImporting("modules/themes/getSystemTheme.native.tsx");

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
