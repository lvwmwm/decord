// Module ID: 9305
// Function ID: 9306
// Name: useIsWindowSmall
// Dependencies: [4941, 558, 2]
// Exports: default, useIsWindowSmall

// Module 9305 (useIsWindowSmall)
import useWindowSizeClassifier from "useWindowSizeClassifier" /* 4941 */;
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
