// Module ID: 6048
// Function ID: 6049
// Name: react
// Dependencies: [19, 6049]
// Exports: useBottomSheetModal

// Module 6048 (react)
import react from "react" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 6049 */;

const useContext = react.useContext;

export const useBottomSheetModal = () => {
  const tmp = useContext(BottomSheetContext.BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
};
