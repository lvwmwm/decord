// Module ID: 5587
// Function ID: 5588
// Name: react
// Dependencies: [19, 2]
// Exports: useBottomSheetImperativeHandle

// Module 5587 (react)
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("design/components/Sheet/native/BottomSheetHandle.tsx");

export function useBottomSheetImperativeHandle(ref, ref1) {
  let closure_0 = ref1;
  const items = [ref1];
  const imperativeHandle = react.useImperativeHandle(ref, () => ({
    expandActionSheet() {
      const current = closure_1_0.current;
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
        const current2 = closure_1_0.current;
        if (current2 != null) {
          current2.forceClose();
        }
      } else {
        const current = closure_1_0.current;
        if (current != null) {
          current.close();
        }
      }
    },
    collapseActionSheet() {
      const current = closure_1_0.current;
      if (current != null) {
        current.collapse();
      }
    },
    snapToIndex(collapse) {
      const current = closure_1_0.current;
      if (current != null) {
        current.snapToIndex(collapse);
      }
    }
  }), items);
}
