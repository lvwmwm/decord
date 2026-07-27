// Module ID: 8757
// Function ID: 69304
// Name: useIsUsingClientTheme
// Dependencies: [8758, 2]
// Exports: default

// Module 8757 (useIsUsingClientTheme)
const result = require("set").fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  return require(8758) /* useActiveThemeType */.useIsClientThemeOrCustomThemeActive();
};
