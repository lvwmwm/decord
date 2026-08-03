// Module ID: 5317
// Function ID: 5318
// Name: useBottomSheet
// Dependencies: [19, 5318]
// Exports: useBottomSheet

// Module 5317 (useBottomSheet)
import { useContext } from "noop";


export const useBottomSheet = () => {
  const tmp = useContext(require(5318) /* context */.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
