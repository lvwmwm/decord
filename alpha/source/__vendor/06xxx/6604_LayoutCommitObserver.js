// Module ID: 6604
// Function ID: 6605
// Name: LayoutCommitObserver
// Dependencies: [6535, 19, 21, 6554, 6553]

// Module 6604 (LayoutCommitObserver)
import Fragment from "Fragment" /* 21 */;
import _mod6553 from "module_6553" /* 6553 */;
import react2 from "react" /* 6554 */;
import _slicedToArray from "_slicedToArray" /* 6535 */;
import react_mod from "react" /* 19 */;

let onCommitLayoutEffect, set;

let c3;
let closure_4;
let hasOwnProperty;
let react = react_mod;
({ useLayoutEffect: c3, useMemo: closure_4, useRef: hasOwnProperty } = react);
react = react_mod;
const jsx = Fragment.jsx;
const memoResult = react.memo((onCommitLayoutEffect) => {
  let tmp3;
  onCommitLayoutEffect = onCommitLayoutEffect.onCommitLayoutEffect;
  const children = onCommitLayoutEffect.children;
  let obj = react2;
  const recyclerViewContext = obj.useRecyclerViewContext();
  let obj2 = _mod6553;
  [r10018, tmp3] = _slicedToArray(obj2.useLayoutState(0), 2);
  let closure_2 = tmp3;
  const tmp2 = _slicedToArray(obj2.useLayoutState(0), 2);
  set = new Set();
  const current = hasOwnProperty(set).current;
  _false(() => {
    if (current.size <= 0) {
      if (onCommitLayoutEffect != null) {
        tmp();
      }
    }
  });
  const items = [recyclerViewContext, current, tmp3];
  const value = React3(() => {
    let obj = {
      layout() {
        closure_1_2((arg0) => arg0 + 1);
      },
      getRef() {
        let ref;
        const obj = recyclerViewContext;
        if (recyclerViewContext != null) {
          ref = obj.getRef();
        }
        if (ref == null) {
          ref = null;
        }
        return ref;
      },
      getParentRef() {
        let parentRef;
        const obj = recyclerViewContext;
        if (recyclerViewContext != null) {
          parentRef = obj.getParentRef();
        }
        if (parentRef == null) {
          parentRef = null;
        }
        return parentRef;
      },
      getParentScrollViewRef() {
        let parentScrollViewRef;
        const obj = recyclerViewContext;
        if (recyclerViewContext != null) {
          parentScrollViewRef = obj.getParentScrollViewRef();
        }
        if (parentScrollViewRef == null) {
          parentScrollViewRef = null;
        }
        return parentScrollViewRef;
      },
      getScrollViewRef() {
        let scrollViewRef;
        const obj = recyclerViewContext;
        if (recyclerViewContext != null) {
          scrollViewRef = obj.getScrollViewRef();
        }
        if (scrollViewRef == null) {
          scrollViewRef = null;
        }
        return scrollViewRef;
      },
      markChildLayoutAsPending(arg0) {
        const obj = recyclerViewContext;
        if (recyclerViewContext != null) {
          const result = obj.markChildLayoutAsPending(arg0);
        }
        set.add(arg0);
      },
      unmarkChildLayoutAsPending(arg0) {
        const obj = recyclerViewContext;
        if (recyclerViewContext != null) {
          const result = obj.unmarkChildLayoutAsPending(arg0);
        }
        const obj2 = set;
        if (set.has(arg0)) {
          obj2.delete(arg0);
          closure_1_4.layout();
        }
      }
    };
    return obj;
  }, items);
  return jsx(react2.RecyclerViewContextProvider, { value, children });
});
memoResult.displayName = "LayoutCommitObserver";

export const LayoutCommitObserver = memoResult;
