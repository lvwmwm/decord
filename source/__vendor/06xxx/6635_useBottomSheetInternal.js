// Module ID: 6635
// Function ID: 6636
// Name: useBottomSheetInternal
// Dependencies: [19, 6636]
// Exports: useBottomSheetInternal

// Module 6635 (useBottomSheetInternal)
import noop from "noop" /* 19 */;
import context from "context" /* 6636 */;

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
