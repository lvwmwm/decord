// Module ID: 6127
// Function ID: 6128
// Name: react
// Dependencies: [19, 6123]
// Exports: useBottomSheetModalInternal

// Module 6127 (react)
import react from "react" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 6123 */;

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
