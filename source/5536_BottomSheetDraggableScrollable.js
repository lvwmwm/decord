// Module ID: 5536
// Function ID: 5537
// Name: BottomSheetDraggableScrollable
// Dependencies: [19, 21, 5407]
// Exports: BottomSheetDraggableScrollable

// Module 5536 (BottomSheetDraggableScrollable)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;

export const BottomSheetDraggableScrollable = function BottomSheetDraggableScrollable(arg0) {
  let children;
  let scrollableGesture;
  ({ scrollableGesture, children } = arg0);
  let tmp = children;
  if (scrollableGesture) {
    const obj = { gesture: null, children: null };
    obj[0] = scrollableGesture;
    obj[1] = children;
    tmp = jsx(require(5407) /* Directions */.GestureDetector, { gesture: null, children: null });
  }
  return tmp;
};
