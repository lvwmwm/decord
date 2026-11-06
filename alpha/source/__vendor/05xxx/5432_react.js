// Module ID: 5432
// Function ID: 5433
// Name: react
// Dependencies: [19, 5433]
// Exports: useBottomSheetModal

// Module 5432 (react)
import react from "react" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 5433 */;

const useContext = react.useContext;

export const useBottomSheetModal = () => {
  const tmp = useContext(BottomSheetContext.BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
};
