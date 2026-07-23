// Module ID: 5432
// Function ID: 46522
// Name: LayoutCommitObserver
// Dependencies: [5359, 31, 33, 5378, 5377]

// Module 5432 (LayoutCommitObserver)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { jsx } from "jsxProd";

let closure_3;
let closure_4;
let closure_5;
const require = arg1;
({ useLayoutEffect: closure_3, useMemo: closure_4, useRef: closure_5 } = result);
const memoResult = require("result").memo((children) => {
  const onCommitLayoutEffect = children.onCommitLayoutEffect;
  recyclerViewContext = onCommitLayoutEffect(recyclerViewContext[3]).useRecyclerViewContext();
  const obj = onCommitLayoutEffect(recyclerViewContext[3]);
  const obj2 = onCommitLayoutEffect(recyclerViewContext[4]);
  let tmp3 = callback(onCommitLayoutEffect(recyclerViewContext[4]).useLayoutState(0), 2)[1];
  callback = tmp3;
  const tmp2 = callback(onCommitLayoutEffect(recyclerViewContext[4]).useLayoutState(0), 2);
  const current = callback2(new Set()).current;
  current(() => {
    let tmp = current.size > 0;
    if (!tmp) {
      tmp = null == onCommitLayoutEffect;
    }
    if (!tmp) {
      onCommitLayoutEffect();
    }
  });
  const items = [recyclerViewContext, current, tmp3];
  value = value(() => ({
    layout() {
      outer1_2((arg0) => arg0 + 1);
    },
    getRef() {
      let ref;
      if (null != outer1_1) {
        ref = outer1_1.getRef();
      }
      let tmp3 = null;
      if (null != ref) {
        tmp3 = ref;
      }
      return tmp3;
    },
    getParentRef() {
      let parentRef;
      if (null != outer1_1) {
        parentRef = outer1_1.getParentRef();
      }
      let tmp3 = null;
      if (null != parentRef) {
        tmp3 = parentRef;
      }
      return tmp3;
    },
    getParentScrollViewRef() {
      let parentScrollViewRef;
      if (null != outer1_1) {
        parentScrollViewRef = outer1_1.getParentScrollViewRef();
      }
      let tmp3 = null;
      if (null != parentScrollViewRef) {
        tmp3 = parentScrollViewRef;
      }
      return tmp3;
    },
    getScrollViewRef() {
      let scrollViewRef;
      if (null != outer1_1) {
        scrollViewRef = outer1_1.getScrollViewRef();
      }
      let tmp3 = null;
      if (null != scrollViewRef) {
        tmp3 = scrollViewRef;
      }
      return tmp3;
    },
    markChildLayoutAsPending(arg0) {
      if (null != outer1_1) {
        const result = outer1_1.markChildLayoutAsPending(arg0);
      }
      outer1_3.add(arg0);
    },
    unmarkChildLayoutAsPending(arg0) {
      if (null != outer1_1) {
        const result = outer1_1.unmarkChildLayoutAsPending(arg0);
      }
      if (outer1_3.has(arg0)) {
        outer1_3.delete(arg0);
        outer1_4.layout();
      }
    }
  }), items);
  return jsx(onCommitLayoutEffect(recyclerViewContext[3]).RecyclerViewContextProvider, { value, children: children.children });
});
memoResult.displayName = "LayoutCommitObserver";

export const LayoutCommitObserver = memoResult;
