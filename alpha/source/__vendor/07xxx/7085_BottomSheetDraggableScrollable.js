// Module ID: 7085
// Function ID: 7086
// Name: BottomSheetDraggableScrollable
// Dependencies: [19, 21, 6897]
// Exports: BottomSheetDraggableScrollable

// Module 7085 (BottomSheetDraggableScrollable)
import LegacyBaseButton from "LegacyBaseButton" /* 6897 */;
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
