// Module ID: 7298
// Function ID: 7299
// Name: useIsUsingClientTheme
// Dependencies: [7299, 2]
// Exports: default

// Module 7298 (useIsUsingClientTheme)
import useActiveTheme from "useActiveTheme" /* 7299 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  return useActiveTheme.useIsClientThemeOrCustomThemeActive();
};
