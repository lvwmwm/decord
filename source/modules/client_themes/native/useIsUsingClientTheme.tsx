// Module ID: 8617
// Function ID: 8618
// Name: useIsUsingClientTheme
// Dependencies: [8618, 2]
// Exports: default

// Module 8617 (useIsUsingClientTheme)
import set from "set" /* 2 */;
import useActiveThemeType from "useActiveThemeType" /* 8618 */;

const result = set.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  return useActiveThemeType.useIsClientThemeOrCustomThemeActive();
};
