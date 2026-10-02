// Module ID: 7302
// Function ID: 7303
// Name: useIsUsingClientTheme
// Dependencies: [558, 7303, 2]
// Exports: default

// Module 7302 (useIsUsingClientTheme)
import useActiveTheme from "useActiveTheme" /* 7303 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default () => {
  const obj = useActiveTheme;
  return obj.useIsClientThemeOrCustomThemeActive();
};
