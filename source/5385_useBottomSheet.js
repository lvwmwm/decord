// Module ID: 5385
// Function ID: 5386
// Name: useBottomSheet
// Dependencies: [19, 5386]
// Exports: useBottomSheet

// Module 5385 (useBottomSheet)
import { useContext } from "noop";


export const useBottomSheet = () => {
  const tmp = useContext(require(5386) /* context */.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
