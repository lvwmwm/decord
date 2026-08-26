// Module ID: 5787
// Function ID: 5788
// Name: BottomSheetDraggableScrollable
// Dependencies: [19, 21, 5599]
// Exports: BottomSheetDraggableScrollable

// Module 5787 (BottomSheetDraggableScrollable)
import noopDefault from "noop" /* 19 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5599 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopDefault;

export const BottomSheetDraggableScrollable = function BottomSheetDraggableScrollable(arg0) {
  ({ scrollableGesture, children } = arg0);
  let tmp = children;
  if (scrollableGesture) {
    const obj = { gesture: null, children: null };
    obj[0] = scrollableGesture;
    obj[1] = children;
    tmp = jsx(LegacyBaseButton.GestureDetector, { gesture: null, children: null });
  }
  return tmp;
};
