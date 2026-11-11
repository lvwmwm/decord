// Module ID: 8995
// Function ID: 8996
// Name: useIsUsingClientTheme
// Dependencies: [8996, 2]
// Exports: default

// Module 8995 (useIsUsingClientTheme)
import useActiveTheme from "useActiveTheme" /* 8996 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  const obj = useActiveTheme;
  return obj.useIsClientThemeOrCustomThemeActive();
};
