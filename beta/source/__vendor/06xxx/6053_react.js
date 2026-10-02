// Module ID: 6053
// Function ID: 6054
// Name: react
// Dependencies: [19, 6049]
// Exports: useBottomSheetModalInternal

// Module 6053 (react)
import react from "react" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 6049 */;

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
