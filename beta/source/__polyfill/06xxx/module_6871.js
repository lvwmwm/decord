// Module ID: 6871
// Function ID: 6872
// Dependencies: [19, 6872]
// Exports: useBottomSheetInternal

// Module 6871
import _mod19 from "module_19" /* 19 */;
import _mod6872 from "module_6872" /* 6872 */;

const useContext = _mod19.useContext;

export const useBottomSheetInternal = function useBottomSheetInternal(arg0) {
  const tmp = useContext(_mod6872.BottomSheetInternalContext);
  if (true !== arg0) {
    if (null === tmp) {
      throw "'useBottomSheetInternal' cannot be used out of the BottomSheet!";
    }
  }
  return tmp;
};
