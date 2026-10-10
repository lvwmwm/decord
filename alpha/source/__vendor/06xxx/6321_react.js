// Module ID: 6321
// Function ID: 6322
// Name: react
// Dependencies: [19, 6317]
// Exports: useBottomSheetModalInternal

// Module 6321 (react)
import react from "react" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 6317 */;

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
