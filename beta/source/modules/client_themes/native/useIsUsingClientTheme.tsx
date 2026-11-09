// Module ID: 9912
// Function ID: 9913
// Name: useIsUsingClientTheme
// Dependencies: [9913, 2]
// Exports: default

// Module 9912 (useIsUsingClientTheme)
import useActiveTheme from "useActiveTheme" /* 9913 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  const obj = useActiveTheme;
  return obj.useIsClientThemeOrCustomThemeActive();
};
