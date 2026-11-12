// Module ID: 5651
// Function ID: 5652
// Name: BottomSheetDraggableScrollable
// Dependencies: [19, 21, 5452]
// Exports: BottomSheetDraggableScrollable

// Module 5651 (BottomSheetDraggableScrollable)
import Fragment from "Fragment" /* 21 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5452 */;
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
