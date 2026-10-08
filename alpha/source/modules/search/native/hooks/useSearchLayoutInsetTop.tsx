// Module ID: 17353
// Function ID: 17354
// Name: useSearchLayoutInsetTop
// Dependencies: [558, 1630, 2]
// Exports: default

// Module 17353 (useSearchLayoutInsetTop)
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/search/native/hooks/useSearchLayoutInsetTop.tsx");

export default function useSearchLayoutInsetTop() {
  return useSafeAreaInsetsDefault().top + 8;
};
