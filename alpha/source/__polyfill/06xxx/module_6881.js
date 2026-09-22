// Module ID: 6881
// Function ID: 6882
// Dependencies: [19, 6882]
// Exports: useBottomSheetModal

// Module 6881
import _mod19 from "module_19" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 6882 */;

const useContext = _mod19.useContext;

export const useBottomSheetModal = () => {
  const tmp = useContext(BottomSheetContext.BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
};
