// Module ID: 7110
// Function ID: 7111
// Name: ScrollableContainer
// Dependencies: [19, 21, 7111, 7112, 7114]

// Module 7110 (ScrollableContainer)
import BottomSheetDraggableScrollable from "BottomSheetDraggableScrollable" /* 7111 */;
import _modDef7112 from "module_7112" /* 7112 */;
import _mod7114 from "module_7114" /* 7114 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export const ScrollableContainer = fn(19).forwardRef(function ScrollableContainer(arg0, ref) {
  ({ nativeGesture, refreshControl, onRefresh } = arg0);
  ({ refreshing, progressViewOffset, ScrollableComponent } = arg0);
  const merged = Object.assign(arg0, Object.assign({ nativeGesture: 0, refreshControl: 0, refreshing: 0, progressViewOffset: 0, onRefresh: 0, ScrollableComponent: 0 }));
  const obj = { scrollableGesture: nativeGesture, children: null };
  const merged1 = Object.assign(merged);
  obj.children = <ScrollableComponent ref={arg1} />;
  const tmp6 = jsx(BottomSheetDraggableScrollable.BottomSheetDraggableScrollable, { scrollableGesture: nativeGesture, children: null });
  let tmp2Result = tmp6;
  if (onRefresh) {
    const obj3 = { scrollableGesture: nativeGesture, refreshing, progressViewOffset, onRefresh, style: _mod7114.styles.container, children: tmp6 };
    tmp2Result = jsx(_modDef7112, { scrollableGesture: nativeGesture, refreshing, progressViewOffset, onRefresh, style: _mod7114.styles.container, children: tmp6 });
  }
  return tmp2Result;
});
