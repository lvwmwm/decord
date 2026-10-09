// Module ID: 8613
// Function ID: 8614
// Name: useAccessibilityPress
// Dependencies: [19, 558, 576, 2]

// Module 8613 (useAccessibilityPress)
import react2 from "react" /* 576 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAccessibilityPress(cResult, label) {
  let items1;
  let tmp2;
  let tmp3;
  let tmp5;
  let tmp6;
  let closure_0 = cResult;
  const obj = react2;
  cResult = obj.c(6);
  let closure_1 = react.useRef(cResult);
  const obj2 = react;
  if (cResult[0] !== cResult) {
    const fn = function n() {
      ref.current = current;
    };
    const items = [cResult];
    cResult[0] = cResult;
    cResult[1] = fn;
    cResult[2] = items;
    tmp3 = items;
    tmp2 = fn;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
  }
  const effect = obj2.useEffect(tmp2, tmp3);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function l(nativeEvent) {
      if ("activate" === nativeEvent.nativeEvent.actionName) {
        ref.current();
      }
    };
    cResult[3] = fn2;
    tmp5 = fn2;
  } else {
    tmp5 = cResult[3];
  }
  if (cResult[4] !== label) {
    const obj3 = { onAccessibilityAction: tmp5, accessibilityActions: items1 };
    items1 = [{ name: "activate", label }];
    const obj4 = { name: "activate", label };
    cResult[4] = label;
    cResult[5] = obj3;
    tmp6 = obj3;
  } else {
    tmp6 = cResult[5];
  }
  return tmp6;
}) : (function useAccessibilityPress(cResult, arg1) {
  let closure_0 = cResult;
  let closure_1 = arg1;
  let closure_2 = react.useRef(cResult);
  let items = [cResult];
  const effect = react.useEffect(() => {
    closure_2.current = current;
  }, items);
  const items1 = [arg1];
  return react.useMemo(() => {
    let items;
    let ref;
    const obj = {
      onAccessibilityAction(nativeEvent) {
        if ("activate" === nativeEvent.nativeEvent.actionName) {
          ref.current();
        }
      },
      accessibilityActions: items
    };
    items = [];
    const obj2 = { name: "activate", label };
    items[0] = obj2;
    return obj;
  }, items1);
});
const result = size.fileFinishedImporting("modules/a11y/native/useAccessibilityPress.tsx");

export default tmp2;
