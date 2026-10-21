// Module ID: 5266
// Function ID: 5267
// Name: react
// Dependencies: [19, 5262]
// Exports: useBottomSheetModalInternal

// Module 5266 (react)
import react from "react" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 5262 */;

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
