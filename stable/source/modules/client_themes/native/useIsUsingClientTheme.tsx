// Module ID: 7976
// Function ID: 7977
// Name: useIsUsingClientTheme
// Dependencies: [7977, 2]
// Exports: default

// Module 7976 (useIsUsingClientTheme)
import useActiveTheme from "useActiveTheme" /* 7977 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  return useActiveTheme.useIsClientThemeOrCustomThemeActive();
};
