// Module ID: 5164
// Function ID: 5165
// Name: react
// Dependencies: [19, 5160]
// Exports: useBottomSheetModalInternal

// Module 5164 (react)
import react from "react" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 5160 */;

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
