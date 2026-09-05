// Module ID: 7873
// Function ID: 7874
// Name: useIsUsingClientTheme
// Dependencies: [7874, 2]
// Exports: default

// Module 7873 (useIsUsingClientTheme)
import set from "set" /* 2 */;
import useActiveThemeType from "useActiveThemeType" /* 7874 */;

const result = set.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  return useActiveThemeType.useIsClientThemeOrCustomThemeActive();
};
