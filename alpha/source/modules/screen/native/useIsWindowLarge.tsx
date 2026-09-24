// Module ID: 7276
// Function ID: 7277
// Name: useIsWindowLarge
// Dependencies: [4690, 2]
// Exports: default, getIsWindowLarge

// Module 7276 (useIsWindowLarge)
import useWindowSizeClassifier from "useWindowSizeClassifier" /* 4690 */;
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
