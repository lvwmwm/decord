// Module ID: 5160
// Function ID: 5161
// Name: react
// Dependencies: [19, 5156]
// Exports: useBottomSheetModalInternal

// Module 5160 (react)
import react from "react" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 5156 */;

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
