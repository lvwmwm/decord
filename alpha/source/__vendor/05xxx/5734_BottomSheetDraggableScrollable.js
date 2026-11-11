// Module ID: 5734
// Function ID: 5735
// Name: BottomSheetDraggableScrollable
// Dependencies: [19, 21, 5535]
// Exports: BottomSheetDraggableScrollable

// Module 5734 (BottomSheetDraggableScrollable)
import Fragment from "Fragment" /* 21 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5535 */;
import react from "react" /* 19 */;

const jsx = Fragment.jsx;

export function BottomSheetDraggableScrollable(arg0) {
  let children;
  let scrollableGesture;
  ({ scrollableGesture, children } = arg0);
  let tmp = children;
  if (scrollableGesture) {
    tmp = jsx(LegacyBaseButton.GestureDetector, { gesture: scrollableGesture, children });
  }
  return tmp;
}
