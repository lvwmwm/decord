// Module ID: 5159
// Function ID: 5160
// Name: react
// Dependencies: [19, 5160]
// Exports: useBottomSheetModal

// Module 5159 (react)
import react from "react" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 5160 */;

const useContext = react.useContext;

export const useBottomSheetModal = () => {
  const tmp = useContext(BottomSheetContext.BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
};
