// Module ID: 9308
// Function ID: 9309
// Name: useIsUsingClientTheme
// Dependencies: [558, 9309, 2]
// Exports: default

// Module 9308 (useIsUsingClientTheme)
import useActiveTheme from "useActiveTheme" /* 9309 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  const obj = useActiveTheme;
  return obj.useIsClientThemeOrCustomThemeActive();
};
