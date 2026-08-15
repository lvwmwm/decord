// Module ID: 8502
// Function ID: 8503
// Name: useIsUsingClientTheme
// Dependencies: [8503, 2]
// Exports: default

// Module 8502 (useIsUsingClientTheme)
const result = require("set").fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  return require(8503) /* useActiveThemeType */.useIsClientThemeOrCustomThemeActive();
};
