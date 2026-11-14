// Module ID: 5585
// Function ID: 5586
// Name: react
// Dependencies: [19, 5581]
// Exports: useBottomSheetModalInternal

// Module 5585 (react)
import react from "react" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 5581 */;

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
