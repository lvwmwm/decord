// Module ID: 5207
// Function ID: 44085
// Name: LayoutCommitObserver
// Dependencies: []

// Module 5207 (LayoutCommitObserver)
let closure_2 = importDefault(dependencyMap[0]);
({ useLayoutEffect: closure_3, useMemo: closure_4, useRef: closure_5 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;
const memoResult = importDefault(dependencyMap[1]).memo((children) => {
  const arg1 = children.onCommitLayoutEffect;
  const recyclerViewContext = arg1(dependencyMap[3]).useRecyclerViewContext();
  const dependencyMap = recyclerViewContext;
  const obj = arg1(dependencyMap[3]);
  const obj2 = arg1(dependencyMap[4]);
  const tmp3 = callback(arg1(dependencyMap[4]).useLayoutState(0), 2)[1];
  const callback = tmp3;
  const tmp2 = callback(arg1(dependencyMap[4]).useLayoutState(0), 2);
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
  const value = value(() => ({
    layout() {
      callback((arg0) => arg0 + 1);
    },
    getRef() {
      let ref;
      if (null != store) {
        ref = store.getRef();
      }
      let tmp3 = null;
      if (null != ref) {
        tmp3 = ref;
      }
      return tmp3;
    },
    getParentRef() {
      let parentRef;
      if (null != store) {
        parentRef = store.getParentRef();
      }
      let tmp3 = null;
      if (null != parentRef) {
        tmp3 = parentRef;
      }
      return tmp3;
    },
    getParentScrollViewRef() {
      let parentScrollViewRef;
      if (null != store) {
        parentScrollViewRef = store.getParentScrollViewRef();
      }
      let tmp3 = null;
      if (null != parentScrollViewRef) {
        tmp3 = parentScrollViewRef;
      }
      return tmp3;
    },
    getScrollViewRef() {
      let scrollViewRef;
      if (null != store) {
        scrollViewRef = store.getScrollViewRef();
      }
      let tmp3 = null;
      if (null != scrollViewRef) {
        tmp3 = scrollViewRef;
      }
      return tmp3;
    },
    markChildLayoutAsPending(arg0) {
      if (null != store) {
        const result = store.markChildLayoutAsPending(arg0);
      }
      set.add(arg0);
    },
    unmarkChildLayoutAsPending(arg0) {
      if (null != store) {
        const result = store.unmarkChildLayoutAsPending(arg0);
      }
      if (set.has(arg0)) {
        set.delete(arg0);
        closure_4.layout();
      }
    }
  }), items);
  return jsx(arg1(dependencyMap[3]).RecyclerViewContextProvider, { value, children: children.children });
});
memoResult.displayName = "LayoutCommitObserver";

export const LayoutCommitObserver = memoResult;
