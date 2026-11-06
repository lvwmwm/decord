// Module ID: 9928
// Function ID: 9929
// Name: useIsUsingClientTheme
// Dependencies: [9929, 2]
// Exports: default

// Module 9928 (useIsUsingClientTheme)
import useActiveTheme from "useActiveTheme" /* 9929 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  const obj = useActiveTheme;
  return obj.useIsClientThemeOrCustomThemeActive();
};
