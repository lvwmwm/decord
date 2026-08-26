// Module ID: 5577
// Function ID: 5578
// Name: useBottomSheet
// Dependencies: [19, 5578]
// Exports: useBottomSheet

// Module 5577 (useBottomSheet)
import noop from "noop" /* 19 */;
import context from "context" /* 5578 */;

const useContext = noop.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(context.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
