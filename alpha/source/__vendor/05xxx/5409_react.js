// Module ID: 5409
// Function ID: 5410
// Name: react
// Dependencies: [19, 5405]
// Exports: useBottomSheetModalInternal

// Module 5409 (react)
import react from "react" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 5405 */;

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
