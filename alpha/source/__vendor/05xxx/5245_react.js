// Module ID: 5245
// Function ID: 5246
// Name: react
// Dependencies: [19, 5241]
// Exports: useBottomSheetModalInternal

// Module 5245 (react)
import react from "react" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 5241 */;

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
