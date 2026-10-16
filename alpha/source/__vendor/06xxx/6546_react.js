// Module ID: 6546
// Function ID: 6547
// Name: react
// Dependencies: [19, 6542]
// Exports: useBottomSheetModalInternal

// Module 6546 (react)
import react from "react" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 6542 */;

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
