// Module ID: 6594
// Function ID: 6595
// Name: react
// Dependencies: [19, 6595]
// Exports: useBottomSheetModal

// Module 6594 (react)
import react from "react" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 6595 */;

const useContext = react.useContext;

export const useBottomSheetModal = () => {
  const tmp = useContext(BottomSheetContext.BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
};
