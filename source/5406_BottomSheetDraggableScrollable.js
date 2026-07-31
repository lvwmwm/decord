// Module ID: 5406
// Function ID: 5407
// Name: BottomSheetDraggableScrollable
// Dependencies: [19, 21, 5277]
// Exports: BottomSheetDraggableScrollable

// Module 5406 (BottomSheetDraggableScrollable)
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
    tmp = jsx(require(5277) /* Directions */.GestureDetector, { gesture: null, children: null });
  }
  return tmp;
};
