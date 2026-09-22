// Module ID: 17339
// Function ID: 17340
// Name: useSearchLayoutInsetTop
// Dependencies: [558, 1616, 2]
// Exports: default

// Module 17339 (useSearchLayoutInsetTop)
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1616 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/search/native/hooks/useSearchLayoutInsetTop.tsx");

export default () => useSafeAreaInsetsDefault().top + 8;
