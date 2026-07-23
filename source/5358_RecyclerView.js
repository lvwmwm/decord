// Module ID: 5358
// Function ID: 45963
// Name: RecyclerView
// Dependencies: [5359, 5365, 31, 27, 33, 5367, 5376, 5377, 5379, 5405, 5410, 5411, 5400, 5403, 5409, 5378, 5412, 5356, 5416, 5413, 5418, 5419]

// Module 5358 (RecyclerView)
import _slicedToArray from "_slicedToArray";
import _objectWithoutProperties from "_objectWithoutProperties";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
let forwardRef;
const require = arg1;
let closure_2 = ["horizontal", "renderItem", "data", "extraData", "onLoad", "CellRendererComponent", "overrideProps", "refreshing", "onRefresh", "progressViewOffset", "ListEmptyComponent", "ListHeaderComponent", "ListHeaderComponentStyle", "ListFooterComponent", "ListFooterComponentStyle", "ItemSeparatorComponent", "renderScrollComponent", "style", "stickyHeaderIndices", "maintainVisibleContentPosition", "onCommitLayoutEffect", "onChangeStickyIndex", "stickyHeaderConfig", "inverted"];
({ useCallback: closure_5, useLayoutEffect: closure_6, useMemo: closure_7, useRef: closure_8, useState: closure_9, useId: closure_10, forwardRef } = result);
({ Animated: closure_11, I18nManager: closure_12 } = get_ActivityIndicator);
({ jsx: closure_13, jsxs: closure_14 } = jsxProd);
class RecyclerViewComponent {
  constructor(arg0, arg1) {
    horizontal = global.horizontal;
    renderItem = global.renderItem;
    data = global.data;
    extraData = global.extraData;
    ({ overrideProps, refreshing, onRefresh, progressViewOffset, ListEmptyComponent, ListHeaderComponent, ListHeaderComponentStyle, ListFooterComponent, ListFooterComponentStyle, renderScrollComponent, stickyHeaderIndices } = global);
    maintainVisibleContentPosition = global.maintainVisibleContentPosition;
    useCallback = maintainVisibleContentPosition;
    ({ onCommitLayoutEffect, onChangeStickyIndex } = global);
    ({ stickyHeaderConfig, inverted } = global);
    ({ onLoad, CellRendererComponent, ItemSeparatorComponent, style } = global);
    tmp = stickyHeaderIndices(global, data);
    num = 1;
    first = extraData(useState(() => {
      const renderTimeTracker = new horizontal(renderItem[5]).RenderTimeTracker();
      return renderTimeTracker;
    }), 1)[0];
    useState = first;
    startTrackingResult = first.startTracking();
    offset = undefined;
    if (null != stickyHeaderConfig) {
      offset = stickyHeaderConfig.offset;
    }
    num2 = 0;
    if (null != offset) {
      num2 = offset;
    }
    c10 = num2;
    useNativeDriver = undefined;
    if (null != stickyHeaderConfig) {
      useNativeDriver = stickyHeaderConfig.useNativeDriver;
    }
    tmp5 = null == useNativeDriver || useNativeDriver;
    Animated = tmp5;
    hideRelatedCell = undefined;
    if (null != stickyHeaderConfig) {
      hideRelatedCell = stickyHeaderConfig.hideRelatedCell;
    }
    tmp7 = null != hideRelatedCell && hideRelatedCell;
    I18nManager = tmp7;
    zIndex = undefined;
    if (null != stickyHeaderConfig) {
      zIndex = stickyHeaderConfig.zIndex;
    }
    num3 = 2;
    if (null != zIndex) {
      num3 = zIndex;
    }
    c13 = num3;
    invertedTransformStyle = undefined;
    if (inverted) {
      tmp10 = horizontal;
      tmp11 = renderItem;
      num4 = 6;
      obj2 = require("getInvertedTransformStyle");
      invertedTransformStyle = obj2.getInvertedTransformStyle(horizontal);
    }
    tmp12 = inverted(null);
    jsxs = tmp12;
    tmp13 = inverted(null);
    closure_15 = tmp13;
    getInvertedTransformStyle = inverted(null);
    getInvertedTransformStyle = inverted(undefined);
    set = new Set();
    current = inverted(set).current;
    value = new Animated.Value(0);
    current2 = inverted(value).current;
    current = current2;
    Value = inverted(null);
    tmp16 = inverted(null);
    closure_21 = tmp16;
    obj3 = require("useLayoutState");
    tmp17 = extraData(require("_slicedToArray"), 2);
    tmp18 = tmp17[num];
    stickyHeaderConfig = tmp18;
    tmp19 = extraData(require("_slicedToArray"), 2);
    useLayoutState = tmp19[num];
    tmp20 = extraData(require("module_4294967295"), 2);
    first1 = tmp20[0];
    closure_24 = first1;
    c25 = tmp20[num];
    tmp22 = onChangeStickyIndex(() => new Map(), []);
    closure_26 = tmp22;
    obj4 = require("useRecyclerViewManager");
    recyclerViewManager = obj4.useRecyclerViewManager(global);
    recyclerViewManager = recyclerViewManager.recyclerViewManager;
    velocityTracker = recyclerViewManager.velocityTracker;
    obj5 = require("useRecyclerViewController");
    recyclerViewController = obj5.useRecyclerViewController(recyclerViewManager, arg1, tmp12, tmp16);
    ({ applyOffsetCorrection, computeFirstVisibleIndexForOffsetCorrection } = recyclerViewController);
    applyOffsetCorrection = computeFirstVisibleIndexForOffsetCorrection;
    ({ applyInitialScrollIndex, handlerMethods } = recyclerViewController);
    tmp25 = inverted(null);
    closure_33 = tmp25;
    obj6 = require("useOnLoad");
    onListLoad = obj6.useOnListLoad(recyclerViewManager, onLoad);
    obj7 = require("useBoundDetection");
    checkBounds = obj7.useBoundDetection(recyclerViewManager, tmp12).checkBounds;
    tmp27 = I18nManager.isRTL && horizontal;
    isRTL = tmp27;
    tmp28 = onCommitLayoutEffect(() => {
      if (tmp13.current) {
        if (ref.current) {
          let obj = horizontal(renderItem[12]);
          const size = obj.measureParentSize(tmp13.current);
          const size2 = horizontal(renderItem[12]).measureFirstChildLayout(ref.current, tmp13.current);
          closure_17.current = size;
          const tmp9 = horizontal ? size2.x : size2.y;
          obj = { width: horizontal ? size.width : size2.width, height: horizontal ? size2.height : size.height };
          let diff = tmp9;
          if (closure_35) {
            diff = tmp9;
            if (recyclerViewManager.hasLayout()) {
              diff = tmp9 - recyclerViewManager.getChildContainerDimensions().width;
            }
          }
          recyclerViewManager.updateLayoutParams(obj, diff);
          const obj2 = horizontal(renderItem[12]);
        }
      }
    });
    tmp29 = onCommitLayoutEffect(() => {
      if (current.size <= 0) {
        const _Array = Array;
        const result = first.hasExceededMaxRendersWithoutCommit();
        if (result) {
          const _console = console;
          console.warn(horizontal(renderItem[13]).WarningMessages.exceededMaxRendersWithoutCommit);
        }
        let length;
        if (null != data) {
          length = data.length;
        }
        let num2 = 0;
        if (null != length) {
          num2 = length;
        }
        if (recyclerViewManager.modifyChildrenLayout(arr, num2)) {
          if (!result) {
            callback2((arg0) => arg0 + 1);
          }
          let hasLayoutResult = horizontal;
          if (horizontal) {
            hasLayoutResult = recyclerViewManager.hasLayout();
          }
          if (hasLayoutResult) {
            hasLayoutResult = recyclerViewManager.getWindowSize().height > 0;
          }
          if (hasLayoutResult) {
            if (null != recyclerViewContext) {
              const result1 = recyclerViewContext.unmarkChildLayoutAsPending(closure_38);
            }
          }
        }
        current = tmp25.current;
        if (null != current) {
          current.commitLayout();
        }
        callback3();
        arr = Array.from(closure_26, (arg0) => {
          const tmp = extraData(arg0, 2);
          const first = tmp[0];
          const obj = { index: first, dimensions: horizontal(renderItem[12]).measureItemLayout(tmp[1].current, outer1_27.tryGetLayout(first)) };
          return obj;
        });
      }
    });
    items = [, , , , , ];
    items[0] = checkBounds;
    items[1] = computeFirstVisibleIndexForOffsetCorrection;
    items[2] = horizontal;
    items[3] = tmp27;
    items[4] = recyclerViewManager;
    items[5] = velocityTracker;
    tmp30 = useCallback((nativeEvent) => {
      if (!recyclerViewManager.ignoreScrollEvents) {
        const contentOffset = nativeEvent.nativeEvent.contentOffset;
        const tmp2 = horizontal ? contentOffset.x : contentOffset.y;
        horizontal = tmp2;
        let tmp4 = tmp2;
        if (closure_35) {
          const adjustOffsetForRTLResult = horizontal(renderItem[14]).adjustOffsetForRTL(tmp2, nativeEvent.nativeEvent.contentSize.width, nativeEvent.nativeEvent.layoutMeasurement.width);
          horizontal = adjustOffsetForRTLResult;
          tmp4 = adjustOffsetForRTLResult;
          const obj = horizontal(renderItem[14]);
        }
        const _Boolean = Boolean;
        const absoluteLastScrollOffset = recyclerViewManager.getAbsoluteLastScrollOffset();
        const velocity = velocityTracker.computeVelocity(tmp4, absoluteLastScrollOffset, Boolean(horizontal), (arg0, arg1) => {
          if (!outer1_27.ignoreScrollEvents) {
            if (arg1) {
              outer1_30();
              if (outer1_27.isOffsetProjectionEnabled) {
                outer1_27.resetVelocityCompute();
              }
            }
            if (outer1_27.updateScrollOffset(closure_0, arg0)) {
              outer1_23((arg0) => arg0 + 1);
            }
          }
        });
        const current = ref3.current;
        if (null != current) {
          current.reportScrollEvent(nativeEvent.nativeEvent);
        }
        checkBounds();
        if (recyclerViewManager.isInitialScrollComplete) {
          recyclerViewManager.recordInteraction();
        }
        const itemViewability = recyclerViewManager.computeItemViewability();
        if (null != recyclerViewManager.props.onScroll) {
          const props = recyclerViewManager.props;
          props.onScroll(nativeEvent);
        }
      }
    }, items);
    closure_36 = tmp30;
    obj8 = require("context");
    recyclerViewContext = obj8.useRecyclerViewContext();
    closure_37 = recyclerViewContext;
    tmp31 = c10();
    applyInitialScrollIndex = tmp31;
    items1 = [, , , , ];
    items1[0] = handlerMethods;
    items1[1] = recyclerViewContext;
    items1[2] = current;
    items1[3] = recyclerViewManager.isDisposed;
    items1[4] = tmp18;
    tmp32 = onChangeStickyIndex(() => ({
      layout() {
        outer1_22((arg0) => arg0 + 1);
      },
      getRef() {
        let tmp = null;
        if (!outer1_27.isDisposed) {
          tmp = outer1_32;
        }
        return tmp;
      },
      getParentRef() {
        let ref;
        if (null != outer1_37) {
          ref = outer1_37.getRef();
        }
        let tmp3 = null;
        if (null != ref) {
          tmp3 = ref;
        }
        return tmp3;
      },
      getParentScrollViewRef() {
        let scrollViewRef;
        if (null != outer1_37) {
          scrollViewRef = outer1_37.getScrollViewRef();
        }
        let tmp3 = null;
        if (null != scrollViewRef) {
          tmp3 = scrollViewRef;
        }
        return tmp3;
      },
      getScrollViewRef() {
        return outer1_14.current;
      },
      markChildLayoutAsPending(arg0) {
        outer1_18.add(arg0);
      },
      unmarkChildLayoutAsPending(arg0) {
        if (outer1_18.has(arg0)) {
          outer1_18.delete(arg0);
          outer1_39.layout();
        }
      }
    }), items1);
    f45974 = tmp32;
    items2 = [, ];
    items2[0] = tmp32;
    items2[1] = recyclerViewManager;
    tmp33 = useCallback((arg0, width) => {
      const size = recyclerViewManager.getLayout(arg0);
      const maxWidth = size.maxWidth;
      let num = Infinity;
      let num2 = Infinity;
      if (null != maxWidth) {
        num2 = maxWidth;
      }
      const minWidth = size.minWidth;
      let num3 = 0;
      const bound = Math.min(size.width, num2);
      if (null != minWidth) {
        num3 = minWidth;
      }
      const maxHeight = size.maxHeight;
      const bound1 = Math.max(bound, num3);
      if (null != maxHeight) {
        num = maxHeight;
      }
      const minHeight = size.minHeight;
      let num4 = 0;
      const bound2 = Math.min(size.height, num);
      if (null != minHeight) {
        num4 = minHeight;
      }
      const bound3 = Math.max(bound2, num4);
      let result = horizontal(renderItem[12]).areDimensionsNotEqual(bound1, width.width);
      if (!result) {
        result = horizontal(renderItem[12]).areDimensionsNotEqual(bound3, width.height);
        const obj2 = horizontal(renderItem[12]);
      }
      if (result) {
        tmp32.layout();
      }
    }, items2);
    obj10 = require("useSecondaryProps");
    secondaryProps = obj10.useSecondaryProps(global);
    ({ refreshControl, renderHeader, renderFooter, renderEmpty, CompatScrollView, renderStickyHeaderBackdrop } = secondaryProps);
    tmp35 = !recyclerViewManager.getIsFirstLayoutComplete() && recyclerViewManager.getDataLength() > 0;
    if (tmp35) {
      if (null != recyclerViewContext) {
        result = recyclerViewContext.markChildLayoutAsPending(tmp31);
      }
    }
    items3 = [, , , , , , , , , , , , ];
    items3[0] = data;
    items3[1] = stickyHeaderIndices;
    items3[2] = num2;
    items3[3] = renderItem;
    items3[4] = current2;
    items3[5] = horizontal;
    items3[6] = recyclerViewManager;
    items3[7] = extraData;
    items3[8] = first1;
    items3[9] = onChangeStickyIndex;
    items3[10] = tmp7;
    items3[11] = num3;
    items3[12] = inverted;
    tmp37 = onChangeStickyIndex(() => {
      if (data) {
        if (data.length > 0) {
          if (stickyHeaderIndices) {
            if (stickyHeaderIndices.length > 0) {
              if (horizontal) {
                const _Error = Error;
                const error = new Error(horizontal(renderItem[17]).ErrorMessages.stickyHeadersNotSupportedForHorizontal);
                throw error;
              } else {
                const obj = {
                  stickyHeaderIndices,
                  stickyHeaderOffset: 18,
                  data,
                  renderItem,
                  scrollY: current2,
                  stickyHeaderRef: closure_20,
                  stickyHeaderZIndex: num3,
                  recyclerViewManager,
                  extraData,
                  inverted,
                  onChangeStickyIndex(stickyHeaderRef, items1, items3) {
                              if (outer1_12) {
                                outer1_25(stickyHeaderRef);
                              }
                              if (null != outer1_7) {
                                outer1_7(stickyHeaderRef, outer1_24);
                              }
                            }
                };
                return num3(horizontal(renderItem[18]).StickyHeaders, obj);
              }
            }
          }
        }
      }
      return null;
    }, items3);
    markChildLayoutAsPending = tmp37;
    items4 = [, , , ];
    items4[0] = tmp30;
    items4[1] = current2;
    items4[2] = tmp37;
    items4[3] = tmp5;
    tmp38 = onChangeStickyIndex(() => {
      if (closure_40) {
        let obj = {};
        obj = {};
        obj = { y: current2 };
        obj.contentOffset = obj;
        obj.nativeEvent = obj;
        const items = [obj];
        const obj1 = { useNativeDriver: tmp5, listener: closure_36 };
        let eventResult = tmp5.event(items, obj1);
      } else {
        eventResult = closure_36;
      }
      return eventResult;
    }, items4);
    result1 = recyclerViewManager.shouldMaintainVisibleContentPosition();
    f45986 = result1;
    items5 = [, ];
    items5[0] = maintainVisibleContentPosition;
    items5[1] = result1;
    tmp40 = onChangeStickyIndex(() => {
      if (result1) {
        const _Object = Object;
        const obj = { minIndexForVisible: 0 };
        return Object.assign({}, maintainVisibleContentPosition, obj);
      }
    }, items5);
    tmp41 = recyclerViewManager.getDataLength() > 0;
    if (tmp41) {
      prop = undefined;
      if (null != maintainVisibleContentPosition) {
        prop = maintainVisibleContentPosition.startRenderingFromBottom;
      }
      tmp41 = null != prop;
      tmp42 = prop;
    }
    if (tmp41) {
      tmp41 = tmp42;
    }
    getDataLength = tmp41;
    items6 = [, ];
    items6[0] = horizontal;
    items6[1] = num2;
    tmp44 = onChangeStickyIndex(() => {
      let obj = {};
      obj = {};
      let tmp2;
      if (!horizontal) {
        tmp2 = num2;
      }
      obj.marginTop = tmp2;
      obj.height = 0;
      num2 = undefined;
      if (horizontal) {
        num2 = 0;
      }
      obj.width = num2;
      obj.style = obj;
      obj.ref = closure_16;
      return num3(horizontal(renderItem[19]).CompatView, obj);
    }, items6);
    items7 = [, ];
    items7[0] = horizontal;
    items7[1] = result1;
    tmp45 = onChangeStickyIndex(() => {
      let tmp = null;
      if (result1) {
        const obj = {};
        const _Boolean = Boolean;
        obj.horizontal = Boolean(horizontal);
        obj.scrollAnchorRef = closure_21;
        tmp = num3(horizontal(renderItem[20]).ScrollAnchor, obj);
      }
      return tmp;
    }, items7);
    tmp46 = c13;
    obj = { value: tmp32 };
    tmp47 = jsxs;
    obj1 = {};
    obj2 = {};
    obj2.flex = num;
    obj2.overflow = "hidden";
    items8 = [, , ];
    items8[0] = obj2;
    items8[1] = style;
    items8[2] = invertedTransformStyle;
    obj1.style = items8;
    obj1.ref = tmp13;
    obj1.collapsable = false;
    obj1.onLayout = function onLayout(nativeEvent) {
      const current = ref2.current;
      let width;
      if (null != current) {
        width = current.width;
      }
      let num = 0;
      if (null != width) {
        num = width;
      }
      let result = horizontal(renderItem[12]).areDimensionsNotEqual(nativeEvent.nativeEvent.layout.width, num);
      if (!result) {
        const current2 = ref2.current;
        let height;
        if (null != current2) {
          height = current2.height;
        }
        let num2 = 0;
        if (null != height) {
          num2 = height;
        }
        result = horizontal(renderItem[12]).areDimensionsNotEqual(nativeEvent.nativeEvent.layout.height, num2);
        const obj2 = horizontal(renderItem[12]);
      }
      if (result) {
        tmp32.layout();
      }
    };
    obj3 = { horizontal, ref: tmp12, onScroll: tmp38, maintainVisibleContentPosition: tmp40, removeClippedSubviews: false, refreshControl };
    obj4 = {};
    items9 = [, , , , , , ];
    items9[0] = tmp45;
    tmp49 = tmp27;
    tmp48 = jsxs;
    if (tmp27) {
      tmp49 = tmp44;
    }
    items9[1] = tmp49;
    items9[2] = renderHeader;
    items9[3] = !tmp27 && tmp44;
    obj5 = { viewHolderCollectionRef: tmp25, data, horizontal };
    obj5.renderStack = recyclerViewManager.getRenderStack();
    obj5.getLayout = function getLayout(arg0) {
      return recyclerViewManager.getLayout(arg0);
    };
    obj5.getAdjustmentMargin = function getAdjustmentMargin() {
      if (closure_42) {
        if (recyclerViewManager.hasLayout()) {
          const size = recyclerViewManager.getWindowSize();
          const size2 = recyclerViewManager.getChildContainerDimensions();
          const _Math = Math;
          return Math.max(0, (horizontal ? size.width : size.height) - (horizontal ? size2.width : size2.height) - recyclerViewManager.firstItemOffset);
        }
      }
      return 0;
    };
    obj5.refHolder = tmp22;
    obj5.onSizeChanged = tmp33;
    obj5.renderItem = renderItem;
    obj5.extraData = extraData;
    obj5.onCommitLayoutEffect = function onCommitLayoutEffect(arg0) {
      callback4();
      if (null != recyclerViewContext) {
        const result = recyclerViewContext.unmarkChildLayoutAsPending(closure_38);
      }
      if (null != callback) {
        callback();
      }
    };
    obj5.onCommitEffect = function onCommitEffect() {
      first.markRenderComplete();
      const result = recyclerViewManager.updateAverageRenderTime(first.getAverageRenderTime());
      callback4();
      checkBounds();
      const itemViewability = recyclerViewManager.computeItemViewability();
      recyclerViewManager.animationOptimizationsEnabled = false;
    };
    obj5.CellRendererComponent = CellRendererComponent;
    obj5.ItemSeparatorComponent = ItemSeparatorComponent;
    obj5.isInLastRow = function isInLastRow(arg0) {
      return recyclerViewManager.isInLastRow(arg0);
    };
    obj5.getChildContainerLayout = function getChildContainerLayout() {
      let childContainerDimensions;
      if (recyclerViewManager.hasLayout()) {
        childContainerDimensions = recyclerViewManager.getChildContainerDimensions();
      }
      return childContainerDimensions;
    };
    obj5.currentStickyIndex = first1;
    obj5.hideStickyHeaderRelatedCell = tmp7;
    obj5.inverted = inverted;
    items9[4] = c13(require("ViewHolderCollection").ViewHolderCollection, obj5);
    items9[5] = renderEmpty;
    items9[6] = renderFooter;
    obj4.children = items9;
    items10 = [, , ];
    items10[0] = tmp48(CompatScrollView, Object.assign({}, tmp, obj3, overrideProps, obj4));
    tmp50 = null;
    if (stickyHeaderIndices) {
      tmp50 = null;
      if (stickyHeaderIndices.length > 0) {
        tmp50 = renderStickyHeaderBackdrop;
      }
    }
    items10[1] = tmp50;
    items10[2] = tmp37;
    obj1.children = items10;
    obj.children = tmp47(require("CompatView").CompatView, obj1);
    return tmp46(require("context").RecyclerViewContextProvider, obj);
  }
}
RecyclerViewComponent.displayName = "FlashList";

export const RecyclerView = require("result").memo(forwardRef(RecyclerViewComponent));
