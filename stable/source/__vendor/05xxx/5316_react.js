// Module ID: 5316
// Function ID: 5317
// Name: react
// Dependencies: [19, 5312]
// Exports: useBottomSheetModalInternal

// Module 5316 (react)
import react from "react" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 5312 */;

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
