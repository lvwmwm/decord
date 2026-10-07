// Module ID: 7508
// Function ID: 7509
// Name: useIsUsingClientTheme
// Dependencies: [558, 7509, 2]
// Exports: default

// Module 7508 (useIsUsingClientTheme)
import useActiveTheme from "useActiveTheme" /* 7509 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default () => {
  const obj = useActiveTheme;
  return obj.useIsClientThemeOrCustomThemeActive();
};
