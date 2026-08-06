// Module ID: 8315
// Function ID: 8316
// Name: useIsUsingClientTheme
// Dependencies: [8316, 2]
// Exports: default

// Module 8315 (useIsUsingClientTheme)
const result = require("set").fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  return require(8316) /* useActiveThemeType */.useIsClientThemeOrCustomThemeActive();
};
