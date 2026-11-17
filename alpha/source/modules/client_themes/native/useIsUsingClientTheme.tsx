// Module ID: 9072
// Function ID: 9073
// Name: useIsUsingClientTheme
// Dependencies: [9073, 2]
// Exports: default

// Module 9072 (useIsUsingClientTheme)
import useActiveTheme from "useActiveTheme" /* 9073 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  const obj = useActiveTheme;
  return obj.useIsClientThemeOrCustomThemeActive();
};
