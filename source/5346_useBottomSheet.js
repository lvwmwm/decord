// Module ID: 5346
// Function ID: 5347
// Name: useBottomSheet
// Dependencies: [19, 5347]
// Exports: useBottomSheet

// Module 5346 (useBottomSheet)
import { useContext } from "noop";


export const useBottomSheet = () => {
  const tmp = useContext(require(5347) /* context */.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
