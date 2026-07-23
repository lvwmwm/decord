// Module ID: 5197
// Function ID: 45116
// Name: useBottomSheetInternal
// Dependencies: [31, 5198]
// Exports: useBottomSheetInternal

// Module 5197 (useBottomSheetInternal)
import { useContext } from "result";


export const useBottomSheetInternal = function useBottomSheetInternal(arg0) {
  const tmp = useContext(require(5198) /* context */.BottomSheetInternalContext);
  if (true !== arg0) {
    if (null === tmp) {
      throw "'useBottomSheetInternal' cannot be used out of the BottomSheet!";
    }
  }
  return tmp;
};
