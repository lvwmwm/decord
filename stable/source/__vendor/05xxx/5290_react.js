// Module ID: 5290
// Function ID: 5291
// Name: react
// Dependencies: [19, 5286]
// Exports: useBottomSheetModalInternal

// Module 5290 (react)
import react from "react" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 5286 */;

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
