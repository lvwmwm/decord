// Module ID: 5407
// Function ID: 5408
// Name: react
// Dependencies: [19, 5403]
// Exports: useBottomSheetModalInternal

// Module 5407 (react)
import react from "react" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 5403 */;

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
