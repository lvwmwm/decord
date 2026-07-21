// Module ID: 5222
// Function ID: 44170
// Name: useBottomSheetImperativeHandle
// Dependencies: []
// Exports: useBottomSheetImperativeHandle

// Module 5222 (useBottomSheetImperativeHandle)
let closure_0 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[1]).fileFinishedImporting("design/components/Sheet/native/BottomSheetHandle.tsx");

export const useBottomSheetImperativeHandle = function useBottomSheetImperativeHandle(arg0, ref) {
  const React = ref;
  const items = [ref];
  const imperativeHandle = React.useImperativeHandle(arg0, () => ({
    expandActionSheet() {
      const current = closure_0.current;
      if (null != current) {
        current.expand();
      }
    },
    closeActionSheet(force) {
      force = undefined;
      if (null != force) {
        force = force.force;
      }
      if (true === force) {
        const current2 = closure_0.current;
        if (null != current2) {
          current2.forceClose();
        }
      } else {
        const current = closure_0.current;
        if (null != current) {
          current.close();
        }
      }
    },
    collapseActionSheet() {
      const current = closure_0.current;
      if (null != current) {
        current.collapse();
      }
    },
    snapToIndex(current, items) {
      current = closure_0.current;
      if (null != current) {
        current.snapToIndex(current);
      }
    }
  }), items);
};
