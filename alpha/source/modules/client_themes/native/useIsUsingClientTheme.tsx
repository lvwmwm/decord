// Module ID: 7463
// Function ID: 7464
// Name: useIsUsingClientTheme
// Dependencies: [7464, 2]
// Exports: default

// Module 7463 (useIsUsingClientTheme)
import useActiveTheme from "useActiveTheme" /* 7464 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  return useActiveTheme.useIsClientThemeOrCustomThemeActive();
};
