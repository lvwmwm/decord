// Module ID: 5629
// Function ID: 5630
// Name: BottomSheetDraggableScrollable
// Dependencies: [19, 21, 5430]
// Exports: BottomSheetDraggableScrollable

// Module 5629 (BottomSheetDraggableScrollable)
import Fragment from "Fragment" /* 21 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5430 */;
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
