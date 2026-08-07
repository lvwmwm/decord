// Module ID: 8332
// Function ID: 8333
// Name: useIsUsingClientTheme
// Dependencies: [8333, 2]
// Exports: default

// Module 8332 (useIsUsingClientTheme)
const result = require("set").fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  return require(8333) /* useActiveThemeType */.useIsClientThemeOrCustomThemeActive();
};
