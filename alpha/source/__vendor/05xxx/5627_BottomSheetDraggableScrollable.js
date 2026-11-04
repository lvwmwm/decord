// Module ID: 5627
// Function ID: 5628
// Name: BottomSheetDraggableScrollable
// Dependencies: [19, 21, 5428]
// Exports: BottomSheetDraggableScrollable

// Module 5627 (BottomSheetDraggableScrollable)
import Fragment from "Fragment" /* 21 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5428 */;
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
