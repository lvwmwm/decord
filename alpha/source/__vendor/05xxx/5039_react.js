// Module ID: 5039
// Function ID: 5040
// Name: react
// Dependencies: [19, 5035]
// Exports: useBottomSheetModalInternal

// Module 5039 (react)
import react from "react" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 5035 */;

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
