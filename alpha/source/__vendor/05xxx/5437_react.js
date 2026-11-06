// Module ID: 5437
// Function ID: 5438
// Name: react
// Dependencies: [19, 5433]
// Exports: useBottomSheetModalInternal

// Module 5437 (react)
import react from "react" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 5433 */;

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
