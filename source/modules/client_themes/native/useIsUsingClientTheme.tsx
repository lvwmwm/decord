// Module ID: 7627
// Function ID: 7628
// Name: useIsUsingClientTheme
// Dependencies: [7628, 2]
// Exports: default

// Module 7627 (useIsUsingClientTheme)
import set from "set" /* 2 */;
import useActiveThemeType from "useActiveThemeType" /* 7628 */;

const result = set.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  return useActiveThemeType.useIsClientThemeOrCustomThemeActive();
};
