// Module ID: 5036
// Function ID: 5037
// Name: react
// Dependencies: [19, 5037]
// Exports: useBottomSheetModal

// Module 5036 (react)
import react from "react" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 5037 */;

const useContext = react.useContext;

export const useBottomSheetModal = () => {
  const tmp = useContext(BottomSheetContext.BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
};
