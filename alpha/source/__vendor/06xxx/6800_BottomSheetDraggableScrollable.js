// Module ID: 6800
// Function ID: 6801
// Name: BottomSheetDraggableScrollable
// Dependencies: [19, 21, 6612]
// Exports: BottomSheetDraggableScrollable

// Module 6800 (BottomSheetDraggableScrollable)
import Fragment from "Fragment" /* 21 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6612 */;
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
