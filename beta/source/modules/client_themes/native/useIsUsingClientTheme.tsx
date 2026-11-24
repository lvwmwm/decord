// Module ID: 8571
// Function ID: 8572
// Name: useIsUsingClientTheme
// Dependencies: [8572, 2]
// Exports: default

// Module 8571 (useIsUsingClientTheme)
import useActiveTheme from "useActiveTheme" /* 8572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  const obj = useActiveTheme;
  return obj.useIsClientThemeOrCustomThemeActive();
};
