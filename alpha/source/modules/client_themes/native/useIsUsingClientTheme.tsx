// Module ID: 8873
// Function ID: 8874
// Name: useIsUsingClientTheme
// Dependencies: [8874, 2]
// Exports: default

// Module 8873 (useIsUsingClientTheme)
import useActiveTheme from "useActiveTheme" /* 8874 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  const obj = useActiveTheme;
  return obj.useIsClientThemeOrCustomThemeActive();
};
