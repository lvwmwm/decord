// Module ID: 9015
// Function ID: 9016
// Name: useIsUsingClientTheme
// Dependencies: [9016, 2]
// Exports: default

// Module 9015 (useIsUsingClientTheme)
import useActiveTheme from "useActiveTheme" /* 9016 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  const obj = useActiveTheme;
  return obj.useIsClientThemeOrCustomThemeActive();
};
