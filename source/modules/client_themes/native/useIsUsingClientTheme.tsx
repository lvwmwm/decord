// Module ID: 8463
// Function ID: 8464
// Name: useIsUsingClientTheme
// Dependencies: [8464, 2]
// Exports: default

// Module 8463 (useIsUsingClientTheme)
const result = require("set").fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  return require(8464) /* useActiveThemeType */.useIsClientThemeOrCustomThemeActive();
};
