// Module ID: 5229
// Function ID: 45239
// Name: useBottomSheet
// Dependencies: [31, 5230]
// Exports: useBottomSheet

// Module 5229 (useBottomSheet)
import { useContext } from "result";


export const useBottomSheet = function useBottomSheet() {
  const tmp = useContext(require(5230) /* context */.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
