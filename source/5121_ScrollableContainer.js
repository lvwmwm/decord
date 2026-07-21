// Module ID: 5121
// Function ID: 43543
// Name: ScrollableContainer
// Dependencies: []

// Module 5121 (ScrollableContainer)
let closure_3 = [];
let closure_4 = importDefault(dependencyMap[0]);
importDefault(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;

export const ScrollableContainer = arg1(dependencyMap[1]).forwardRef(function ScrollableContainer(arg0, ref) {
  let ScrollableComponent;
  let nativeGesture;
  let onRefresh;
  let progressViewOffset;
  let refreshControl;
  let refreshing;
  ({ nativeGesture, refreshControl, onRefresh } = arg0);
  ({ refreshing, progressViewOffset, ScrollableComponent } = arg0);
  let obj = { scrollableGesture: nativeGesture };
  obj = { ref };
  obj.children = <ScrollableComponent {...Object.assign(obj, callback(arg0, closure_3))} />;
  const tmp2 = jsx(ref(dependencyMap[3]).BottomSheetDraggableScrollable, obj);
  let tmp3 = tmp2;
  if (onRefresh) {
    obj = { scrollableGesture: nativeGesture, refreshing, progressViewOffset, onRefresh, style: ref(dependencyMap[5]).styles.container, children: tmp2 };
    tmp3 = jsx(importDefault(dependencyMap[4]), obj);
    const tmp7 = importDefault(dependencyMap[4]);
  }
  return tmp3;
});
