// Module ID: 9953
// Function ID: 9954
// Name: useIsUsingClientTheme
// Dependencies: [9954, 2]
// Exports: default

// Module 9953 (useIsUsingClientTheme)
import useActiveTheme from "useActiveTheme" /* 9954 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  const obj = useActiveTheme;
  return obj.useIsClientThemeOrCustomThemeActive();
};
