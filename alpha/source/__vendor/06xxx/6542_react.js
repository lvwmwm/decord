// Module ID: 6542
// Function ID: 6543
// Name: react
// Dependencies: [19, 6538]
// Exports: useBottomSheetModalInternal

// Module 6542 (react)
import react from "react" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 6538 */;

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
