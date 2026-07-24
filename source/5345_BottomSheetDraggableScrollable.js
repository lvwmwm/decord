// Module ID: 5345
// Function ID: 45946
// Name: BottomSheetDraggableScrollable
// Dependencies: [31, 33, 5217]
// Exports: BottomSheetDraggableScrollable

// Module 5345 (BottomSheetDraggableScrollable)
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
    tmp = jsx(require(5217) /* Directions */.GestureDetector, { gesture: scrollableGesture, children });
  }
  return tmp;
};
