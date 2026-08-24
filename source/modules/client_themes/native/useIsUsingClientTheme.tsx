// Module ID: 8541
// Function ID: 8542
// Name: useIsUsingClientTheme
// Dependencies: [8542, 2]
// Exports: default

// Module 8541 (useIsUsingClientTheme)
import set from "set" /* 2 */;
import useActiveThemeType from "useActiveThemeType" /* 8542 */;

const result = set.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  return useActiveThemeType.useIsClientThemeOrCustomThemeActive();
};
