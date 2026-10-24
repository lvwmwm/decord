// Module ID: 9709
// Function ID: 9710
// Name: useIsUsingClientTheme
// Dependencies: [558, 9710, 2]
// Exports: default

// Module 9709 (useIsUsingClientTheme)
import useActiveTheme from "useActiveTheme" /* 9710 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  const obj = useActiveTheme;
  return obj.useIsClientThemeOrCustomThemeActive();
};
