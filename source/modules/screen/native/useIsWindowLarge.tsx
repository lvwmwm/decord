// Module ID: 7665
// Function ID: 7666
// Name: useIsWindowLarge
// Dependencies: [4304, 2]
// Exports: default, getIsWindowLarge

// Module 7665 (useIsWindowLarge)
import set from "set" /* 2 */;
import useWindowSizeClassifier from "useWindowSizeClassifier" /* 4304 */;
import useWindowSizeClassifierDefault from "useWindowSizeClassifier" /* 4304 */;

const result = set.fileFinishedImporting("modules/screen/native/useIsWindowLarge.tsx");

export default function useIsWindowLarge() {
  return useWindowSizeClassifierDefault() >= useWindowSizeClassifier.WindowSizeClassifier.LARGE;
};
export const getIsWindowLarge = function getIsWindowLarge() {
  const windowSizeClassifier = useWindowSizeClassifier.getWindowSizeClassifier();
  return windowSizeClassifier >= useWindowSizeClassifier.WindowSizeClassifier.LARGE;
};
