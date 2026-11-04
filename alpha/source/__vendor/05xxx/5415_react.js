// Module ID: 5415
// Function ID: 5416
// Name: react
// Dependencies: [19, 5411]
// Exports: useBottomSheetModalInternal

// Module 5415 (react)
import react from "react" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 5411 */;

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
