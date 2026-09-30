// Module ID: 6560
// Function ID: 6561
// Name: useIsWindowLarge
// Dependencies: [4726, 2]
// Exports: default, getIsWindowLarge

// Module 6560 (useIsWindowLarge)
import useWindowSizeClassifier from "useWindowSizeClassifier" /* 4726 */;
import size from "module_2" /* 2 */;

const useWindowSizeClassifierDefault = useWindowSizeClassifier;

const result = size.fileFinishedImporting("modules/screen/native/useIsWindowLarge.tsx");

export default function useIsWindowLarge() {
  return useWindowSizeClassifierDefault() >= useWindowSizeClassifier.WindowSizeClassifier.LARGE;
};
export const getIsWindowLarge = function getIsWindowLarge() {
  const windowSizeClassifier = useWindowSizeClassifier.getWindowSizeClassifier();
  return windowSizeClassifier >= useWindowSizeClassifier.WindowSizeClassifier.LARGE;
};
