// Module ID: 7805
// Function ID: 7806
// Name: useIsUsingClientTheme
// Dependencies: [7806, 2]
// Exports: default

// Module 7805 (useIsUsingClientTheme)
import set from "set" /* 2 */;
import useActiveThemeType from "useActiveThemeType" /* 7806 */;

const result = set.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  return useActiveThemeType.useIsClientThemeOrCustomThemeActive();
};
