// Module ID: 6599
// Function ID: 6600
// Name: react
// Dependencies: [19, 6595]
// Exports: useBottomSheetModalInternal

// Module 6599 (react)
import react from "react" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 6595 */;

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
