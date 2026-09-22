// Module ID: 8120
// Function ID: 8121
// Name: useIsUsingClientTheme
// Dependencies: [8121, 2]
// Exports: default

// Module 8120 (useIsUsingClientTheme)
import useActiveTheme from "useActiveTheme" /* 8121 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  return useActiveTheme.useIsClientThemeOrCustomThemeActive();
};
