// Module ID: 5240
// Function ID: 5241
// Name: react
// Dependencies: [19, 5241]
// Exports: useBottomSheetModal

// Module 5240 (react)
import react from "react" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 5241 */;

const useContext = react.useContext;

export const useBottomSheetModal = () => {
  const tmp = useContext(BottomSheetContext.BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
};
