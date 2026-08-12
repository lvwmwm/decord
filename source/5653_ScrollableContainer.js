// Module ID: 5653
// Function ID: 5654
// Name: ScrollableContainer
// Dependencies: [19, 21, 5654, 5655, 5657]

// Module 5653 (ScrollableContainer)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;

export const ScrollableContainer = require("noop").forwardRef(function ScrollableContainer(arg0, ref) {
  let ScrollableComponent;
  let nativeGesture;
  let onRefresh;
  let progressViewOffset;
  let refreshControl;
  let refreshing;
  ({ nativeGesture, refreshControl, onRefresh } = arg0);
  ({ refreshing, progressViewOffset, ScrollableComponent } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  let obj = { scrollableGesture: nativeGesture, children: null };
  obj = { ref };
  const merged1 = Object.assign(merged);
  obj[1] = <ScrollableComponent ref={arg1} />;
  const tmp6 = jsx(require(5654) /* BottomSheetDraggableScrollable */.BottomSheetDraggableScrollable, { ref });
  let tmp2Result = tmp6;
  if (onRefresh) {
    obj = { scrollableGesture: null, refreshing: null, progressViewOffset: null, onRefresh: null, style: null, children: null };
    obj[0] = nativeGesture;
    obj[1] = refreshing;
    obj[2] = progressViewOffset;
    obj[3] = onRefresh;
    obj[4] = require(5657) /* styles */.styles.container;
    obj[5] = tmp6;
    tmp2Result = jsx(importDefault(5655), { scrollableGesture: null, refreshing: null, progressViewOffset: null, onRefresh: null, style: null, children: null });
    const tmp9 = importDefault(5655);
  }
  return tmp2Result;
});
