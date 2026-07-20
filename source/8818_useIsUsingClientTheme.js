// Module ID: 8818
// Function ID: 69533
// Name: useIsUsingClientTheme
// Dependencies: []
// Exports: default

// Module 8818 (useIsUsingClientTheme)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  return require(dependencyMap[0]).useIsClientThemeOrCustomThemeActive();
};
