// Module ID: 5331
// Function ID: 5332
// Name: useBottomSheet
// Dependencies: [19, 5332]
// Exports: useBottomSheet

// Module 5331 (useBottomSheet)
import { useContext } from "noop";


export const useBottomSheet = () => {
  const tmp = useContext(require(5332) /* context */.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
