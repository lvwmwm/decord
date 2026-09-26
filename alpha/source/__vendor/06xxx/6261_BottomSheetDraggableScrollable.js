// Module ID: 6261
// Function ID: 6262
// Name: BottomSheetDraggableScrollable
// Dependencies: [19, 21, 6073]
// Exports: BottomSheetDraggableScrollable

// Module 6261 (BottomSheetDraggableScrollable)
import LegacyBaseButton from "LegacyBaseButton" /* 6073 */;
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
