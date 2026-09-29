// Module ID: 7430
// Function ID: 7431
// Name: Sheet/BottomSheetHandle
// Dependencies: [19, 2]
// Exports: useBottomSheetImperativeHandle

// Module 7430 (Sheet/BottomSheetHandle)
import noop from "module_19" /* 19 */;

const size = fn(2);
const result = size.fileFinishedImporting("design/components/Sheet/native/BottomSheetHandle.tsx");

export const useBottomSheetImperativeHandle = function useBottomSheetImperativeHandle(ref, ref) {
  closure_0 = ref;
  const items = [ref];
  const imperativeHandle = noop.useImperativeHandle(ref, () => ({
    expandActionSheet() {
      const current = ref.current;
      if (current != null) {
        current.expand();
      }
    },
    closeActionSheet(force) {
      force = undefined;
      if (force != null) {
        force = force.force;
      }
      if (true === force) {
        const current2 = ref.current;
        if (current2 != null) {
          current2.forceClose();
        }
      } else {
        const current = ref.current;
        if (current != null) {
          current.close();
        }
      }
    },
    collapseActionSheet() {
      const current = ref.current;
      if (current != null) {
        current.collapse();
      }
    },
    snapToIndex(collapse) {
      const current = ref.current;
      if (current != null) {
        current.snapToIndex(collapse);
      }
    }
  }), items);
};
