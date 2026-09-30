// Module ID: 7494
// Function ID: 7495
// Name: useIsUsingClientTheme
// Dependencies: [7495, 2]
// Exports: default

// Module 7494 (useIsUsingClientTheme)
import useActiveTheme from "useActiveTheme" /* 7495 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  return useActiveTheme.useIsClientThemeOrCustomThemeActive();
};
