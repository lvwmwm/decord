// Module ID: 5065
// Function ID: 5066
// Name: react
// Dependencies: [19, 5066]
// Exports: useBottomSheetModal

// Module 5065 (react)
import react from "react" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 5066 */;

const useContext = react.useContext;

export const useBottomSheetModal = () => {
  const tmp = useContext(BottomSheetContext.BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
};
