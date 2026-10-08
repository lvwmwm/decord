// Module ID: 6313
// Function ID: 6314
// Name: react
// Dependencies: [19, 6309]
// Exports: useBottomSheetModalInternal

// Module 6313 (react)
import react from "react" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 6309 */;

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
