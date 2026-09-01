// Module ID: 8080
// Function ID: 8081
// Name: useBottomSheetRef
// Dependencies: [19, 2]
// Exports: useBottomSheetRef

// Module 8080 (useBottomSheetRef)
import closure_0 from "noop" /* 19 */;

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
