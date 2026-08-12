// Module ID: 7445
// Function ID: 7446
// Name: useBottomSheetRef
// Dependencies: [19, 2]
// Exports: useBottomSheetRef

// Module 7445 (useBottomSheetRef)
import noop from "noop";

const result = require("set").fileFinishedImporting("design/components/Sheet/native/useBottomSheetRef.tsx");

export const useBottomSheetRef = function useBottomSheetRef() {
  ref = ref.useRef(null);
  const items = [ref];
  return {
    bottomSheetRef: ref,
    bottomSheetClose: ref.useCallback(() => {
      const current = ref.current;
      if (current != null) {
        current.closeActionSheet();
      }
    }, items)
  };
};
