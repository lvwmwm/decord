// Module ID: 8154
// Function ID: 8155
// Name: useIsUsingClientTheme
// Dependencies: [558, 8155, 2]
// Exports: default

// Module 8154 (useIsUsingClientTheme)
import useActiveTheme from "useActiveTheme" /* 8155 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default () => useActiveTheme.useIsClientThemeOrCustomThemeActive();
