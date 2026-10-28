// Module ID: 9743
// Function ID: 9744
// Name: useIsUsingClientTheme
// Dependencies: [558, 9744, 2]
// Exports: default

// Module 9743 (useIsUsingClientTheme)
import useActiveTheme from "useActiveTheme" /* 9744 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  const obj = useActiveTheme;
  return obj.useIsClientThemeOrCustomThemeActive();
};
