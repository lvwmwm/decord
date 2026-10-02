// Module ID: 7332
// Function ID: 7333
// Name: useIsWindowSmall
// Dependencies: [4698, 558, 2]
// Exports: default, useIsWindowSmall

// Module 7332 (useIsWindowSmall)
import useWindowSizeClassifier from "useWindowSizeClassifier" /* 4698 */;
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
export const useIsWindowSmall = () => {
  const tmp = useWindowSizeClassifierDefault();
  return tmp <= useWindowSizeClassifier.WindowSizeClassifier.SMALL;
};
