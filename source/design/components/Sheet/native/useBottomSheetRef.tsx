// Module ID: 7186
// Function ID: 57880
// Name: useBottomSheetRef
// Dependencies: [31, 2]
// Exports: useBottomSheetRef

// Module 7186 (useBottomSheetRef)
import result from "result";

const result = require("set").fileFinishedImporting("design/components/Sheet/native/useBottomSheetRef.tsx");

export const useBottomSheetRef = function useBottomSheetRef() {
  ref = ref.useRef(null);
  const items = [ref];
  return {
    bottomSheetRef: ref,
    bottomSheetClose: ref.useCallback(() => {
      const current = ref.current;
      if (null != current) {
        current.closeActionSheet();
      }
    }, items)
  };
};
