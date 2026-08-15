// Module ID: 7027
// Function ID: 7028
// Name: BottomSheetDraggableScrollable
// Dependencies: [19, 21, 6377]
// Exports: BottomSheetDraggableScrollable

// Module 7027 (BottomSheetDraggableScrollable)
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
    tmp = jsx(require(6377) /* LegacyBaseButton */.GestureDetector, { gesture: null, children: null });
  }
  return tmp;
};
