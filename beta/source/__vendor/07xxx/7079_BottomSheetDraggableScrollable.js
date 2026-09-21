// Module ID: 7079
// Function ID: 7080
// Name: BottomSheetDraggableScrollable
// Dependencies: [19, 21, 6891]
// Exports: BottomSheetDraggableScrollable

// Module 7079 (BottomSheetDraggableScrollable)
import LegacyBaseButton from "LegacyBaseButton" /* 6891 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export const BottomSheetDraggableScrollable = function BottomSheetDraggableScrollable(arg0) {
  ({ scrollableGesture, children } = arg0);
  let tmp = children;
  if (scrollableGesture) {
    const obj = { gesture: scrollableGesture, children };
    tmp = jsx(LegacyBaseButton.GestureDetector, { gesture: scrollableGesture, children });
  }
  return tmp;
};
