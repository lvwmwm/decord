// Module ID: 8822
// Function ID: 69556
// Name: useIsUsingClientTheme
// Dependencies: []
// Exports: default

// Module 8822 (useIsUsingClientTheme)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  return require(dependencyMap[0]).useIsClientThemeOrCustomThemeActive();
};
