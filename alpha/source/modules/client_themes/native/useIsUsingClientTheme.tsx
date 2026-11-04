// Module ID: 9971
// Function ID: 9972
// Name: useIsUsingClientTheme
// Dependencies: [9972, 2]
// Exports: default

// Module 9971 (useIsUsingClientTheme)
import useActiveTheme from "useActiveTheme" /* 9972 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  const obj = useActiveTheme;
  return obj.useIsClientThemeOrCustomThemeActive();
};
