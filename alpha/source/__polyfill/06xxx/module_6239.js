// Module ID: 6239
// Function ID: 6240
// Dependencies: [19, 6240]
// Exports: useBottomSheetInternal

// Module 6239
import _mod19 from "module_19" /* 19 */;
import _mod6240 from "module_6240" /* 6240 */;

const useContext = _mod19.useContext;

export const useBottomSheetInternal = function useBottomSheetInternal(arg0) {
  const tmp = useContext(_mod6240.BottomSheetInternalContext);
  if (true !== arg0) {
    if (null === tmp) {
      throw "'useBottomSheetInternal' cannot be used out of the BottomSheet!";
    }
  }
  return tmp;
};
