// Module ID: 6320
// Function ID: 6321
// Name: react
// Dependencies: [19, 6316]
// Exports: useBottomSheetModalInternal

// Module 6320 (react)
import react from "react" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 6316 */;

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
