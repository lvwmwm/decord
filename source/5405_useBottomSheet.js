// Module ID: 5405
// Function ID: 5406
// Name: useBottomSheet
// Dependencies: [19, 5406]
// Exports: useBottomSheet

// Module 5405 (useBottomSheet)
import { useContext } from "noop";


export const useBottomSheet = () => {
  const tmp = useContext(require(5406) /* context */.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
