// Module ID: 8392
// Function ID: 8393
// Name: useIsUsingClientTheme
// Dependencies: [8393, 2]
// Exports: default

// Module 8392 (useIsUsingClientTheme)
const result = require("set").fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  return require(8393) /* useActiveThemeType */.useIsClientThemeOrCustomThemeActive();
};
