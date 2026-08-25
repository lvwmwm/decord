// Module ID: 5511
// Function ID: 5512
// Name: useBottomSheet
// Dependencies: [19, 5512]
// Exports: useBottomSheet

// Module 5511 (useBottomSheet)
import noop from "noop" /* 19 */;
import context from "context" /* 5512 */;

const useContext = noop.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(context.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
