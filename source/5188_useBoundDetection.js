// Module ID: 5188
// Function ID: 44007
// Name: useBoundDetection
// Dependencies: []
// Exports: useBoundDetection

// Module 5188 (useBoundDetection)
const _module = require(dependencyMap[0]);
({ useCallback: closure_2, useEffect: closure_3, useMemo: closure_4, useRef: closure_5 } = _module);

export const useBoundDetection = function useBoundDetection(recyclerViewManager, arg1) {
  const require = recyclerViewManager;
  const dependencyMap = arg1;
  const callback = callback4(false);
  const callback2 = callback4(false);
  const callback3 = callback4(false);
  const callback4 = callback4(Date.now());
  const data = recyclerViewManager.props.data;
  const _requestAnimationFrame = require(dependencyMap[1]).useUnmountAwareAnimationFrame().requestAnimationFrame;
  let num = 0;
  if (recyclerViewManager.hasLayout()) {
    num = recyclerViewManager.getWindowSize().height;
  }
  let num2 = 0;
  if (recyclerViewManager.hasLayout()) {
    num2 = recyclerViewManager.getChildContainerDimensions().height;
  }
  let num3 = 0;
  if (recyclerViewManager.hasLayout()) {
    num3 = recyclerViewManager.getWindowSize().width;
  }
  let num4 = 0;
  if (recyclerViewManager.hasLayout()) {
    num4 = recyclerViewManager.getChildContainerDimensions().width;
  }
  const items = [recyclerViewManager];
  const items1 = [_requestAnimationFrame, arg1, recyclerViewManager];
  const checkBounds = callback((self) => {
    let maintainVisibleContentPosition;
    let onEndReached;
    let onEndReachedThreshold;
    let onStartReached;
    let onStartReachedThreshold;
    closure_5.current = Date.now();
    const props = self.props;
    ({ onEndReached, onStartReached, maintainVisibleContentPosition, onEndReachedThreshold, onStartReachedThreshold } = props);
    let prop;
    if (null != maintainVisibleContentPosition) {
      prop = maintainVisibleContentPosition.autoscrollToBottomThreshold;
    }
    let num = -1;
    if (null != prop) {
      num = prop;
    }
    if (self.getIsFirstLayoutComplete()) {
      const absoluteLastScrollOffset = self.getAbsoluteLastScrollOffset();
      const size = self.getChildContainerDimensions();
      const size2 = self.getWindowSize();
      const tmp5 = true === props.horizontal ? size2.width : size2.height;
      const sum = tmp4 ? size.width : size.height + self.firstItemOffset;
      if (tmp5 > 0) {
        if (onEndReached) {
          let num4 = 0.5;
          if (null != onEndReachedThreshold) {
            num4 = onEndReachedThreshold;
          }
          const _Math = Math;
          const result = num4 * tmp5;
          const tmp9 = Math.ceil(absoluteLastScrollOffset + tmp5) >= sum - result;
          let tmp10 = tmp9;
          if (tmp9) {
            tmp10 = !ref.current;
          }
          if (tmp10) {
            ref.current = true;
            onEndReached();
          }
          ref.current = tmp9;
        }
        if (onStartReached) {
          let num5 = 0.2;
          if (null != onStartReachedThreshold) {
            num5 = onStartReachedThreshold;
          }
          let tmp16 = tmp15;
          if (absoluteLastScrollOffset <= num5 * tmp5) {
            tmp16 = !ref2.current;
          }
          if (tmp16) {
            ref2.current = true;
            onStartReached();
          }
          ref2.current = absoluteLastScrollOffset <= num5 * tmp5;
        }
        if (!tmp4) {
          if (num >= 0) {
            const _Math2 = Math;
            const result1 = num * tmp5;
            closure_4.current = Math.ceil(absoluteLastScrollOffset + tmp5) >= sum - result1;
          }
        }
      }
    }
  }, items);
  const tmp2 = callback(() => {
    let current = arg0.isOffsetProjectionEnabled;
    if (current) {
      current = ref3.current;
    }
    if (current) {
      ref3.current = false;
      _requestAnimationFrame(() => {
        const maintainVisibleContentPosition = closure_0.props.maintainVisibleContentPosition;
        let prop;
        if (null != maintainVisibleContentPosition) {
          prop = maintainVisibleContentPosition.animateAutoScrollToBottom;
        }
        let tmp2 = null == prop || prop;
        const current = ref.current;
        if (null != current) {
          const obj = {};
          if (tmp2) {
            tmp2 = !closure_0.ignoreScrollEvents;
          }
          obj.animated = tmp2;
          current.scrollToEnd(obj);
        }
      });
    }
  }, items1);
  const items2 = [data];
  callback3(() => {
    closure_2.current = false;
  }, items2);
  const items3 = [data, tmp2, num, num3];
  callback2(() => {
    tmp2();
  }, items3);
  const items4 = [num2, num4, recyclerViewManager.firstItemOffset, tmp2];
  callback2(() => {
    if (Date.now() - ref4.current >= 100) {
      const tmp2 = tmp2();
    }
  }, items4);
  return { checkBounds };
};
