// Module ID: 9011
// Function ID: 9012
// Name: useIsUsingClientTheme
// Dependencies: [9012, 2]
// Exports: default

// Module 9011 (useIsUsingClientTheme)
const result = require("set").fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  return require(9012) /* useActiveThemeType */.useIsClientThemeOrCustomThemeActive();
};
