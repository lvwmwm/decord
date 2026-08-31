// Module ID: 7585
// Function ID: 7586
// Name: useIsUsingClientTheme
// Dependencies: [7586, 2]
// Exports: default

// Module 7585 (useIsUsingClientTheme)
import set from "set" /* 2 */;
import useActiveThemeType from "useActiveThemeType" /* 7586 */;

const result = set.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  return useActiveThemeType.useIsClientThemeOrCustomThemeActive();
};
