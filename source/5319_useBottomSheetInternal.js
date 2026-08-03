// Module ID: 5319
// Function ID: 5320
// Name: useBottomSheetInternal
// Dependencies: [19, 5320]
// Exports: useBottomSheetInternal

// Module 5319 (useBottomSheetInternal)
import { useContext } from "noop";


export const useBottomSheetInternal = function useBottomSheetInternal(arg0) {
  const tmp = useContext(require(5320) /* context */.BottomSheetInternalContext);
  if (true !== arg0) {
    if (null === tmp) {
      throw "'useBottomSheetInternal' cannot be used out of the BottomSheet!";
    }
  }
  return tmp;
};
