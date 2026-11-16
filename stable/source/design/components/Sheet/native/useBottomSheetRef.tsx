// Module ID: 8845
// Function ID: 8846
// Name: react
// Dependencies: [19, 2]
// Exports: useBottomSheetRef

// Module 8845 (react)
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("design/components/Sheet/native/useBottomSheetRef.tsx");

export function useBottomSheetRef() {
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
}
