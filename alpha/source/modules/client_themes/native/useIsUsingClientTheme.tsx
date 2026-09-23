// Module ID: 8202
// Function ID: 8203
// Name: useIsUsingClientTheme
// Dependencies: [8203, 2]
// Exports: default

// Module 8202 (useIsUsingClientTheme)
import useActiveTheme from "useActiveTheme" /* 8203 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  return useActiveTheme.useIsClientThemeOrCustomThemeActive();
};
