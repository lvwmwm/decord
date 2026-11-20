// Module ID: 8451
// Function ID: 8452
// Name: useIsUsingClientTheme
// Dependencies: [8452, 2]
// Exports: default

// Module 8451 (useIsUsingClientTheme)
import useActiveTheme from "useActiveTheme" /* 8452 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  const obj = useActiveTheme;
  return obj.useIsClientThemeOrCustomThemeActive();
};
