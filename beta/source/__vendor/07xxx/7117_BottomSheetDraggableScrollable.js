// Module ID: 7117
// Function ID: 7118
// Name: BottomSheetDraggableScrollable
// Dependencies: [19, 21, 6929]
// Exports: BottomSheetDraggableScrollable

// Module 7117 (BottomSheetDraggableScrollable)
import LegacyBaseButton from "LegacyBaseButton" /* 6929 */;
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
