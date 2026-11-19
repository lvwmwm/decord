// Module ID: 8452
// Function ID: 8453
// Name: useIsUsingClientTheme
// Dependencies: [8453, 2]
// Exports: default

// Module 8452 (useIsUsingClientTheme)
import useActiveTheme from "useActiveTheme" /* 8453 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  const obj = useActiveTheme;
  return obj.useIsClientThemeOrCustomThemeActive();
};
