// Module ID: 8122
// Function ID: 8123
// Name: useIsUsingClientTheme
// Dependencies: [558, 8123, 2]
// Exports: default

// Module 8122 (useIsUsingClientTheme)
import useActiveTheme from "useActiveTheme" /* 8123 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default () => useActiveTheme.useIsClientThemeOrCustomThemeActive();
