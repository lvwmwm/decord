// Module ID: 6537
// Function ID: 6538
// Name: react
// Dependencies: [19, 6538]
// Exports: useBottomSheetModal

// Module 6537 (react)
import react from "react" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 6538 */;

const useContext = react.useContext;

export const useBottomSheetModal = () => {
  const tmp = useContext(BottomSheetContext.BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
};
