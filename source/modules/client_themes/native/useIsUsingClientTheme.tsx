// Module ID: 7628
// Function ID: 7629
// Name: useIsUsingClientTheme
// Dependencies: [7629, 2]
// Exports: default

// Module 7628 (useIsUsingClientTheme)
import set from "set" /* 2 */;
import useActiveThemeType from "useActiveThemeType" /* 7629 */;

const result = set.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  return useActiveThemeType.useIsClientThemeOrCustomThemeActive();
};
