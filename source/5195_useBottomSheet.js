// Module ID: 5195
// Function ID: 45113
// Name: useBottomSheet
// Dependencies: [31, 5196]
// Exports: useBottomSheet

// Module 5195 (useBottomSheet)
import { useContext } from "result";


export const useBottomSheet = function useBottomSheet() {
  const tmp = useContext(require(5196) /* context */.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
