// Module ID: 5445
// Function ID: 5446
// Name: useBottomSheet
// Dependencies: [19, 5446]
// Exports: useBottomSheet

// Module 5445 (useBottomSheet)
import { useContext } from "noop";


export const useBottomSheet = () => {
  const tmp = useContext(require(5446) /* context */.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
