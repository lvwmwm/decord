// Module ID: 9700
// Function ID: 75503
// Name: useMediaKeyboardItemsPerRow
// Dependencies: [31, 3985, 2]
// Exports: useMediaKeyboardItemsPerRow

// Module 9700 (useMediaKeyboardItemsPerRow)
import result from "result";

const require = arg1;
let result = require("set").fileFinishedImporting("modules/media_keyboard/native/useMediaKeyboardItemsPerRow.tsx");

export const useMediaKeyboardItemsPerRow = function useMediaKeyboardItemsPerRow() {
  const tmp = ref(3985)();
  let num = 8;
  if (num(3985).WindowSizeClassifier.XLARGE !== tmp) {
    num = 6;
    if (num(3985).WindowSizeClassifier.LARGE !== tmp) {
      num = 4;
      if (num(3985).WindowSizeClassifier.NORMAL !== tmp) {
        num = 3;
        if (num(3985).WindowSizeClassifier.SMALL !== tmp) {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const error = new Error("Unknown window size classifier: " + tmp);
          throw error;
        }
      }
    }
  }
  const result = 17 * num;
  ref = React.useRef(result);
  const items = [num];
  const effect = React.useEffect(() => {
    ref.current = 17 * num;
  }, items);
  const obj = { itemsPerRow: num, itemsPageSize: result, itemsPageSizeRef: ref };
  return obj;
};
