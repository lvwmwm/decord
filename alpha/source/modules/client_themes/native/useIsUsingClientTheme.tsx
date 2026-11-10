// Module ID: 9918
// Function ID: 9919
// Name: useIsUsingClientTheme
// Dependencies: [9919, 2]
// Exports: default

// Module 9918 (useIsUsingClientTheme)
import useActiveTheme from "useActiveTheme" /* 9919 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  const obj = useActiveTheme;
  return obj.useIsClientThemeOrCustomThemeActive();
};
