// Module ID: 8825
// Function ID: 8826
// Name: useIsUsingClientTheme
// Dependencies: [8826, 2]
// Exports: default

// Module 8825 (useIsUsingClientTheme)
const result = require("set").fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  return require(8826) /* useActiveThemeType */.useIsClientThemeOrCustomThemeActive();
};
