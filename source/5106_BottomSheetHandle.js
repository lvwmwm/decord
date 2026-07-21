// Module ID: 5106
// Function ID: 43473
// Name: BottomSheetHandle
// Dependencies: []

// Module 5106 (BottomSheetHandle)
const _module = require(dependencyMap[0]);
const useMemo = _module.useMemo;
importDefault(dependencyMap[0]);
const _module1 = require(dependencyMap[1]);
({ StyleSheet: closure_3, View: closure_4 } = _module1);
const _module2 = require(dependencyMap[2]);
({ jsx: closure_5, jsxs: closure_6 } = _module2);
const memoResult = _module.memo(function BottomSheetHandleComponent(style) {
  style = style.style;
  const require = style;
  const indicatorStyle = style.indicatorStyle;
  const dependencyMap = indicatorStyle;
  let DEFAULT_ACCESSIBLE = style.accessible;
  if (undefined === DEFAULT_ACCESSIBLE) {
    DEFAULT_ACCESSIBLE = require(dependencyMap[3]).DEFAULT_ACCESSIBLE;
  }
  let DEFAULT_ACCESSIBILITY_ROLE = style.accessibilityRole;
  if (undefined === DEFAULT_ACCESSIBILITY_ROLE) {
    DEFAULT_ACCESSIBILITY_ROLE = require(dependencyMap[3]).DEFAULT_ACCESSIBILITY_ROLE;
  }
  let DEFAULT_ACCESSIBILITY_LABEL = style.accessibilityLabel;
  if (undefined === DEFAULT_ACCESSIBILITY_LABEL) {
    DEFAULT_ACCESSIBILITY_LABEL = require(dependencyMap[3]).DEFAULT_ACCESSIBILITY_LABEL;
  }
  let DEFAULT_ACCESSIBILITY_HINT = style.accessibilityHint;
  if (undefined === DEFAULT_ACCESSIBILITY_HINT) {
    DEFAULT_ACCESSIBILITY_HINT = require(dependencyMap[3]).DEFAULT_ACCESSIBILITY_HINT;
  }
  const items = [style];
  const items1 = [indicatorStyle];
  const obj = {
    style: useMemo(() => {
      const items = [style(indicatorStyle[4]).styles.container, closure_3.flatten(style)];
      return items;
    }, items)
  };
  let tmp13;
  const tmp9 = useMemo(() => {
    const items = [style(indicatorStyle[4]).styles.container, closure_3.flatten(style)];
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
        const items = [style(indicatorStyle[4]).styles.indicator, closure_3.flatten(indicatorStyle)];
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
