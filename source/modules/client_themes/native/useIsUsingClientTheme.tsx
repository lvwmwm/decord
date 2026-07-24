// Module ID: 8869
// Function ID: 69824
// Name: useIsUsingClientTheme
// Dependencies: [8870, 2]
// Exports: default

// Module 8869 (useIsUsingClientTheme)
const result = require("set").fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  return require(8870) /* useActiveThemeType */.useIsClientThemeOrCustomThemeActive();
};
