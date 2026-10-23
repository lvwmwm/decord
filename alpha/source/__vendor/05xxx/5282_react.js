// Module ID: 5282
// Function ID: 5283
// Name: react
// Dependencies: [19, 5278]
// Exports: useBottomSheetModalInternal

// Module 5282 (react)
import react from "react" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 5278 */;

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
