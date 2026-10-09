// Module ID: 6521
// Function ID: 6522
// Name: BottomSheetDraggableScrollable
// Dependencies: [19, 21, 6333]
// Exports: BottomSheetDraggableScrollable

// Module 6521 (BottomSheetDraggableScrollable)
import Fragment from "Fragment" /* 21 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6333 */;
import react from "react" /* 19 */;

const jsx = Fragment.jsx;

export const BottomSheetDraggableScrollable = function BottomSheetDraggableScrollable(arg0) {
  let children;
  let scrollableGesture;
  ({ scrollableGesture, children } = arg0);
  let tmp = children;
  if (scrollableGesture) {
    tmp = jsx(LegacyBaseButton.GestureDetector, { gesture: scrollableGesture, children });
  }
  return tmp;
};
