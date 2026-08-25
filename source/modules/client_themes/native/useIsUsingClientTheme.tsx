// Module ID: 8549
// Function ID: 8550
// Name: useIsUsingClientTheme
// Dependencies: [8550, 2]
// Exports: default

// Module 8549 (useIsUsingClientTheme)
import set from "set" /* 2 */;
import useActiveThemeType from "useActiveThemeType" /* 8550 */;

const result = set.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  return useActiveThemeType.useIsClientThemeOrCustomThemeActive();
};
