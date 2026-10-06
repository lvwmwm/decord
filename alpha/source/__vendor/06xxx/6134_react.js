// Module ID: 6134
// Function ID: 6135
// Name: react
// Dependencies: [19, 6130]
// Exports: useBottomSheetModalInternal

// Module 6134 (react)
import react from "react" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 6130 */;

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
