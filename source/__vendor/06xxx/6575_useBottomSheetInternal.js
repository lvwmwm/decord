// Module ID: 6575
// Function ID: 6576
// Name: useBottomSheetInternal
// Dependencies: [19, 6576]
// Exports: useBottomSheetInternal

// Module 6575 (useBottomSheetInternal)
import noop from "noop" /* 19 */;
import context from "context" /* 6576 */;

const useContext = noop.useContext;

export const useBottomSheetInternal = function useBottomSheetInternal(arg0) {
  const tmp = useContext(context.BottomSheetInternalContext);
  if (true !== arg0) {
    if (null === tmp) {
      throw "'useBottomSheetInternal' cannot be used out of the BottomSheet!";
    }
  }
  return tmp;
};
