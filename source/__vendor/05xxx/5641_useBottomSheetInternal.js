// Module ID: 5641
// Function ID: 5642
// Name: useBottomSheetInternal
// Dependencies: [19, 5642]
// Exports: useBottomSheetInternal

// Module 5641 (useBottomSheetInternal)
import noop from "noop" /* 19 */;
import context from "context" /* 5642 */;

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
