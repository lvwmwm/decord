// Module ID: 9632
// Function ID: 9633
// Name: useIsWindowSmall
// Dependencies: [5076, 558, 2]
// Exports: default, useIsWindowSmall

// Module 9632 (useIsWindowSmall)
import useWindowSizeClassifier from "useWindowSizeClassifier" /* 5076 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const useWindowSizeClassifierDefault = useWindowSizeClassifier;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/screen/native/useIsWindowSmall.tsx");

export default function getIsWindowSmall() {
  const obj = useWindowSizeClassifier;
  const windowSizeClassifier = obj.getWindowSizeClassifier();
  return windowSizeClassifier <= useWindowSizeClassifier.WindowSizeClassifier.SMALL;
};
export const useIsWindowSmall = function useIsWindowSmall() {
  const tmp = useWindowSizeClassifierDefault();
  return tmp <= useWindowSizeClassifier.WindowSizeClassifier.SMALL;
};
