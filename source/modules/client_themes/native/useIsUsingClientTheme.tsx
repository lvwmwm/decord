// Module ID: 7550
// Function ID: 7551
// Name: useIsUsingClientTheme
// Dependencies: [7551, 2]
// Exports: default

// Module 7550 (useIsUsingClientTheme)
import set from "set" /* 2 */;
import useActiveThemeType from "useActiveThemeType" /* 7551 */;

const result = set.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  return useActiveThemeType.useIsClientThemeOrCustomThemeActive();
};
