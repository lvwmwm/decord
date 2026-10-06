// Module ID: 7519
// Function ID: 7520
// Name: useIsUsingClientTheme
// Dependencies: [558, 7520, 2]
// Exports: default

// Module 7519 (useIsUsingClientTheme)
import useActiveTheme from "useActiveTheme" /* 7520 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default () => {
  const obj = useActiveTheme;
  return obj.useIsClientThemeOrCustomThemeActive();
};
