// Module ID: 5344
// Function ID: 45944
// Name: ScrollableContainer
// Dependencies: [29, 31, 33, 5345, 5346, 5348]

// Module 5344 (ScrollableContainer)
import _objectWithoutProperties from "_objectWithoutProperties";
import "result";
import { jsx } from "jsxProd";

const require = arg1;
let closure_3 = ["nativeGesture", "refreshControl", "refreshing", "progressViewOffset", "onRefresh", "ScrollableComponent"];

export const ScrollableContainer = require("result").forwardRef(function ScrollableContainer(arg0, ref) {
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
  const tmp2 = jsx(require(5345) /* BottomSheetDraggableScrollable */.BottomSheetDraggableScrollable, { ref });
  let tmp3 = tmp2;
  if (onRefresh) {
    obj = { scrollableGesture: nativeGesture, refreshing, progressViewOffset, onRefresh, style: require(5348) /* styles */.styles.container, children: tmp2 };
    tmp3 = jsx(importDefault(5346), { scrollableGesture: nativeGesture, refreshing, progressViewOffset, onRefresh, style: require(5348) /* styles */.styles.container, children: tmp2 });
    const tmp7 = importDefault(5346);
  }
  return tmp3;
});
