// Module ID: 5379
// Function ID: 46077
// Name: ScrollableContainer
// Dependencies: [29, 31, 33, 5380, 5381, 5383]

// Module 5379 (ScrollableContainer)
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
  const tmp2 = jsx(require(5380) /* BottomSheetDraggableScrollable */.BottomSheetDraggableScrollable, { ref });
  let tmp3 = tmp2;
  if (onRefresh) {
    obj = { scrollableGesture: nativeGesture, refreshing, progressViewOffset, onRefresh, style: require(5383) /* styles */.styles.container, children: tmp2 };
    tmp3 = jsx(importDefault(5381), { scrollableGesture: nativeGesture, refreshing, progressViewOffset, onRefresh, style: require(5383) /* styles */.styles.container, children: tmp2 });
    const tmp7 = importDefault(5381);
  }
  return tmp3;
});
