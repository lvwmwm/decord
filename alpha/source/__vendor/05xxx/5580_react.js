// Module ID: 5580
// Function ID: 5581
// Name: react
// Dependencies: [19, 5581]
// Exports: useBottomSheetModal

// Module 5580 (react)
import react from "react" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 5581 */;

const useContext = react.useContext;

export const useBottomSheetModal = () => {
  const tmp = useContext(BottomSheetContext.BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
};
