// Module ID: 7087
// Function ID: 7088
// Name: BottomSheetDraggableScrollable
// Dependencies: [19, 21, 6899]
// Exports: BottomSheetDraggableScrollable

// Module 7087 (BottomSheetDraggableScrollable)
import LegacyBaseButton from "LegacyBaseButton" /* 6899 */;
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
