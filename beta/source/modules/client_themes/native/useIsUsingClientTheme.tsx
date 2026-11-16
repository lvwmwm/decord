// Module ID: 9061
// Function ID: 9062
// Name: useIsUsingClientTheme
// Dependencies: [9062, 2]
// Exports: default

// Module 9061 (useIsUsingClientTheme)
import useActiveTheme from "useActiveTheme" /* 9062 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  const obj = useActiveTheme;
  return obj.useIsClientThemeOrCustomThemeActive();
};
