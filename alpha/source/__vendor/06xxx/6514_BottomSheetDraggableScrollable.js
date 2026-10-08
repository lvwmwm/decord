// Module ID: 6514
// Function ID: 6515
// Name: BottomSheetDraggableScrollable
// Dependencies: [19, 21, 6326]
// Exports: BottomSheetDraggableScrollable

// Module 6514 (BottomSheetDraggableScrollable)
import Fragment from "Fragment" /* 21 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6326 */;
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
