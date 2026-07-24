// Module ID: 5405
// Function ID: 46323
// Name: useRecyclerViewController
// Dependencies: [5406, 5359, 31, 27, 5407, 5408, 5374, 5409, 5403]
// Exports: useRecyclerViewController

// Module 5405 (useRecyclerViewController)
import asyncGeneratorStep from "asyncGeneratorStep";
import _slicedToArray from "_slicedToArray";
import result from "result";
import { I18nManager } from "get ActivityIndicator";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
({ useCallback: closure_4, useImperativeHandle: closure_5, useMemo: closure_6, useRef: closure_7, useState: closure_8 } = result);

export const useRecyclerViewController = function useRecyclerViewController(recyclerViewManager, arg1, arg2, arg3) {
  const _require = recyclerViewManager;
  const dependencyMap = arg2;
  let asyncGeneratorStep = arg3;
  const unmountFlag = _require(5407).useUnmountFlag();
  let obj = _require(5407);
  const callback = unmountFlag(callback4(0), 2)[1];
  const callback2 = _setTimeout(false);
  const callback3 = _setTimeout(recyclerViewManager.getDataLength());
  let tmp2 = unmountFlag(callback4(0), 2);
  _setTimeout = _require(5408).useUnmountAwareTimeout().setTimeout;
  callback4 = _setTimeout(undefined);
  let closure_9 = _setTimeout(undefined);
  let closure_10 = _setTimeout([]);
  const items = [recyclerViewManager];
  let tmp3 = callback((arg0, arg1) => {
    if (undefined !== store.updateScrollOffset(arg0)) {
      const current = ref7.current;
      current.push(arg1);
      callback((arg0) => arg0 + 1);
    } else {
      arg1();
    }
  }, items);
  let closure_11 = tmp3;
  const items1 = [recyclerViewManager];
  const computeFirstVisibleIndexForOffsetCorrection = callback(() => {
    if (store.getIsFirstLayoutComplete()) {
      if (store.hasStableDataKeys()) {
        if (store.getDataLength() > 0) {
          if (store.shouldMaintainVisibleContentPosition()) {
            const _Math = Math;
            const bound = Math.max(0, store.computeVisibleIndices().startIndex);
            if (tmp6) {
              closure_8.current = store.getDataKey(bound);
              const _Object = Object;
              closure_9.current = Object.assign({}, store.getLayout(bound));
            }
            tmp6 = undefined !== bound && bound >= 0;
          }
        }
      }
    }
  }, items1);
  const items2 = [recyclerViewManager, arg3, arg2, _setTimeout, tmp3, computeFirstVisibleIndexForOffsetCorrection];
  const items3 = [recyclerViewManager, arg2, _setTimeout, unmountFlag, tmp3];
  const applyOffsetCorrection = callback(() => {
    let data;
    let horizontal;
    ({ horizontal, data } = store.props);
    let current = ref7.current;
    ref7.current = [];
    const item = current.forEach((arg0) => arg0());
    const dataLength = store.getDataLength();
    if (store.getIsFirstLayoutComplete()) {
      if (store.hasStableDataKeys()) {
        if (dataLength > 0) {
          if (store.shouldMaintainVisibleContentPosition()) {
            if (ref5.current) {
              const engagedIndices = store.getEngagedIndices();
              let findValueResult = engagedIndices.findValue((bound) => outer1_0.getDataKey(bound) === outer1_8.current);
              if (null == findValueResult) {
                if (tmp5) {
                  let findIndexResult;
                  if (null != data) {
                    findIndexResult = data.findIndex((arg0, bound) => outer1_0.getDataKey(bound) === outer1_8.current);
                  }
                  const tmp11 = findIndexResult;
                }
                findValueResult = tmp11;
              }
              if (undefined !== findValueResult) {
                if (findValueResult >= 0) {
                  const point = store.getLayout(findValueResult);
                  if (horizontal) {
                    let diff = point.x - ref6.current.x;
                  } else {
                    diff = point.y - ref6.current.y;
                  }
                  const _Object = Object;
                  ref6.current = Object.assign({}, store.getLayout(findValueResult));
                  if (0 !== diff) {
                    if (!ref3.current) {
                      if (!store.animationOptimizationsEnabled) {
                        if (store(ref[6]).PlatformConfig.supportsOffsetCorrection) {
                          const current2 = ref2.current;
                          if (null != current2) {
                            current2.scrollBy(diff);
                          }
                        } else {
                          const obj = {};
                          const sum = store.getAbsoluteLastScrollOffset() + diff;
                          if (horizontal) {
                            obj.x = sum;
                            obj.animated = false;
                            let tmp24 = obj;
                          } else {
                            obj.y = sum;
                            obj.animated = false;
                            tmp24 = obj;
                          }
                          current = ref.current;
                          if (null != current) {
                            current.scrollTo(tmp24);
                          }
                        }
                        if (tmp5) {
                          tmp3(store.getAbsoluteLastScrollOffset() + diff, () => {

                          });
                          store.ignoreScrollEvents = true;
                          _setTimeout(() => {
                            outer1_0.ignoreScrollEvents = false;
                          }, 100);
                        }
                      }
                    }
                  }
                }
              }
            }
            computeFirstVisibleIndexForOffsetCorrection();
          }
        }
      }
    }
    ref4.current = store.getDataLength();
  }, items2);
  const handlerMethods = callback3(() => {
    let obj = {};
    Object.defineProperty(obj, "props", { get: () => store.props, set: undefined });
    obj.scrollToOffset = function scrollToOffset(arg0) {
      let animated;
      let offset;
      let skipFirstItemOffset;
      ({ offset, animated, skipFirstItemOffset } = arg0);
      const horizontal = store.props.horizontal;
      if (outer1_1.current) {
        if (!tmp3) {
          let obj = 0;
          let num2 = 0;
          if (!tmp) {
            num2 = store.firstItemOffset;
          }
          let assign = offset + num2;
          let current = {};
          if (horizontal) {
            current.x = assign;
            current.y = obj;
            let tmp11 = current;
          } else {
            current.x = obj;
            current.y = assign;
            tmp11 = current;
          }
          current = outer1_1.current;
          const _Object = Object;
          assign = Object.assign;
          obj = { animated };
          animated = current.scrollTo(assign({}, tmp11, obj));
        } else {
          current = store(5409);
          const firstItemOffset = store.firstItemOffset;
          const sum = current.adjustOffsetForRTL(offset, store.getChildContainerDimensions().width, store.getWindowSize().width) + (tmp ? firstItemOffset : -firstItemOffset);
        }
        tmp3 = isRTL.isRTL && horizontal;
      }
    };
    obj.clearLayoutCacheOnUpdate = function clearLayoutCacheOnUpdate() {
      const result = store.markLayoutManagerDirty();
    };
    obj.flashScrollIndicators = function flashScrollIndicators() {
      const current = outer1_1.current;
      const result = current.flashScrollIndicators();
    };
    obj.getNativeScrollRef = function getNativeScrollRef() {
      return outer1_1.current;
    };
    obj.getScrollResponder = function getScrollResponder() {
      const current = outer1_1.current;
      return current.getScrollResponder();
    };
    obj.getScrollableNode = function getScrollableNode() {
      const current = outer1_1.current;
      return current.getScrollableNode();
    };
    let closure_0 = ref2(async () => {
      let animated;
      if (arguments.length > 0) {
        if (undefined !== arguments[0]) {
          const first = arguments[0];
        }
        animated = {}.animated;
        const data = engagedIndices.props.data;
        if (data) {
          if (data.length > 0) {
            const diff = data.length - 1;
            engagedIndices = engagedIndices.getEngagedIndices();
            if (!engagedIndices.includes(diff)) {
              let obj = { index: diff, animated };
              return yield outer2_13.scrollToIndex(obj);
            }
          }
        }
        outer2_7(() => {
          const current = outer3_1.current;
          if (null != current) {
            const obj = { animated };
            current.scrollToEnd(obj);
          }
        }, 0);
      }
    });
    obj.scrollToEnd = function scrollToEnd() {
      return store(...arguments);
    };
    obj.scrollToTop = function scrollToTop() {
      if (arguments.length > 0) {
        if (undefined !== arguments[0]) {
          const first = arguments[0];
        }
        const obj = { offset: 0, animated: {}.animated };
        outer1_13.scrollToOffset(obj);
      }
    };
    obj.scrollToIndex = function scrollToIndex(arg0) {
      let closure_0;
      let closure_1;
      let asyncGeneratorStep;
      let _slicedToArray;
      ({ index: closure_0, animated: closure_1, viewPosition: asyncGeneratorStep, viewOffset: _slicedToArray } = arg0);
      return new Promise((arg0) => {
        let store = arg0;
        const horizontal = store.props.horizontal;
        if (outer2_1.current) {
          if (store >= 0) {
            if (store < store.getDataLength()) {
              outer2_5.current = true;
              let result = store.setOffsetProjectionEnabled(false);
              let finishScrollToIndex = function getFinalOffset() {
                const size = store.getLayout(store);
                const tmp = horizontal ? size.x : size.y;
                if (undefined !== finishScrollToIndex) {
                  const size2 = store.getWindowSize();
                  let diff = tmp;
                  if (undefined !== finishScrollToIndex) {
                    diff = tmp - ((horizontal ? size2.width : size2.height) - (horizontal ? size.width : size.height)) * finishScrollToIndex;
                  }
                  let sum = diff;
                  if (undefined !== _slicedToArray) {
                    sum = diff + _slicedToArray;
                  }
                } else {
                  sum = tmp;
                }
                return sum + store.firstItemOffset;
              };
              const absoluteLastScrollOffset = store.getAbsoluteLastScrollOffset();
              let size = store.getWindowSize();
              let closure_4 = 2 * (horizontal ? size.width : size.height);
              function getStartScrollOffset() {
                const tmp2 = finishScrollToIndex();
                if (tmp2 > _slicedToArray) {
                  const _Math2 = Math;
                  let bound = Math.max(tmp2 - closure_4, tmp);
                  store.setScrollDirection("forward");
                } else {
                  const _Math = Math;
                  bound = Math.min(tmp2 + closure_4, tmp);
                  store.setScrollDirection("backward");
                }
                return bound;
              }
              let closure_6 = finishScrollToIndex();
              const startScrollOffset = getStartScrollOffset();
              let closure_8 = closure_6;
              function performScrollStep(arg0) {
                const store = arg0;
                if (outer3_3.current) {
                  store();
                } else if (arg0 >= 5) {
                  finishScrollToIndex();
                } else {
                  if (horizontal) {
                    let sum = closure_8 + arg0 / 4 * (startScrollOffset - closure_8);
                  } else {
                    sum = startScrollOffset + arg0 / 4 * (closure_8 - startScrollOffset);
                  }
                  outer3_11(sum, () => { ... });
                  const tmp = outer3_11;
                }
              }
              finishScrollToIndex = function finishScrollToIndex() {
                let maxScrollOffset = finishScrollToIndex();
                maxScrollOffset = store.getMaxScrollOffset();
                if (horizontal) {
                  let obj = { offset: startScrollOffset, animated: false, skipFirstItemOffset: true };
                  outer3_13.scrollToOffset(obj);
                }
                obj = { offset: maxScrollOffset, animated: horizontal, skipFirstItemOffset: true };
                outer3_13.scrollToOffset(obj);
                let num = 200;
                if (horizontal) {
                  num = 300;
                }
                outer3_7(() => { ... }, num);
              };
              size = performScrollStep(0);
            }
          }
        }
        arg0();
      });
    };
    obj.scrollToItem = function scrollToItem(item) {
      item = item.item;
      const data = store.props.data;
      if (outer1_1.current) {
        if (data) {
          const findIndexResult = data.findIndex((arg0) => arg0 === item);
          if (findIndexResult >= 0) {
            const obj = { index: findIndexResult, animated: tmp, viewPosition: tmp2, viewOffset: tmp3 };
            outer1_13.scrollToIndex(obj);
          }
        }
      }
    };
    obj.getFirstItemOffset = function getFirstItemOffset() {
      return store.firstItemOffset;
    };
    obj.getWindowSize = function getWindowSize() {
      return store.getWindowSize();
    };
    obj.getLayout = function getLayout(currentStickyIndex) {
      return store.tryGetLayout(currentStickyIndex);
    };
    obj.getAbsoluteLastScrollOffset = function getAbsoluteLastScrollOffset() {
      return store.getAbsoluteLastScrollOffset();
    };
    obj.getChildContainerDimensions = function getChildContainerDimensions() {
      return store.getChildContainerDimensions();
    };
    obj.recordInteraction = function recordInteraction() {
      store.recordInteraction();
    };
    obj.computeVisibleIndices = function computeVisibleIndices() {
      return store.computeVisibleIndices();
    };
    obj.getFirstVisibleIndex = function getFirstVisibleIndex() {
      return store.computeVisibleIndices().startIndex;
    };
    obj.recomputeViewableItems = function recomputeViewableItems() {
      const result = store.recomputeViewableItems();
    };
    obj.updateViewableItems = function updateViewableItems() {
      const itemViewability = store.computeItemViewability();
    };
    obj.prepareForLayoutAnimationRender = function prepareForLayoutAnimationRender() {
      if (!store.props.keyExtractor) {
        const _console = console;
        console.warn(store(5403).WarningMessages.keyExtractorNotDefinedForAnimation);
      }
      store.animationOptimizationsEnabled = true;
    };
    return obj;
  }, items3);
  const items4 = [handlerMethods, recyclerViewManager, _setTimeout];
  const items5 = [handlerMethods, arg2, recyclerViewManager];
  const applyInitialScrollIndex = callback(() => {
    let data;
    let horizontal;
    let initialScrollIndexParams;
    ({ data, initialScrollIndexParams, horizontal } = store.props);
    const initialScrollIndex = store.getInitialScrollIndex();
    let num = -1;
    if (null != initialScrollIndex) {
      num = initialScrollIndex;
    }
    let length;
    if (null != data) {
      length = data.length;
    }
    let num2 = 0;
    if (null != length) {
      num2 = length;
    }
    if (num >= 0) {
      if (num < num2) {
        if (!store.isInitialScrollComplete) {
          if (store.getIsFirstLayoutComplete()) {
            _setTimeout(() => {
              sum.isInitialScrollComplete = true;
              outer1_5.current = false;
            }, 100);
            closure_5.current = true;
            let viewOffset;
            if (null != initialScrollIndexParams) {
              viewOffset = initialScrollIndexParams.viewOffset;
            }
            let num4 = 0;
            if (null != viewOffset) {
              num4 = viewOffset;
            }
            let point = store.getLayout(num);
            if (horizontal) {
              let sum = point.x + num4;
            } else {
              sum = point.y + num4;
            }
            store = sum;
            num4 = handlerMethods.scrollToOffset;
            let obj = { offset: sum, animated: false, skipFirstItemOffset: false };
            point = num4(obj);
            _setTimeout(() => {
              const obj = { offset: closure_0, animated: false, skipFirstItemOffset: false };
              outer1_13.scrollToOffset(obj);
            }, 0);
          }
        }
      }
    }
  }, items4);
  callback2(arg1, () => {
    const merged = Object.assign({}, ref.current, handlerMethods);
    const obj = {
      get() {
        return outer1_0.props;
      },
      enumerable: true,
      configurable: true
    };
    Object.defineProperty(merged, "props", obj);
    return merged;
  }, items5);
  return { applyOffsetCorrection, computeFirstVisibleIndexForOffsetCorrection, applyInitialScrollIndex, handlerMethods };
};
