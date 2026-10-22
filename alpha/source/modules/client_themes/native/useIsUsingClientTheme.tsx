// Module ID: 9686
// Function ID: 9687
// Name: useIsUsingClientTheme
// Dependencies: [558, 9687, 2]
// Exports: default

// Module 9686 (useIsUsingClientTheme)
import useActiveTheme from "useActiveTheme" /* 9687 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  const obj = useActiveTheme;
  return obj.useIsClientThemeOrCustomThemeActive();
};
