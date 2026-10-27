// Module ID: 5285
// Function ID: 5286
// Name: react
// Dependencies: [19, 5281]
// Exports: useBottomSheetModalInternal

// Module 5285 (react)
import react from "react" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 5281 */;

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
