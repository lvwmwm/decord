// Module ID: 9801
// Function ID: 9802
// Name: useIsUsingClientTheme
// Dependencies: [9802, 2]
// Exports: default

// Module 9801 (useIsUsingClientTheme)
import useActiveTheme from "useActiveTheme" /* 9802 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  const obj = useActiveTheme;
  return obj.useIsClientThemeOrCustomThemeActive();
};
