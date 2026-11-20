// Module ID: 5253
// Function ID: 5254
// Name: BottomSheetDraggableScrollable
// Dependencies: [19, 21, 5054]
// Exports: BottomSheetDraggableScrollable

// Module 5253 (BottomSheetDraggableScrollable)
import Fragment from "Fragment" /* 21 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5054 */;
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
