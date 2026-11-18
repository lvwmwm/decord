// Module ID: 5070
// Function ID: 5071
// Name: react
// Dependencies: [19, 5066]
// Exports: useBottomSheetModalInternal

// Module 5070 (react)
import react from "react" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 5066 */;

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
