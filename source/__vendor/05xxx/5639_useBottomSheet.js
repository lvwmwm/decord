// Module ID: 5639
// Function ID: 5640
// Name: useBottomSheet
// Dependencies: [19, 5640]
// Exports: useBottomSheet

// Module 5639 (useBottomSheet)
import noop from "noop" /* 19 */;
import context from "context" /* 5640 */;

const useContext = noop.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(context.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
