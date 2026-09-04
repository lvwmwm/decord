// Module ID: 6573
// Function ID: 6574
// Name: useBottomSheet
// Dependencies: [19, 6574]
// Exports: useBottomSheet

// Module 6573 (useBottomSheet)
import noop from "noop" /* 19 */;
import context from "context" /* 6574 */;

const useContext = noop.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(context.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
