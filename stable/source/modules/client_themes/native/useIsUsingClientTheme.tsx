// Module ID: 8149
// Function ID: 8150
// Name: useIsUsingClientTheme
// Dependencies: [8150, 2]
// Exports: default

// Module 8149 (useIsUsingClientTheme)
import useActiveTheme from "useActiveTheme" /* 8150 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  return useActiveTheme.useIsClientThemeOrCustomThemeActive();
};
