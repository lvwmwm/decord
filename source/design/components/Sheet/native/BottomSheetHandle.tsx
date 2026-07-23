// Module ID: 5445
// Function ID: 46566
// Name: useBottomSheetImperativeHandle
// Dependencies: [31, 2]
// Exports: useBottomSheetImperativeHandle

// Module 5445 (useBottomSheetImperativeHandle)
import result from "result";

const result = require("set").fileFinishedImporting("design/components/Sheet/native/BottomSheetHandle.tsx");

export const useBottomSheetImperativeHandle = function useBottomSheetImperativeHandle(arg0, ref) {
  const React = ref;
  const items = [ref];
  const imperativeHandle = React.useImperativeHandle(arg0, () => ({
    expandActionSheet() {
      const current = outer1_0.current;
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
        const current2 = outer1_0.current;
        if (null != current2) {
          current2.forceClose();
        }
      } else {
        const current = outer1_0.current;
        if (null != current) {
          current.close();
        }
      }
    },
    collapseActionSheet() {
      const current = outer1_0.current;
      if (null != current) {
        current.collapse();
      }
    },
    snapToIndex(current, items) {
      current = outer1_0.current;
      if (null != current) {
        current.snapToIndex(current);
      }
    }
  }), items);
};
