// Module ID: 5626
// Function ID: 5627
// Name: ScrollableContainer
// Dependencies: [19, 21, 5627, 5628, 5630]

// Module 5626 (ScrollableContainer)
import react2 from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import BottomSheetDraggableScrollable2 from "BottomSheetDraggableScrollable" /* 5627 */;
import _modDef5628 from "module_5628" /* 5628 */;

let tmp3;
const react_native = tmp3(5630);
const forwardRef = react2.forwardRef;
const jsx = Fragment.jsx;

export const ScrollableContainer = forwardRef(function ScrollableContainer(arg0, ref) {
  let ScrollableComponent;
  let nativeGesture;
  let onRefresh;
  let progressViewOffset;
  let refreshControl;
  let refreshing;
  ({ nativeGesture, refreshControl, onRefresh } = arg0);
  ({ refreshing, progressViewOffset, ScrollableComponent } = arg0);
  const merged = Object.assign(arg0, Object.assign({ nativeGesture: 0, refreshControl: 0, refreshing: 0, progressViewOffset: 0, onRefresh: 0, ScrollableComponent: 0 }));
  const BottomSheetDraggableScrollable = BottomSheetDraggableScrollable2.BottomSheetDraggableScrollable;
  const merged1 = Object.assign(merged);
  const tmp6 = <BottomSheetDraggableScrollable scrollableGesture={nativeGesture}>{null}</BottomSheetDraggableScrollable>;
  let tmp2Result = tmp6;
  const tmp2 = jsx;
  if (onRefresh) {
    const obj3 = { scrollableGesture: nativeGesture, refreshing, progressViewOffset, onRefresh, style: react_native.styles.container, children: tmp6 };
    const tmp9 = _modDef5628;
    tmp2Result = tmp2(tmp9, obj3);
  }
  return tmp2Result;
});
