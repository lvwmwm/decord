// Module ID: 5277
// Function ID: 5278
// Name: react
// Dependencies: [19, 5278]
// Exports: useBottomSheetModal

// Module 5277 (react)
import react from "react" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 5278 */;

const useContext = react.useContext;

export const useBottomSheetModal = () => {
  const tmp = useContext(BottomSheetContext.BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
};
