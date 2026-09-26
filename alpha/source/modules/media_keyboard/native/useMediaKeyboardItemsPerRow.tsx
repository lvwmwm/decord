// Module ID: 10110
// Function ID: 10111
// Name: useMediaKeyboardItemsPerRow
// Dependencies: [19, 4696, 2]
// Exports: useMediaKeyboardItemsPerRow

// Module 10110 (useMediaKeyboardItemsPerRow)
import useWindowSizeClassifier from "useWindowSizeClassifier" /* 4696 */;
import noop from "module_19" /* 19 */;

const useWindowSizeClassifierDefault = useWindowSizeClassifier;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_keyboard/native/useMediaKeyboardItemsPerRow.tsx");

export const useMediaKeyboardItemsPerRow = function useMediaKeyboardItemsPerRow() {
  const tmp2 = useWindowSizeClassifierDefault();
  let itemsPerRow = 8;
  if (useWindowSizeClassifier.WindowSizeClassifier.XLARGE !== tmp2) {
    itemsPerRow = 6;
    if (tmp3(4696).WindowSizeClassifier.LARGE !== tmp2) {
      itemsPerRow = 4;
      if (tmp3(4696).WindowSizeClassifier.NORMAL !== tmp2) {
        itemsPerRow = 3;
        if (tmp3(4696).WindowSizeClassifier.SMALL !== tmp2) {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const error = new Error("Unknown window size classifier: " + tmp2);
          throw error;
        }
      }
    }
  }
  const itemsPageSize = 17 * itemsPerRow;
  const itemsPageSizeRef = noop.useRef(itemsPageSize);
  const items = [itemsPerRow];
  const effect = noop.useEffect(() => {
    itemsPageSizeRef.current = 17 * itemsPerRow;
  }, items);
  return { itemsPerRow, itemsPageSize, itemsPageSizeRef };
};
