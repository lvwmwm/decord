// Module ID: 8398
// Function ID: 8399
// Name: useIsUsingClientTheme
// Dependencies: [8399, 2]
// Exports: default

// Module 8398 (useIsUsingClientTheme)
const result = require("set").fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  return require(8399) /* useActiveThemeType */.useIsClientThemeOrCustomThemeActive();
};
