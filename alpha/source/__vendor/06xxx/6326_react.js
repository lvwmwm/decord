// Module ID: 6326
// Function ID: 6327
// Name: react
// Dependencies: [19, 6322]
// Exports: useBottomSheetModalInternal

// Module 6326 (react)
import react from "react" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 6322 */;

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
