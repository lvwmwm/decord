// Module ID: 5270
// Function ID: 5271
// Name: react
// Dependencies: [19, 5266]
// Exports: useBottomSheetModalInternal

// Module 5270 (react)
import react from "react" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 5266 */;

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
