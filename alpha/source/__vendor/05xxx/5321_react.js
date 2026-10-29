// Module ID: 5321
// Function ID: 5322
// Name: react
// Dependencies: [19, 5317]
// Exports: useBottomSheetModalInternal

// Module 5321 (react)
import react from "react" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 5317 */;

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
