// Module ID: 9822
// Function ID: 9823
// Name: useIsUsingClientTheme
// Dependencies: [9823, 2]
// Exports: default

// Module 9822 (useIsUsingClientTheme)
import useActiveTheme from "useActiveTheme" /* 9823 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  const obj = useActiveTheme;
  return obj.useIsClientThemeOrCustomThemeActive();
};
