// Module ID: 9977
// Function ID: 9978
// Name: useIsUsingClientTheme
// Dependencies: [9978, 2]
// Exports: default

// Module 9977 (useIsUsingClientTheme)
import useActiveTheme from "useActiveTheme" /* 9978 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  const obj = useActiveTheme;
  return obj.useIsClientThemeOrCustomThemeActive();
};
