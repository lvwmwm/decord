// Module ID: 8801
// Function ID: 69455
// Name: useIsUsingClientTheme
// Dependencies: [8802, 2]
// Exports: default

// Module 8801 (useIsUsingClientTheme)
const result = require("set").fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  return require(8802) /* useActiveThemeType */.useIsClientThemeOrCustomThemeActive();
};
