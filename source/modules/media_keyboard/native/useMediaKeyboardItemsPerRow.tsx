// Module ID: 9664
// Function ID: 75228
// Name: useMediaKeyboardItemsPerRow
// Dependencies: [31, 4020, 2]
// Exports: useMediaKeyboardItemsPerRow

// Module 9664 (useMediaKeyboardItemsPerRow)
import result from "result";

const require = arg1;
let result = require("set").fileFinishedImporting("modules/media_keyboard/native/useMediaKeyboardItemsPerRow.tsx");

export const useMediaKeyboardItemsPerRow = function useMediaKeyboardItemsPerRow() {
  const tmp = ref(4020)();
  let num = 8;
  if (num(4020).WindowSizeClassifier.XLARGE !== tmp) {
    num = 6;
    if (num(4020).WindowSizeClassifier.LARGE !== tmp) {
      num = 4;
      if (num(4020).WindowSizeClassifier.NORMAL !== tmp) {
        num = 3;
        if (num(4020).WindowSizeClassifier.SMALL !== tmp) {
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
