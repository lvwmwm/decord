// Module ID: 8203
// Function ID: 8204
// Name: useIsUsingClientTheme
// Dependencies: [8204, 2]
// Exports: default

// Module 8203 (useIsUsingClientTheme)
const result = require("set").fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  return require(8204) /* useActiveThemeType */.useIsClientThemeOrCustomThemeActive();
};
