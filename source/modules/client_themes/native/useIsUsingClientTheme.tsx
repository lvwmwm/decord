// Module ID: 8821
// Function ID: 8822
// Name: useIsUsingClientTheme
// Dependencies: [8822, 2]
// Exports: default

// Module 8821 (useIsUsingClientTheme)
const result = require("set").fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  return require(8822) /* useActiveThemeType */.useIsClientThemeOrCustomThemeActive();
};
