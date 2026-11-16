// Module ID: 9945
// Function ID: 9946
// Name: useIsUsingClientTheme
// Dependencies: [9946, 2]
// Exports: default

// Module 9945 (useIsUsingClientTheme)
import useActiveTheme from "useActiveTheme" /* 9946 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  const obj = useActiveTheme;
  return obj.useIsClientThemeOrCustomThemeActive();
};
