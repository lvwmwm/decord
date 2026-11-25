// Module ID: 5259
// Function ID: 5260
// Name: react
// Dependencies: [19, 5255]
// Exports: useBottomSheetModalInternal

// Module 5259 (react)
import react from "react" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 5255 */;

const useContext = react.useContext;

export function useBottomSheetModalInternal(arg0) {
  const tmp = useContext(BottomSheetContext.BottomSheetModalInternalContext);
  if (true !== arg0) {
    if (null === tmp) {
      throw "'BottomSheetModalInternalContext' cannot be null!";
    }
  }
  return tmp;
}
