// Module ID: 5582
// Function ID: 5583
// Name: useBottomSheet
// Dependencies: [19, 5583]
// Exports: useBottomSheet

// Module 5582 (useBottomSheet)
import noop from "noop" /* 19 */;
import context from "context" /* 5583 */;

const useContext = noop.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(context.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
