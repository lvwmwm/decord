// Module ID: 6308
// Function ID: 6309
// Name: react
// Dependencies: [19, 6309]
// Exports: useBottomSheetModal

// Module 6308 (react)
import react from "react" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 6309 */;

const useContext = react.useContext;

export const useBottomSheetModal = () => {
  const tmp = useContext(BottomSheetContext.BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
};
