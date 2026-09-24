// Module ID: 6903
// Function ID: 6904
// Dependencies: [19, 6904]
// Exports: useBottomSheetInternal

// Module 6903
import _mod19 from "module_19" /* 19 */;
import _mod6904 from "module_6904" /* 6904 */;

const useContext = _mod19.useContext;

export const useBottomSheetInternal = function useBottomSheetInternal(arg0) {
  const tmp = useContext(_mod6904.BottomSheetInternalContext);
  if (true !== arg0) {
    if (null === tmp) {
      throw "'useBottomSheetInternal' cannot be used out of the BottomSheet!";
    }
  }
  return tmp;
};
