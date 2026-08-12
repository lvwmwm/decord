// Module ID: 8437
// Function ID: 8438
// Name: useIsUsingClientTheme
// Dependencies: [8438, 2]
// Exports: default

// Module 8437 (useIsUsingClientTheme)
const result = require("set").fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  return require(8438) /* useActiveThemeType */.useIsClientThemeOrCustomThemeActive();
};
