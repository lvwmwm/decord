// Module ID: 5320
// Function ID: 5321
// Name: react
// Dependencies: [19, 5316]
// Exports: useBottomSheetModalInternal

// Module 5320 (react)
import react from "react" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 5316 */;

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
