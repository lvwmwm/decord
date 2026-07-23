// Module ID: 8830
// Function ID: 69609
// Name: useIsUsingClientTheme
// Dependencies: [8831, 2]
// Exports: default

// Module 8830 (useIsUsingClientTheme)
const result = require("set").fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  return require(8831) /* useActiveThemeType */.useIsClientThemeOrCustomThemeActive();
};
