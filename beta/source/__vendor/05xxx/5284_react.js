// Module ID: 5284
// Function ID: 5285
// Name: react
// Dependencies: [19, 5280]
// Exports: useBottomSheetModalInternal

// Module 5284 (react)
import react from "react" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 5280 */;

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
