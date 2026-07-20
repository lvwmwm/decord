// Module ID: 5120
// Function ID: 43504
// Name: BottomSheetDraggableScrollable
// Dependencies: []
// Exports: BottomSheetDraggableScrollable

// Module 5120 (BottomSheetDraggableScrollable)
importDefault(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;

export const BottomSheetDraggableScrollable = function BottomSheetDraggableScrollable(arg0) {
  let children;
  let scrollableGesture;
  ({ scrollableGesture, children } = arg0);
  let tmp = children;
  if (scrollableGesture) {
    const obj = { gesture: scrollableGesture, children };
    tmp = jsx(arg1(dependencyMap[2]).GestureDetector, obj);
  }
  return tmp;
};
