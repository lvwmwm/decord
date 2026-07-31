// Module ID: 5255
// Function ID: 5256
// Name: useBottomSheet
// Dependencies: [19, 5256]
// Exports: useBottomSheet

// Module 5255 (useBottomSheet)
import { useContext } from "noop";


export const useBottomSheet = () => {
  const tmp = useContext(require(5256) /* context */.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
