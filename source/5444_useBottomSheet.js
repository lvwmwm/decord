// Module ID: 5444
// Function ID: 5445
// Name: useBottomSheet
// Dependencies: [19, 5445]
// Exports: useBottomSheet

// Module 5444 (useBottomSheet)
import { useContext } from "noop";


export const useBottomSheet = () => {
  const tmp = useContext(require(5445) /* context */.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
