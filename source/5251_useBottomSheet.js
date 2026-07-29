// Module ID: 5251
// Function ID: 5252
// Name: useBottomSheet
// Dependencies: [19, 5252]
// Exports: useBottomSheet

// Module 5251 (useBottomSheet)
import { useContext } from "noop";


export const useBottomSheet = () => {
  const tmp = useContext(require(5252) /* context */.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
