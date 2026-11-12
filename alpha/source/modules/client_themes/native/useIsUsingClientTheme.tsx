// Module ID: 8994
// Function ID: 8995
// Name: useIsUsingClientTheme
// Dependencies: [8995, 2]
// Exports: default

// Module 8994 (useIsUsingClientTheme)
import useActiveTheme from "useActiveTheme" /* 8995 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  const obj = useActiveTheme;
  return obj.useIsClientThemeOrCustomThemeActive();
};
