// Module ID: 7705
// Function ID: 7706
// Name: useIsWindowLarge
// Dependencies: [5433, 2]
// Exports: default, getIsWindowLarge

// Module 7705 (useIsWindowLarge)
import useWindowSizeClassifier from "useWindowSizeClassifier" /* 5433 */;
import size from "module_2" /* 2 */;

const useWindowSizeClassifierDefault = useWindowSizeClassifier;

const result = size.fileFinishedImporting("modules/screen/native/useIsWindowLarge.tsx");

export default function useIsWindowLarge() {
  const tmp = useWindowSizeClassifierDefault();
  return tmp >= useWindowSizeClassifier.WindowSizeClassifier.LARGE;
};
export function getIsWindowLarge() {
  const obj = useWindowSizeClassifier;
  const windowSizeClassifier = obj.getWindowSizeClassifier();
  return windowSizeClassifier >= useWindowSizeClassifier.WindowSizeClassifier.LARGE;
}
