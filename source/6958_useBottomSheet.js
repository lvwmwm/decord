// Module ID: 6958
// Function ID: 6959
// Name: useBottomSheet
// Dependencies: [19, 6959]
// Exports: useBottomSheet

// Module 6958 (useBottomSheet)
import { useContext } from "noop";


export const useBottomSheet = () => {
  const tmp = useContext(require(6959) /* context */.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
