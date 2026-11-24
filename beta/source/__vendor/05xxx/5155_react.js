// Module ID: 5155
// Function ID: 5156
// Name: react
// Dependencies: [19, 5156]
// Exports: useBottomSheetModal

// Module 5155 (react)
import react from "react" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 5156 */;

const useContext = react.useContext;

export const useBottomSheetModal = () => {
  const tmp = useContext(BottomSheetContext.BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
};
