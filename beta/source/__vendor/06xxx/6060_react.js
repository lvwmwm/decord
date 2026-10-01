// Module ID: 6060
// Function ID: 6061
// Name: react
// Dependencies: [19, 6056]
// Exports: useBottomSheetModalInternal

// Module 6060 (react)
import react from "react" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 6056 */;

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
