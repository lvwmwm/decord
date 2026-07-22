// Module ID: 8823
// Function ID: 69568
// Name: useIsUsingClientTheme
// Dependencies: []
// Exports: default

// Module 8823 (useIsUsingClientTheme)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  return require(dependencyMap[0]).useIsClientThemeOrCustomThemeActive();
};
