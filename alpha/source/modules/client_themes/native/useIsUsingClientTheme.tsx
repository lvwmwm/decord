// Module ID: 9317
// Function ID: 9318
// Name: useIsUsingClientTheme
// Dependencies: [558, 9318, 2]
// Exports: default

// Module 9317 (useIsUsingClientTheme)
import useActiveTheme from "useActiveTheme" /* 9318 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  const obj = useActiveTheme;
  return obj.useIsClientThemeOrCustomThemeActive();
};
