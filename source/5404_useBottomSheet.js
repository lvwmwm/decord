// Module ID: 5404
// Function ID: 5405
// Name: useBottomSheet
// Dependencies: [19, 5405]
// Exports: useBottomSheet

// Module 5404 (useBottomSheet)
import { useContext } from "noop";


export const useBottomSheet = () => {
  const tmp = useContext(require(5405) /* context */.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
