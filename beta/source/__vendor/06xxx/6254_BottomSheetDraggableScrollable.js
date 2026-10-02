// Module ID: 6254
// Function ID: 6255
// Name: BottomSheetDraggableScrollable
// Dependencies: [19, 21, 6066]
// Exports: BottomSheetDraggableScrollable

// Module 6254 (BottomSheetDraggableScrollable)
import Fragment from "Fragment" /* 21 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6066 */;
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
