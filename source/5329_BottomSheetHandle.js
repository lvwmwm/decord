// Module ID: 5329
// Function ID: 45869
// Name: BottomSheetHandle
// Dependencies: [31, 27, 33, 5330, 5331]

// Module 5329 (BottomSheetHandle)
import result from "result";
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";

let closure_3;
let closure_4;
let closure_5;
let closure_6;
const useMemo = result.useMemo;
({ StyleSheet: closure_3, View: closure_4 } = get_ActivityIndicator);
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
const memoResult = result.memo(function BottomSheetHandleComponent(style) {
  style = style.style;
  const indicatorStyle = style.indicatorStyle;
  let DEFAULT_ACCESSIBLE = style.accessible;
  if (undefined === DEFAULT_ACCESSIBLE) {
    DEFAULT_ACCESSIBLE = style(indicatorStyle[3]).DEFAULT_ACCESSIBLE;
  }
  let DEFAULT_ACCESSIBILITY_ROLE = style.accessibilityRole;
  if (undefined === DEFAULT_ACCESSIBILITY_ROLE) {
    DEFAULT_ACCESSIBILITY_ROLE = style(indicatorStyle[3]).DEFAULT_ACCESSIBILITY_ROLE;
  }
  let DEFAULT_ACCESSIBILITY_LABEL = style.accessibilityLabel;
  if (undefined === DEFAULT_ACCESSIBILITY_LABEL) {
    DEFAULT_ACCESSIBILITY_LABEL = style(indicatorStyle[3]).DEFAULT_ACCESSIBILITY_LABEL;
  }
  let DEFAULT_ACCESSIBILITY_HINT = style.accessibilityHint;
  if (undefined === DEFAULT_ACCESSIBILITY_HINT) {
    DEFAULT_ACCESSIBILITY_HINT = style(indicatorStyle[3]).DEFAULT_ACCESSIBILITY_HINT;
  }
  let items = [style];
  const items1 = [indicatorStyle];
  const obj = {
    style: useMemo(() => {
      const items = [style(indicatorStyle[4]).styles.container, outer1_3.flatten(style)];
      return items;
    }, items)
  };
  let tmp13;
  const tmp9 = useMemo(() => {
    const items = [style(indicatorStyle[4]).styles.container, outer1_3.flatten(style)];
    return items;
  }, items);
  if (null != DEFAULT_ACCESSIBLE) {
    tmp13 = DEFAULT_ACCESSIBLE;
  }
  obj.accessible = tmp13;
  let tmp14;
  if (null != DEFAULT_ACCESSIBILITY_ROLE) {
    tmp14 = DEFAULT_ACCESSIBILITY_ROLE;
  }
  obj.accessibilityRole = tmp14;
  let tmp15;
  if (null != DEFAULT_ACCESSIBILITY_LABEL) {
    tmp15 = DEFAULT_ACCESSIBILITY_LABEL;
  }
  obj.accessibilityLabel = tmp15;
  let tmp16;
  if (null != DEFAULT_ACCESSIBILITY_HINT) {
    tmp16 = DEFAULT_ACCESSIBILITY_HINT;
  }
  obj.accessibilityHint = tmp16;
  obj.collapsable = true;
  const items2 = [
    callback(closure_4, {
      style: useMemo(() => {
        const items = [style(indicatorStyle[4]).styles.indicator, outer1_3.flatten(indicatorStyle)];
        return items;
      }, items1)
    }),
    style.children
  ];
  obj.children = items2;
  return closure_6(closure_4, obj);
});
memoResult.displayName = "BottomSheetHandle";

export default memoResult;
