// Module ID: 7615
// Function ID: 7616
// Name: react
// Dependencies: [19, 2]
// Exports: useBottomSheetRef

// Module 7615 (react)
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("design/components/Sheet/native/useBottomSheetRef.tsx");

export const useBottomSheetRef = function useBottomSheetRef() {
  const ref = react.useRef(null);
  const items = [ref];
  const obj = {
    bottomSheetRef: ref,
    bottomSheetClose: react.useCallback(() => {
      const current = ref.current;
      if (current != null) {
        current.closeActionSheet();
      }
    }, items)
  };
  return obj;
};
