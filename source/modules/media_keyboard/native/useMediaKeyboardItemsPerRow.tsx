// Module ID: 9658
// Function ID: 75237
// Name: useMediaKeyboardItemsPerRow
// Dependencies: []
// Exports: useMediaKeyboardItemsPerRow

// Module 9658 (useMediaKeyboardItemsPerRow)
let closure_3 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/media_keyboard/native/useMediaKeyboardItemsPerRow.tsx");

export const useMediaKeyboardItemsPerRow = function useMediaKeyboardItemsPerRow() {
  const tmp = importDefault(dependencyMap[1])();
  let num = 8;
  if (arg1(dependencyMap[1]).WindowSizeClassifier.XLARGE !== tmp) {
    num = 6;
    if (arg1(dependencyMap[1]).WindowSizeClassifier.LARGE !== tmp) {
      num = 4;
      if (arg1(dependencyMap[1]).WindowSizeClassifier.NORMAL !== tmp) {
        num = 3;
        if (arg1(dependencyMap[1]).WindowSizeClassifier.SMALL !== tmp) {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const error = new Error("Unknown window size classifier: " + tmp);
          throw error;
        }
      }
    }
  }
  const arg1 = num;
  const result = 17 * num;
  const ref = React.useRef(result);
  const importDefault = ref;
  const items = [num];
  const effect = React.useEffect(() => {
    ref.current = 17 * num;
  }, items);
  const obj = { itemsPerRow: num, itemsPageSize: result, itemsPageSizeRef: ref };
  return obj;
};
