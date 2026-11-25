// Module ID: 8972
// Function ID: 8973
// Name: useIsUsingClientTheme
// Dependencies: [8973, 2]
// Exports: default

// Module 8972 (useIsUsingClientTheme)
import useActiveTheme from "useActiveTheme" /* 8973 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  const obj = useActiveTheme;
  return obj.useIsClientThemeOrCustomThemeActive();
};
