// Module ID: 7254
// Function ID: 7255
// Name: useIsWindowLarge
// Dependencies: [4972, 2]
// Exports: default, getIsWindowLarge

// Module 7254 (useIsWindowLarge)
import useWindowSizeClassifier from "useWindowSizeClassifier" /* 4972 */;
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
