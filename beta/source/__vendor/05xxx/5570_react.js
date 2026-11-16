// Module ID: 5570
// Function ID: 5571
// Name: react
// Dependencies: [19, 5571]
// Exports: useBottomSheetModal

// Module 5570 (react)
import react from "react" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 5571 */;

const useContext = react.useContext;

export const useBottomSheetModal = () => {
  const tmp = useContext(BottomSheetContext.BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
};
