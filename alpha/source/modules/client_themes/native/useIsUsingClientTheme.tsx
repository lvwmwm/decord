// Module ID: 8204
// Function ID: 8205
// Name: useIsUsingClientTheme
// Dependencies: [8205, 2]
// Exports: default

// Module 8204 (useIsUsingClientTheme)
import useActiveTheme from "useActiveTheme" /* 8205 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  return useActiveTheme.useIsClientThemeOrCustomThemeActive();
};
