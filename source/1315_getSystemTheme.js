// Module ID: 1315
// Function ID: 15339
// Name: getSystemTheme
// Dependencies: []
// Exports: default

// Module 1315 (getSystemTheme)
const Appearance = require(dependencyMap[0]).Appearance;
const SystemTheme = require(dependencyMap[1]).SystemTheme;
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/themes/getSystemTheme.native.tsx");

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
