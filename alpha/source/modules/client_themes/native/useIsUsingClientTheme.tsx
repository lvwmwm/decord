// Module ID: 8483
// Function ID: 8484
// Name: useIsUsingClientTheme
// Dependencies: [8484, 2]
// Exports: default

// Module 8483 (useIsUsingClientTheme)
import useActiveTheme from "useActiveTheme" /* 8484 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  const obj = useActiveTheme;
  return obj.useIsClientThemeOrCustomThemeActive();
};
