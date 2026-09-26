// Module ID: 7200
// Function ID: 7201
// Name: LayoutCommitObserver
// Dependencies: [7131, 19, 21, 7150, 7149]

// Module 7200 (LayoutCommitObserver)
import _mod7149 from "module_7149" /* 7149 */;
import _mod7150 from "module_7150" /* 7150 */;
import _slicedToArray from "module_7131" /* 7131 */;
import noop_mod from "module_19" /* 19 */;

require = fn;
let noop = fn(19);
({ useLayoutEffect: c3, useMemo: closure_4, useRef: hasOwnProperty } = noop);
let noop = noop_mod;
const jsx = fn(21).jsx;
const memoResult = noop.memo((children) => {
  const onCommitLayoutEffect = children.onCommitLayoutEffect;
  const recyclerViewContext = _mod7150.useRecyclerViewContext();
  [r10018, tmp3] = _mod7149.useLayoutState(0);
  _slicedToArray = tmp3;
  const tmp2 = _slicedToArray(_mod7149.useLayoutState(0), 2);
  const current = hasOwnProperty(new Set()).current;
  React3(() => {
    if (current.size <= 0) {
      if (onCommitLayoutEffect != null) {
        tmp();
      }
    }
  });
  const items = [recyclerViewContext, current, tmp3];
  value = React4(() => ({
    layout() {
      closure_1_2((arg0) => arg0 + 1);
    },
    getRef() {
      let ref;
      if (recyclerViewContext != null) {
        ref = recyclerViewContext.getRef();
      }
      if (ref == null) {
        ref = null;
      }
      return ref;
    },
    getParentRef() {
      let parentRef;
      if (recyclerViewContext != null) {
        parentRef = recyclerViewContext.getParentRef();
      }
      if (parentRef == null) {
        parentRef = null;
      }
      return parentRef;
    },
    getParentScrollViewRef() {
      let parentScrollViewRef;
      if (recyclerViewContext != null) {
        parentScrollViewRef = recyclerViewContext.getParentScrollViewRef();
      }
      if (parentScrollViewRef == null) {
        parentScrollViewRef = null;
      }
      return parentScrollViewRef;
    },
    getScrollViewRef() {
      let scrollViewRef;
      if (recyclerViewContext != null) {
        scrollViewRef = recyclerViewContext.getScrollViewRef();
      }
      if (scrollViewRef == null) {
        scrollViewRef = null;
      }
      return scrollViewRef;
    },
    markChildLayoutAsPending(arg0) {
      if (recyclerViewContext != null) {
        const result = recyclerViewContext.markChildLayoutAsPending(arg0);
      }
      set.add(arg0);
    },
    unmarkChildLayoutAsPending(arg0) {
      if (recyclerViewContext != null) {
        const result = recyclerViewContext.unmarkChildLayoutAsPending(arg0);
      }
      if (set.has(arg0)) {
        set.delete(arg0);
        closure_1_4.layout();
      }
    }
  }), items);
  return jsx(_mod7150.RecyclerViewContextProvider, { value, children: children.children });
});
memoResult.displayName = "LayoutCommitObserver";

export const LayoutCommitObserver = memoResult;
