// Module ID: 7785
// Function ID: 7786
// Name: useIsWindowLarge
// Dependencies: [4238, 2]
// Exports: default, getIsWindowLarge

// Module 7785 (useIsWindowLarge)
import set from "set" /* 2 */;
import useWindowSizeClassifier from "useWindowSizeClassifier" /* 4238 */;
import useWindowSizeClassifierDefault from "useWindowSizeClassifier" /* 4238 */;

const result = set.fileFinishedImporting("modules/screen/native/useIsWindowLarge.tsx");

export default function useIsWindowLarge() {
  return useWindowSizeClassifierDefault() >= useWindowSizeClassifier.WindowSizeClassifier.LARGE;
};
export const getIsWindowLarge = function getIsWindowLarge() {
  const windowSizeClassifier = useWindowSizeClassifier.getWindowSizeClassifier();
  return windowSizeClassifier >= useWindowSizeClassifier.WindowSizeClassifier.LARGE;
};
