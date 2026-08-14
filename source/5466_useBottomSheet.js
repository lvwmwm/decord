// Module ID: 5466
// Function ID: 5467
// Name: useBottomSheet
// Dependencies: [19, 5467]
// Exports: useBottomSheet

// Module 5466 (useBottomSheet)
import { useContext } from "noop";


export const useBottomSheet = () => {
  const tmp = useContext(require(5467) /* context */.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
