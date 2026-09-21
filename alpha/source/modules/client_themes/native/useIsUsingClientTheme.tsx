// Module ID: 8117
// Function ID: 8118
// Name: useIsUsingClientTheme
// Dependencies: [8118, 2]
// Exports: default

// Module 8117 (useIsUsingClientTheme)
import useActiveTheme from "useActiveTheme" /* 8118 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  return useActiveTheme.useIsClientThemeOrCustomThemeActive();
};
