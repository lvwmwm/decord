// Module ID: 5638
// Function ID: 5639
// Name: useBottomSheet
// Dependencies: [19, 5639]
// Exports: useBottomSheet

// Module 5638 (useBottomSheet)
import noop from "noop" /* 19 */;
import context from "context" /* 5639 */;

const useContext = noop.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(context.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
