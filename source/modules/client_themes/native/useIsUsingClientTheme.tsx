// Module ID: 8441
// Function ID: 8442
// Name: useIsUsingClientTheme
// Dependencies: [8442, 2]
// Exports: default

// Module 8441 (useIsUsingClientTheme)
const result = require("set").fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  return require(8442) /* useActiveThemeType */.useIsClientThemeOrCustomThemeActive();
};
