// Module ID: 5380
// Function ID: 46079
// Name: BottomSheetDraggableScrollable
// Dependencies: [31, 33, 5251]
// Exports: BottomSheetDraggableScrollable

// Module 5380 (BottomSheetDraggableScrollable)
import "result";
import { jsx } from "jsxProd";

const require = arg1;

export const BottomSheetDraggableScrollable = function BottomSheetDraggableScrollable(arg0) {
  let children;
  let scrollableGesture;
  ({ scrollableGesture, children } = arg0);
  let tmp = children;
  if (scrollableGesture) {
    const obj = { gesture: scrollableGesture, children };
    tmp = jsx(require(5251) /* Directions */.GestureDetector, { gesture: scrollableGesture, children });
  }
  return tmp;
};
