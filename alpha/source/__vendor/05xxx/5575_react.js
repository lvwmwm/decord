// Module ID: 5575
// Function ID: 5576
// Name: react
// Dependencies: [19, 5571]
// Exports: useBottomSheetModalInternal

// Module 5575 (react)
import react from "react" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 5571 */;

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
