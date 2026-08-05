// Module ID: 8175
// Function ID: 8176
// Name: useIsUsingClientTheme
// Dependencies: [8176, 2]
// Exports: default

// Module 8175 (useIsUsingClientTheme)
const result = require("set").fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  return require(8176) /* useActiveThemeType */.useIsClientThemeOrCustomThemeActive();
};
