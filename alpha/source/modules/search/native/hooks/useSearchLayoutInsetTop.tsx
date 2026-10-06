// Module ID: 17072
// Function ID: 17073
// Name: useSearchLayoutInsetTop
// Dependencies: [558, 1618, 2]
// Exports: default

// Module 17072 (useSearchLayoutInsetTop)
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/search/native/hooks/useSearchLayoutInsetTop.tsx");

export default () => useSafeAreaInsetsDefault().top + 8;
