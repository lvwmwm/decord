// Module ID: 5041
// Function ID: 5042
// Name: react
// Dependencies: [19, 5037]
// Exports: useBottomSheetModalInternal

// Module 5041 (react)
import react from "react" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 5037 */;

const useContext = react.useContext;

export function useBottomSheetModalInternal(arg0) {
  const tmp = useContext(BottomSheetContext.BottomSheetModalInternalContext);
  if (true !== arg0) {
    if (null === tmp) {
      throw "'BottomSheetModalInternalContext' cannot be null!";
    }
  }
  return tmp;
}
