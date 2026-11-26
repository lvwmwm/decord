// Module ID: 7309
// Function ID: 7310
// Name: useIsWindowLarge
// Dependencies: [5223, 2]
// Exports: default, getIsWindowLarge

// Module 7309 (useIsWindowLarge)
import useWindowSizeClassifier from "useWindowSizeClassifier" /* 5223 */;
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
