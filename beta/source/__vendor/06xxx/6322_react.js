// Module ID: 6322
// Function ID: 6323
// Name: react
// Dependencies: [19, 6318]
// Exports: useBottomSheetModalInternal

// Module 6322 (react)
import react from "react" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 6318 */;

const useContext = react.useContext;

export const useBottomSheetModalInternal = function useBottomSheetModalInternal(arg0) {
  const tmp = useContext(BottomSheetContext.BottomSheetModalInternalContext);
  if (true !== arg0) {
    if (null === tmp) {
      throw "'BottomSheetModalInternalContext' cannot be null!";
    }
  }
  return tmp;
};
