// Module ID: 6909
// Function ID: 6910
// Dependencies: [19, 6910]
// Exports: useBottomSheetInternal

// Module 6909
import _mod19 from "module_19" /* 19 */;
import _mod6910 from "module_6910" /* 6910 */;

const useContext = _mod19.useContext;

export const useBottomSheetInternal = function useBottomSheetInternal(arg0) {
  const tmp = useContext(_mod6910.BottomSheetInternalContext);
  if (true !== arg0) {
    if (null === tmp) {
      throw "'useBottomSheetInternal' cannot be used out of the BottomSheet!";
    }
  }
  return tmp;
};
