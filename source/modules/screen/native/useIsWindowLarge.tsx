// Module ID: 7727
// Function ID: 7728
// Name: useIsWindowLarge
// Dependencies: [4336, 2]
// Exports: default, getIsWindowLarge

// Module 7727 (useIsWindowLarge)
import set from "set" /* 2 */;
import useWindowSizeClassifier from "useWindowSizeClassifier" /* 4336 */;
import useWindowSizeClassifierDefault from "useWindowSizeClassifier" /* 4336 */;

const result = set.fileFinishedImporting("modules/screen/native/useIsWindowLarge.tsx");

export default function useIsWindowLarge() {
  return useWindowSizeClassifierDefault() >= useWindowSizeClassifier.WindowSizeClassifier.LARGE;
};
export const getIsWindowLarge = function getIsWindowLarge() {
  const windowSizeClassifier = useWindowSizeClassifier.getWindowSizeClassifier();
  return windowSizeClassifier >= useWindowSizeClassifier.WindowSizeClassifier.LARGE;
};
