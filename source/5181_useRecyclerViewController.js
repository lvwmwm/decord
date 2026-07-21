// Module ID: 5181
// Function ID: 43929
// Name: useRecyclerViewController
// Dependencies: []
// Exports: useRecyclerViewController

// Module 5181 (useRecyclerViewController)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
({ useCallback: closure_4, useImperativeHandle: closure_5, useMemo: closure_6, useRef: closure_7, useState: closure_8 } = arg1(dependencyMap[2]));
const I18nManager = arg1(dependencyMap[3]).I18nManager;

export const useRecyclerViewController = function useRecyclerViewController(recyclerViewManager, arg1, arg2, arg3) {
  arg1 = recyclerViewManager;
  const dependencyMap = arg2;
  let closure_2 = arg3;
  const unmountFlag = arg1(dependencyMap[4]).useUnmountFlag();
  const callback = unmountFlag;
  const obj = arg1(dependencyMap[4]);
  const callback2 = callback(callback5(0), 2)[1];
  const callback3 = _setTimeout(false);
  const callback4 = _setTimeout(recyclerViewManager.getDataLength());
  const tmp2 = callback(callback5(0), 2);
  const _setTimeout = arg1(dependencyMap[5]).useUnmountAwareTimeout().setTimeout;
  const callback5 = _setTimeout(undefined);
  let closure_9 = _setTimeout(undefined);
  let closure_10 = _setTimeout([]);
  const items = [recyclerViewManager];
  const tmp3 = callback2((arg0, arg1) => {
    if (undefined !== arg0.updateScrollOffset(arg0)) {
      const current = ref5.current;
      current.push(arg1);
      callback((arg0) => arg0 + 1);
    } else {
      arg1();
    }
  }, items);
  const items1 = [recyclerViewManager];
  const computeFirstVisibleIndexForOffsetCorrection = callback2((self) => {
    if (self.getIsFirstLayoutComplete()) {
      if (self.hasStableDataKeys()) {
        if (self.getDataLength() > 0) {
          if (self.shouldMaintainVisibleContentPosition()) {
            const _Math = Math;
            const bound = Math.max(0, self.computeVisibleIndices().startIndex);
            if (tmp6) {
              closure_8.current = self.getDataKey(bound);
              const _Object = Object;
              closure_9.current = Object.assign({}, self.getLayout(bound));
            }
            const tmp6 = undefined !== bound && bound >= 0;
          }
        }
      }
    }
  }, items1);
  const items2 = [recyclerViewManager, arg3, arg2, _setTimeout, tmp3, computeFirstVisibleIndexForOffsetCorrection];
  const items3 = [recyclerViewManager, arg2, _setTimeout, unmountFlag, tmp3];
  const applyOffsetCorrection = callback2((self) => {
    let data;
    let horizontal;
    ({ horizontal, data } = self.props);
    let current = ref5.current;
    ref5.current = [];
    const item = current.forEach((arg0) => arg0());
    const dataLength = self.getDataLength();
    if (self.getIsFirstLayoutComplete()) {
      if (self.hasStableDataKeys()) {
        if (dataLength > 0) {
          if (self.shouldMaintainVisibleContentPosition()) {
            if (ref3.current) {
              const engagedIndices = self.getEngagedIndices();
              let findValueResult = engagedIndices.findValue((bound) => store.getDataKey(bound) === ref.current);
              if (null == findValueResult) {
                if (tmp5) {
                  let findIndexResult;
                  if (null != data) {
                    findIndexResult = data.findIndex((arg0, bound) => store.getDataKey(bound) === ref.current);
                  }
                  const tmp11 = findIndexResult;
                }
                findValueResult = tmp11;
              }
              if (undefined !== findValueResult) {
                if (findValueResult >= 0) {
                  const point = self.getLayout(findValueResult);
                  if (horizontal) {
                    let diff = point.x - ref4.current.x;
                  } else {
                    diff = point.y - ref4.current.y;
                  }
                  const _Object = Object;
                  ref4.current = Object.assign({}, self.getLayout(findValueResult));
                  if (0 !== diff) {
                    if (!ref.current) {
                      if (!self.animationOptimizationsEnabled) {
                        if (self(arg2[6]).PlatformConfig.supportsOffsetCorrection) {
                          const current2 = arg3.current;
                          if (null != current2) {
                            current2.scrollBy(diff);
                          }
                        } else {
                          const obj = {};
                          const sum = self.getAbsoluteLastScrollOffset() + diff;
                          if (horizontal) {
                            obj.x = sum;
                            obj.animated = false;
                            let tmp24 = obj;
                          } else {
                            obj.y = sum;
                            obj.animated = false;
                            tmp24 = obj;
                          }
                          current = arg2.current;
                          if (null != current) {
                            current.scrollTo(tmp24);
                          }
                        }
                        if (tmp5) {
                          tmp3(self.getAbsoluteLastScrollOffset() + diff, () => {

                          });
                          self.ignoreScrollEvents = true;
                          _setTimeout(() => {
                            closure_0.ignoreScrollEvents = false;
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
    ref2.current = self.getDataLength();
  }, items2);
  const handlerMethods = callback4(() => {
    const obj = {};
    Object.defineProperty(obj, "props", { get: () => store.props, set: undefined });
    obj.scrollToOffset = function scrollToOffset(arg0) {
      let animated;
      let offset;
      let skipFirstItemOffset;
      ({ offset, animated, skipFirstItemOffset } = arg0);
      const horizontal = store.props.horizontal;
      if (closure_1.current) {
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
          current = closure_1.current;
          const _Object = Object;
          assign = Object.assign;
          obj = { animated };
          animated = current.scrollTo(assign({}, tmp11, obj));
        } else {
          current = store(closure_1[7]);
          const firstItemOffset = store.firstItemOffset;
          const sum = current.adjustOffsetForRTL(offset, store.getChildContainerDimensions().width, store.getWindowSize().width) + tmp ? firstItemOffset : -firstItemOffset;
        }
        const tmp3 = isRTL.isRTL && horizontal;
      }
    };
    obj.clearLayoutCacheOnUpdate = function clearLayoutCacheOnUpdate() {
      const result = store.markLayoutManagerDirty();
    };
    obj.flashScrollIndicators = function flashScrollIndicators() {
      const current = closure_1.current;
      const result = current.flashScrollIndicators();
    };
    obj.getNativeScrollRef = function getNativeScrollRef() {
      return closure_1.current;
    };
    obj.getScrollResponder = function getScrollResponder() {
      const current = closure_1.current;
      return current.getScrollResponder();
    };
    obj.getScrollableNode = function getScrollableNode() {
      const current = closure_1.current;
      return current.getScrollableNode();
    };
    let closure_0 = arg3(async () => {
      let animated;
      if (arguments.length > 0) {
        if (undefined !== arguments[0]) {
          const first = arguments[0];
        }
        animated = {}.animated;
        const data = animated.props.data;
        if (data) {
          if (data.length > 0) {
            const diff = data.length - 1;
            const engagedIndices = animated.getEngagedIndices();
            if (!engagedIndices.includes(diff)) {
              const obj = { index: diff, animated };
              return yield closure_13.scrollToIndex(obj);
            }
          }
        }
        callback(() => {
          const current = ref.current;
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
        closure_13.scrollToOffset(obj);
      }
    };
    obj.scrollToIndex = function scrollToIndex(arg0) {
      ({ index: closure_0, animated: closure_1, viewPosition: closure_2, viewOffset: closure_3 } = arg0);
      return new Promise((self) => {
        const horizontal = self.props.horizontal;
        if (horizontal.current) {
          if (self >= 0) {
            if (self < self.getDataLength()) {
              getStartScrollOffset.current = true;
              const result = self.setOffsetProjectionEnabled(false);
              let finishScrollToIndex = function getFinalOffset(self) {
                const size = self.getLayout(self);
                const tmp = horizontal ? size.x : size.y;
                if (undefined !== finishScrollToIndex) {
                  const size2 = self.getWindowSize();
                  let diff = tmp;
                  if (undefined !== finishScrollToIndex) {
                    diff = tmp - (horizontal ? size2.width : size2.height - horizontal ? size.width : size.height) * finishScrollToIndex;
                  }
                  let sum = diff;
                  if (undefined !== closure_3) {
                    sum = diff + closure_3;
                  }
                } else {
                  sum = tmp;
                }
                return sum + self.firstItemOffset;
              };
              const absoluteLastScrollOffset = self.getAbsoluteLastScrollOffset();
              let size = self.getWindowSize();
              let closure_4 = 2 * horizontal ? size.width : size.height;
              function getStartScrollOffset() {
                const tmp2 = finishScrollToIndex();
                if (tmp2 > closure_3) {
                  const _Math2 = Math;
                  let bound = Math.max(tmp2 - closure_4, tmp);
                  arg0.setScrollDirection("forward");
                } else {
                  const _Math = Math;
                  bound = Math.min(tmp2 + closure_4, tmp);
                  arg0.setScrollDirection("backward");
                }
                return bound;
              }
              let closure_6 = finishScrollToIndex();
              const startScrollOffset = getStartScrollOffset();
              let closure_8 = closure_6;
              function performScrollStep(arg0) {
                if (ref.current) {
                  arg0();
                } else if (arg0 >= 5) {
                  finishScrollToIndex();
                } else {
                  if (horizontal) {
                    let sum = closure_8 + arg0 / 4 * (startScrollOffset - closure_8);
                  } else {
                    sum = startScrollOffset + arg0 / 4 * (closure_8 - startScrollOffset);
                  }
                  finishScrollToIndex(sum, () => { ... });
                  const tmp = finishScrollToIndex;
                }
              }
              finishScrollToIndex = function finishScrollToIndex() {
                let closure_8 = finishScrollToIndex();
                const maxScrollOffset = arg0.getMaxScrollOffset();
                if (closure_8 > maxScrollOffset) {
                  closure_8 = maxScrollOffset;
                }
                if (horizontal) {
                  let obj = { offset: startScrollOffset };
                  closure_13.scrollToOffset(obj);
                }
                obj = { offset: closure_8, animated: horizontal, skipFirstItemOffset: true };
                closure_13.scrollToOffset(obj);
                let num = 200;
                if (horizontal) {
                  num = 300;
                }
                startScrollOffset(() => { ... }, num);
              };
              size = performScrollStep(0);
            }
          }
        }
        self();
      });
    };
    obj.scrollToItem = function scrollToItem(item) {
      const store = item.item;
      const data = store.props.data;
      if (closure_1.current) {
        if (data) {
          const findIndexResult = data.findIndex((arg0) => arg0 === item);
          if (findIndexResult >= 0) {
            const obj = { index: findIndexResult, animated: tmp, viewPosition: tmp2, viewOffset: tmp3 };
            closure_13.scrollToIndex(obj);
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
        console.warn(store(closure_1[8]).WarningMessages.keyExtractorNotDefinedForAnimation);
      }
      store.animationOptimizationsEnabled = true;
    };
    return obj;
  }, items3);
  const items4 = [handlerMethods, recyclerViewManager, _setTimeout];
  const items5 = [handlerMethods, arg2, recyclerViewManager];
  const applyInitialScrollIndex = callback2((self) => {
    let data;
    let horizontal;
    let initialScrollIndexParams;
    ({ data, initialScrollIndexParams, horizontal } = self.props);
    const initialScrollIndex = self.getInitialScrollIndex();
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
        if (!self.isInitialScrollComplete) {
          if (self.getIsFirstLayoutComplete()) {
            _setTimeout(() => {
              sum.isInitialScrollComplete = true;
              closure_5.current = false;
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
            let point = self.getLayout(num);
            if (horizontal) {
              let sum = point.x + num4;
            } else {
              sum = point.y + num4;
            }
            self = sum;
            num4 = handlerMethods.scrollToOffset;
            const obj = { -1403949471: "absolute", -279862687: -1, 0: -1, offset: sum };
            point = num4(obj);
            _setTimeout(() => {
              const obj = { -1403949471: "absolute", -279862687: -1, 0: -1, offset: sum };
              closure_13.scrollToOffset(obj);
            }, 0);
          }
        }
      }
    }
  }, items4);
  callback3(arg1, () => {
    const merged = Object.assign({}, arg2.current, handlerMethods);
    Object.defineProperty(merged, "props", {
      get() {
        return props.props;
      }
    });
    return merged;
  }, items5);
  return { applyOffsetCorrection, computeFirstVisibleIndexForOffsetCorrection, applyInitialScrollIndex, handlerMethods };
};
