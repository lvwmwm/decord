// Module ID: 9014
// Function ID: 9015
// Name: useIsUsingClientTheme
// Dependencies: [9015, 2]
// Exports: default

// Module 9014 (useIsUsingClientTheme)
import useActiveTheme from "useActiveTheme" /* 9015 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  const obj = useActiveTheme;
  return obj.useIsClientThemeOrCustomThemeActive();
};
