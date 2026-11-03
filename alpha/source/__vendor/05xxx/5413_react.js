// Module ID: 5413
// Function ID: 5414
// Name: react
// Dependencies: [19, 5409]
// Exports: useBottomSheetModalInternal

// Module 5413 (react)
import react from "react" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 5409 */;

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
