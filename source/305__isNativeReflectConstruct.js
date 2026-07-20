// Module ID: 305
// Function ID: 4607
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 305 (_isNativeReflectConstruct)
let Platform;
let StyleSheet;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function getScrollingThreshold(arg0, arg1) {
  return arg0 * arg1 / 2;
}
let closure_4 = ["createAnimatedNode"];
let closure_5 = importDefault(dependencyMap[0]);
let closure_6 = importDefault(dependencyMap[1]);
let closure_7 = importDefault(dependencyMap[2]);
let closure_8 = importDefault(dependencyMap[3]);
let closure_9 = importDefault(dependencyMap[4]);
let closure_10 = importDefault(dependencyMap[5]);
let closure_11 = importDefault(dependencyMap[6]);
let closure_12 = importDefault(dependencyMap[7]);
let closure_13 = importAll(dependencyMap[8]);
({ cloneElement: closure_14, isValidElement: closure_15 } = arg1(dependencyMap[8]));
const tmp3 = arg1(dependencyMap[9]);
({ I18nManager: closure_16, Platform, RefreshControl: closure_17, ScrollView: closure_18, StyleSheet } = tmp3);
({ View: closure_20, findNodeHandle: closure_21 } = tmp3);
const tmp2 = arg1(dependencyMap[8]);
({ jsx: closure_22, jsxs: closure_23 } = arg1(dependencyMap[10]));
let closure_24 = false;
let closure_25 = "";
const tmp5 = (arg0) => {
  class VirtualizedList {
    constructor(arg0) {
      self = this;
      tmp = closure_8(this, VirtualizedList);
      items = [];
      items[0] = arg0;
      obj = closure_11(VirtualizedList);
      tmp2 = closure_10;
      if (closure_27()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_11;
        constructResult = Reflect.construct(obj, items, closure_11(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      VirtualizedList = tmp2Result;
      tmp2Result._getScrollMetrics = () => tmp2Result._scrollMetrics;
      tmp2Result._getOutermostParentListRef = () => {
        if (tmp2Result._isNestedWithSameOrientation()) {
          const context = tmp.context;
          let outermostParentListRef = context.getOutermostParentListRef();
        } else {
          outermostParentListRef = tmp;
        }
        return outermostParentListRef;
      };
      tmp2Result._registerAsNestedChild = (ref) => {
        const _nestedChildLists = tmp2Result._nestedChildLists;
        _nestedChildLists.add(ref.ref, ref.cellKey);
        if (tmp2Result._hasInteracted) {
          ref.ref.recordInteraction();
          ref = ref.ref;
        }
      };
      tmp2Result._unregisterAsNestedChild = (ref) => {
        const _nestedChildLists = tmp2Result._nestedChildLists;
        _nestedChildLists.remove(ref.ref);
      };
      tmp2Result._onUpdateSeparators = (arr) => {
        const item = arr.forEach((arg0) => {
          let obj = null != arg0;
          if (obj) {
            obj = arg1._cellRefs[arg0];
          }
          if (obj) {
            obj.updateSeparatorProps(arg1);
          }
        });
      };
      tmp2Result._getSpacerKey = (arg0) => {
        let str = "width";
        if (arg0) {
          str = "height";
        }
        return str;
      };
      tmp2Result._cellRefs = {};
      tmp6 = closure_1(closure_3[11]);
      tmp6 = new tmp6();
      tmp2Result._listMetrics = tmp6;
      tmp2Result._footerLength = 0;
      tmp2Result._hasTriggeredInitialScrollToIndex = false;
      tmp2Result._hasInteracted = false;
      tmp2Result._hasMore = false;
      tmp2Result._hasWarned = {};
      tmp2Result._headerLength = 0;
      tmp2Result._hiPriInProgress = false;
      map = new Map();
      tmp2Result._indicesToKeys = map;
      tmp2Result._lastFocusedCellKey = null;
      tmp9 = closure_1(closure_3[12]);
      tmp9 = new tmp9();
      tmp2Result._nestedChildLists = tmp9;
      tmp2Result._offsetFromParentVirtualizedList = 0;
      tmp2Result._pendingViewabilityUpdate = false;
      tmp2Result._prevParentOffset = 0;
      tmp2Result._scrollMetrics = {};
      tmp2Result._scrollRef = null;
      tmp2Result._sentStartForContentLength = 0;
      tmp2Result._sentEndForContentLength = 0;
      tmp2Result._updateCellsToRenderTimeoutID = null;
      tmp2Result._viewabilityTuples = [];
      tmp2Result._captureScrollRef = (_scrollRef) => {
        tmp2Result._scrollRef = _scrollRef;
      };
      tmp2Result._defaultRenderScrollComponent = (onRefresh) => {
        let progressViewOffset = onRefresh.onRefresh;
        if (tmp2Result._isNestedWithSameOrientation()) {
          const onContentSizeChange = onRefresh.onContentSizeChange;
          const _Object2 = Object;
          return callback4(closure_20, Object.assign({}, callback3(onRefresh, closure_4)));
        } else if (progressViewOffset) {
          const refreshing = onRefresh.refreshing;
          let str = "undefined";
          if (null != refreshing) {
            str = refreshing;
          }
          callback(closure_3[13])("boolean" === typeof onRefresh.refreshing, ``refreshing` prop must be set as a boolean in order to use `onRefresh`, but got `${tmp9(str)}``);
          let obj = {};
          if (null == onRefresh.refreshControl) {
            obj = { refreshing: onRefresh.refreshing, onRefresh: progressViewOffset };
            progressViewOffset = onRefresh.progressViewOffset;
            obj.progressViewOffset = progressViewOffset;
            let refreshControl = callback4(closure_17, obj);
          } else {
            refreshControl = onRefresh.refreshControl;
          }
          obj.refreshControl = refreshControl;
          callback4(closure_18, Object.assign({}, onRefresh, obj));
          const tmp12 = callback4;
          const tmp13 = closure_18;
          const tmp6 = callback(closure_3[13]);
        } else {
          const _Object = Object;
          return callback4(closure_18, Object.assign({}, onRefresh));
        }
      };
      tmp2Result._onCellLayout = (layout, cellKey, cellIndex) => {
        const _listMetrics = tmp2Result._listMetrics;
        if (_listMetrics.notifyCellLayout(obj)) {
          const result = tmp2Result._scheduleCellsToRenderUpdate();
        }
        const result1 = tmp2Result._triggerRemeasureForChildListsInCell(cellKey);
        tmp2Result._computeBlankness();
        tmp2Result._updateViewableItems(tmp2Result.props, tmp2Result.state.cellsAroundViewport);
      };
      tmp2Result._onCellFocusCapture = (_lastFocusedCellKey) => {
        tmp2Result._lastFocusedCellKey = _lastFocusedCellKey;
        if (obj.deferFlatListFocusChangeRenderUpdate()) {
          const result = obj2._scheduleCellsToRenderUpdate();
        } else {
          obj2._updateCellsToRender();
        }
      };
      tmp2Result._onCellUnmount = (arg0) => {
        delete r1[r2];
        const _listMetrics = tmp2Result._listMetrics;
        _listMetrics.notifyCellUnmounted(arg0);
      };
      tmp2Result._onLayout = (nativeEvent) => {
        if (tmp2Result._isNestedWithSameOrientation()) {
          const result = obj.measureLayoutRelativeToContainingList();
        } else {
          obj._scrollMetrics.visibleLength = obj._selectLength(nativeEvent.nativeEvent.layout);
        }
        if (tmp2Result.props.onLayout) {
          const props = tmp2Result.props;
          props.onLayout(nativeEvent);
        }
        const result1 = tmp2Result._scheduleCellsToRenderUpdate();
        const result2 = tmp2Result._maybeCallOnEdgeReached();
      };
      tmp2Result._onLayoutEmpty = (arg0) => {
        if (tmp2Result.props.onLayout) {
          const props = tmp2Result.props;
          props.onLayout(arg0);
        }
      };
      tmp2Result._onLayoutFooter = (nativeEvent) => {
        const result = tmp2Result._triggerRemeasureForChildListsInCell(tmp2Result._getFooterCellKey());
        tmp2Result._footerLength = tmp2Result._selectLength(nativeEvent.nativeEvent.layout);
      };
      tmp2Result._onLayoutHeader = (nativeEvent) => {
        tmp2Result._headerLength = tmp2Result._selectLength(nativeEvent.nativeEvent.layout);
      };
      tmp2Result._onContentSizeChange = (width, height) => {
        const _listMetrics = tmp2Result._listMetrics;
        let obj = { layout: obj, orientation: tmp2Result._orientation() };
        obj = { width, height };
        const result = _listMetrics.notifyListContentLayout(obj);
        const result1 = tmp2Result._maybeScrollToInitialScrollIndex(width, height);
        if (tmp2Result.props.onContentSizeChange) {
          const props = tmp2Result.props;
          props.onContentSizeChange(width, height);
        }
        const result2 = tmp2Result._scheduleCellsToRenderUpdate();
        const result3 = tmp2Result._maybeCallOnEdgeReached();
      };
      tmp2Result._convertParentScrollMetrics = (offset) => {
        const diff = offset.offset - tmp2Result._offsetFromParentVirtualizedList;
        const _listMetrics = tmp2Result._listMetrics;
        const diff1 = diff - tmp2Result._scrollMetrics.offset;
        return { visibleLength: offset.visibleLength, contentLength: _listMetrics.getContentLength(), offset: diff, dOffset: diff1 };
      };
      tmp2Result._onScroll = (timeStamp) => {
        let contentLength;
        let dOffset;
        let offset;
        let visibleLength;
        const tmp2Result = timeStamp;
        const _nestedChildLists = tmp2Result._nestedChildLists;
        const item = _nestedChildLists.forEach((_onScroll) => {
          _onScroll._onScroll(_onScroll);
        });
        if (tmp2Result.props.onScroll) {
          const props = tmp2Result.props;
          props.onScroll(timeStamp);
        }
        timeStamp = timeStamp.timeStamp;
        const _selectLengthResult = tmp2Result._selectLength(timeStamp.nativeEvent.layoutMeasurement);
        const result = tmp2Result._offsetFromScrollEvent(timeStamp);
        dOffset = result - tmp2Result._scrollMetrics.offset;
        visibleLength = _selectLengthResult;
        contentLength = tmp2Result._selectLength(timeStamp.nativeEvent.contentSize);
        offset = result;
        if (tmp2Result._isNestedWithSameOrientation()) {
          const _listMetrics = tmp2Result._listMetrics;
          if (0 !== _listMetrics.getContentLength()) {
            let obj = { visibleLength: _selectLengthResult, offset: result };
            const result1 = tmp2Result._convertParentScrollMetrics(obj);
            ({ visibleLength, contentLength, offset, dOffset } = result1);
          }
        }
        let num2 = 1;
        let num3 = 1;
        if (tmp2Result._scrollMetrics.timestamp) {
          const _Math = Math;
          num3 = Math.max(num2, timeStamp - tmp2Result._scrollMetrics.timestamp);
        }
        const result2 = dOffset / num3;
        let tmp11 = num3 > 500;
        if (tmp11) {
          tmp11 = tmp2Result._scrollMetrics.dt > 500;
        }
        if (tmp11) {
          tmp11 = contentLength > 5 * visibleLength;
        }
        if (tmp11) {
          tmp11 = !tmp2Result._hasWarned.perf;
        }
        if (tmp11) {
          obj = { dt: num3, prevDt: tmp2Result._scrollMetrics.dt, contentLength };
          callback(closure_3[15])("VirtualizedList: You have a large list that is slow to update - make sure your renderItem function renders components that follow React performance best practices like PureComponent, shouldComponentUpdate, etc.", obj);
          tmp2Result._hasWarned.perf = true;
        }
        if (timeStamp.nativeEvent.zoomScale >= 0) {
          num2 = timeStamp.nativeEvent.zoomScale;
        }
        obj = { dt: num3, dOffset, offset, timestamp: timeStamp, velocity: result2, visibleLength, zoomScale: num2 };
        tmp2Result._scrollMetrics = obj;
        if (tmp2Result.state.pendingScrollUpdateCount > 0) {
          tmp2Result.setState((pendingScrollUpdateCount) => ({ pendingScrollUpdateCount: pendingScrollUpdateCount.pendingScrollUpdateCount - 1 }));
        }
        tmp2Result._updateViewableItems(tmp2Result.props, tmp2Result.state.cellsAroundViewport);
        if (tmp2Result.props) {
          const result3 = tmp2Result._maybeCallOnEdgeReached();
          if (0 !== result2) {
            const _fillRateHelper = tmp2Result._fillRateHelper;
            _fillRateHelper.activate();
          }
          tmp2Result._computeBlankness();
          const result4 = tmp2Result._scheduleCellsToRenderUpdate();
        }
      };
      tmp2Result._onScrollBeginDrag = (arg0) => {
        const _nestedChildLists = tmp2Result._nestedChildLists;
        const item = _nestedChildLists.forEach((_onScrollBeginDrag) => {
          _onScrollBeginDrag._onScrollBeginDrag(_onScrollBeginDrag);
        });
        const _viewabilityTuples = tmp2Result._viewabilityTuples;
        const item1 = _viewabilityTuples.forEach((viewabilityHelper) => {
          viewabilityHelper = viewabilityHelper.viewabilityHelper;
          viewabilityHelper.recordInteraction();
        });
        arg0._hasInteracted = true;
        if (arg0.props.onScrollBeginDrag) {
          const props = tmp2Result.props;
          props.onScrollBeginDrag(arg0);
        }
      };
      tmp2Result._onScrollEndDrag = (nativeEvent) => {
        const _nestedChildLists = tmp2Result._nestedChildLists;
        const item = _nestedChildLists.forEach((_onScrollEndDrag) => {
          _onScrollEndDrag._onScrollEndDrag(_onScrollEndDrag);
        });
        const velocity = nativeEvent.nativeEvent.velocity;
        if (velocity) {
          tmp2Result._scrollMetrics.velocity = tmp2Result._selectOffset(velocity);
        }
        nativeEvent._computeBlankness();
        if (nativeEvent.props.onScrollEndDrag) {
          const props = tmp2Result.props;
          props.onScrollEndDrag(nativeEvent);
        }
      };
      tmp2Result._onMomentumScrollBegin = (arg0) => {
        const _nestedChildLists = tmp2Result._nestedChildLists;
        const item = _nestedChildLists.forEach((_onMomentumScrollBegin) => {
          const result = _onMomentumScrollBegin._onMomentumScrollBegin(_onMomentumScrollBegin);
        });
        if (arg0.props.onMomentumScrollBegin) {
          const props = tmp2Result.props;
          const result = props.onMomentumScrollBegin(arg0);
        }
      };
      tmp2Result._onMomentumScrollEnd = (nativeEvent) => {
        const _nestedChildLists = tmp2Result._nestedChildLists;
        const item = _nestedChildLists.forEach((_onMomentumScrollEnd) => {
          _onMomentumScrollEnd._onMomentumScrollEnd(_onMomentumScrollEnd);
        });
        nativeEvent._scrollMetrics.velocity = 0;
        nativeEvent._computeBlankness();
        if (nativeEvent.props.onMomentumScrollEnd) {
          const props = tmp2Result.props;
          props.onMomentumScrollEnd(nativeEvent);
        }
      };
      tmp2Result._updateCellsToRender = () => {
        tmp2Result._updateViewableItems(tmp2Result.props, tmp2Result.state.cellsAroundViewport);
        tmp2Result.setState((cellsAroundViewport, getItemCount) => {
          cellsAroundViewport = closure_0._adjustCellsAroundViewport(getItemCount, cellsAroundViewport.cellsAroundViewport, cellsAroundViewport.pendingScrollUpdateCount);
          const renderMask = closure_0._createRenderMask(getItemCount, cellsAroundViewport, closure_0._getNonViewportRenderRegions(getItemCount));
          if (cellsAroundViewport.first === cellsAroundViewport.cellsAroundViewport.first) {
            return { cellsAroundViewport, renderMask };
          }
        });
      };
      tmp2Result._createViewToken = (index, isViewable, getItem) => {
        const value = getItem.getItem(getItem.data, index);
        return { index, item: value, key: tmp2Result._keyExtractor(value, index, getItem), isViewable };
      };
      tmp2Result._getNonViewportRenderRegions = (getItemCount) => {
        if (tmp2Result._lastFocusedCellKey) {
          if (tmp2Result._cellRefs[closure_0._lastFocusedCellKey]) {
            const index = tmp2Result._cellRefs[closure_0._lastFocusedCellKey].props.index;
            const itemCount = getItemCount.getItemCount(getItemCount.data);
            if (index < itemCount) {
              if (tmp2Result._getItemKey(getItemCount, index) === tmp2Result._lastFocusedCellKey) {
                let diff = index - 1;
                let tmp6 = index;
                if (diff >= 0) {
                  let tmp5 = index;
                  let num = 0;
                  tmp6 = index;
                  if (0 < tmp2Result._scrollMetrics.visibleLength) {
                    const diff1 = tmp5 - 1;
                    const _listMetrics = tmp2Result._listMetrics;
                    num = num + _listMetrics.getCellMetricsApprox(diff, getItemCount).length;
                    diff = diff - 1;
                    tmp6 = diff1;
                    while (diff >= 0) {
                      let tmp10 = tmp2Result;
                      tmp5 = diff1;
                      tmp6 = diff1;
                      if (num >= tmp2Result._scrollMetrics.visibleLength) {
                        break;
                      }
                    }
                  }
                }
                let sum = index + 1;
                let tmp12 = index;
                if (sum < itemCount) {
                  let tmp14 = index;
                  let num2 = 0;
                  tmp12 = index;
                  if (0 < tmp2Result._scrollMetrics.visibleLength) {
                    const sum1 = tmp14 + 1;
                    const _listMetrics2 = tmp2Result._listMetrics;
                    num2 = num2 + _listMetrics2.getCellMetricsApprox(sum, getItemCount).length;
                    sum = sum + 1;
                    tmp12 = sum1;
                    while (sum < itemCount) {
                      let tmp17 = tmp2Result;
                      tmp14 = sum1;
                      tmp12 = sum1;
                      if (num2 >= tmp2Result._scrollMetrics.visibleLength) {
                        break;
                      }
                    }
                  }
                }
                const obj = { first: tmp6, last: tmp12 };
                const items = [obj];
                return items;
              }
            }
            return [];
          }
        }
        return [];
      };
      _checkPropsResult = tmp2Result._checkProps(arg0);
      tmp12 = closure_1(closure_3[16]);
      tmp12 = new tmp12(tmp2Result._listMetrics);
      tmp2Result._fillRateHelper = tmp12;
      props = tmp2Result.props;
      if (tmp2Result.props.viewabilityConfigCallbackPairs) {
        prop = props.viewabilityConfigCallbackPairs;
        tmp2Result._viewabilityTuples = prop.map((viewabilityConfig) => {
          const obj = {};
          let tmp = callback(closure_3[17]);
          tmp = new tmp(viewabilityConfig.viewabilityConfig);
          obj.viewabilityHelper = tmp;
          obj.onViewableItemsChanged = viewabilityConfig.onViewableItemsChanged;
          return obj;
        });
      } else {
        ({ onViewableItemsChanged, viewabilityConfig } = props);
        if (onViewableItemsChanged) {
          _viewabilityTuples = tmp2Result._viewabilityTuples;
          obj = {};
          tmp14 = closure_1;
          tmp15 = closure_3;
          num = 17;
          tmp16 = closure_1(closure_3[17]);
          prototype = tmp16.prototype;
          tmp17 = new.target;
          tmp18 = new.target;
          tmp19 = viewabilityConfig;
          tmp16 = new tmp16(viewabilityConfig);
          tmp21 = tmp16;
          obj.viewabilityHelper = tmp16;
          obj.onViewableItemsChanged = onViewableItemsChanged;
          arr = _viewabilityTuples.push(obj);
        }
      }
      _initialRenderRegionResult = VirtualizedList._initialRenderRegion(arg0);
      maintainVisibleContentPosition = tmp2Result.props.maintainVisibleContentPosition;
      minIndexForVisible = undefined;
      if (null != maintainVisibleContentPosition) {
        minIndexForVisible = maintainVisibleContentPosition.minIndexForVisible;
      }
      num2 = 0;
      if (null != minIndexForVisible) {
        num2 = minIndexForVisible;
      }
      obj1 = { cellsAroundViewport: _initialRenderRegionResult, renderMask: VirtualizedList._createRenderMask(arg0, _initialRenderRegionResult) };
      props2 = tmp2Result.props;
      _getItemKeyResult = null;
      if (props2.getItemCount(tmp2Result.props.data) > num2) {
        tmp26 = VirtualizedList;
        _getItemKeyResult = VirtualizedList._getItemKey(tmp2Result.props, num2);
      }
      obj1.firstVisibleItemKey = _getItemKeyResult;
      num3 = 0;
      if (null != tmp2Result.props.initialScrollIndex) {
        num3 = 0;
        if (tmp2Result.props.initialScrollIndex > 0) {
          num3 = 1;
        }
      }
      obj1.pendingScrollUpdateCount = num3;
      tmp2Result.state = obj1;
      return tmp2Result;
    }
  }
  const arg1 = VirtualizedList;
  callback2(VirtualizedList, arg0);
  let obj = {
    key: "scrollToEnd",
    value: function scrollToEnd(animated) {
      const self = this;
      const props = self.props;
      const diff = props.getItemCount(self.props.data) - 1;
      if (diff >= 0) {
        const _listMetrics = self._listMetrics;
        const cellMetricsApprox = _listMetrics.getCellMetricsApprox(diff, self.props);
        const _Math = Math;
        const obj = { animated: tmp, offset: Math.max(0, cellMetricsApprox.offset + cellMetricsApprox.length + self._footerLength - self._scrollMetrics.visibleLength) };
        self.scrollToOffset(obj);
      }
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "scrollToIndex",
    value: function scrollToIndex(animated) {
      let data;
      let getItemCount;
      let index;
      let onScrollToIndexFailed;
      let viewOffset;
      let viewPosition;
      const self = this;
      const props = this.props;
      ({ data, getItemCount, onScrollToIndexFailed } = props);
      ({ index, viewOffset, viewPosition } = animated);
      callback(closure_3[13])(index >= 0, "scrollToIndex out of range: requested index " + index + " but minimum is 0");
      const tmp = callback(closure_3[13]);
      const tmp2 = index >= 0;
      const tmp4 = callback(closure_3[13]);
      tmp4(getItemCount(data) >= 1, "scrollToIndex out of range: item length " + getItemCount(data) + " but minimum is 1");
      const tmp5 = getItemCount(data) >= 1;
      const tmp7 = callback(closure_3[13]);
      tmp7(index < getItemCount(data), "scrollToIndex out of range: requested index " + index + " is out of 0 to " + getItemCount(data) - 1);
      if (!props.getItemLayout) {
        const _listMetrics = self._listMetrics;
        if (index > _listMetrics.getHighestMeasuredCellIndex()) {
          callback(closure_3[13])(onScrollToIndexFailed, "scrollToIndex should be used in conjunction with getItemLayout or onScrollToIndexFailed, otherwise there is no way to know the location of offscreen indices or handle failures.");
          let obj = {};
          const _listMetrics2 = self._listMetrics;
          obj.averageItemLength = _listMetrics2.getAverageCellLength();
          const _listMetrics3 = self._listMetrics;
          obj.highestMeasuredFrameIndex = _listMetrics3.getHighestMeasuredCellIndex();
          obj.index = index;
          const result = onScrollToIndexFailed(obj);
        }
      }
      const _listMetrics4 = self._listMetrics;
      const _listMetrics5 = self._listMetrics;
      const cellMetricsApprox = _listMetrics4.getCellMetricsApprox(Math.floor(index), self.props);
      const cellOffsetApprox = _listMetrics5.getCellOffsetApprox(index, self.props);
      if (!viewPosition) {
        viewPosition = 0;
      }
      const bound = Math.max(0, cellOffsetApprox - viewPosition * (self._scrollMetrics.visibleLength - cellMetricsApprox.length));
      if (!viewOffset) {
        viewOffset = 0;
      }
      obj = { offset: bound - viewOffset, animated: animated.animated };
      self.scrollToOffset(obj);
    }
  };
  items[1] = obj;
  obj = {
    key: "scrollToItem",
    value: function scrollToItem(arg0) {
      const self = this;
      const props = this.props;
      const data = props.data;
      const itemCount = props.getItemCount(data);
      let num = 0;
      if (0 < itemCount) {
        while (tmp2(data, num) !== tmp) {
          num = num + 1;
        }
        const _Object = Object;
        const obj = { index: num };
        self.scrollToIndex(Object.assign({}, arg0, obj));
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "scrollToOffset",
    value: function scrollToOffset(arg0) {
      const self = this;
      const _scrollRef = this._scrollRef;
      if (null != _scrollRef) {
        if (null != _scrollRef.scrollTo) {
          const _orientationResult = self._orientation();
          if (_orientationResult.horizontal) {
            if (_orientationResult.rtl) {
              const _listMetrics = self._listMetrics;
              if (!_listMetrics.hasContentLength()) {
                const _console2 = console;
                console.warn("scrollToOffset may not be called in RTL before content is laid out");
              }
            }
          }
          const _Object = Object;
          const obj = { animated: tmp };
          _scrollRef.scrollTo(Object.assign(obj, self._scrollToParamsFromOffset(tmp2)));
        } else {
          const _console = console;
          console.warn("No scrollTo method provided. This may be because you have two nested VirtualizedLists with the same orientation, or because you are using a custom component that does not implement scrollTo.");
        }
      }
    }
  };
  items[4] = {
    key: "_scrollToParamsFromOffset",
    value: function _scrollToParamsFromOffset(arg0) {
      const self = this;
      const _orientationResult = this._orientation();
      const horizontal = _orientationResult.horizontal;
      if (horizontal) {
        if (_orientationResult.rtl) {
          const _listMetrics = self._listMetrics;
          const cartesianOffsetResult = _listMetrics.cartesianOffset(arg0 + self._scrollMetrics.visibleLength);
          let obj = {};
          if (horizontal) {
            obj.x = cartesianOffsetResult;
            let tmp4 = obj;
          } else {
            obj.y = cartesianOffsetResult;
            tmp4 = obj;
          }
          return tmp4;
        }
      }
      obj = {};
      if (horizontal) {
        obj.x = arg0;
        let tmp2 = obj;
      } else {
        obj.y = arg0;
        tmp2 = obj;
      }
      return tmp2;
    }
  };
  items[5] = {
    key: "recordInteraction",
    value: function recordInteraction() {
      const _nestedChildLists = this._nestedChildLists;
      const item = _nestedChildLists.forEach((recordInteraction) => {
        recordInteraction.recordInteraction();
      });
      const _viewabilityTuples = this._viewabilityTuples;
      const item1 = _viewabilityTuples.forEach((viewabilityHelper) => {
        viewabilityHelper = viewabilityHelper.viewabilityHelper;
        viewabilityHelper.recordInteraction();
      });
      this._updateViewableItems(this.props, this.state.cellsAroundViewport);
    }
  };
  items[6] = {
    key: "flashScrollIndicators",
    value: function flashScrollIndicators() {
      if (null != this._scrollRef) {
        const _scrollRef = this._scrollRef;
        const result = _scrollRef.flashScrollIndicators();
      }
    }
  };
  items[7] = {
    key: "getScrollResponder",
    value: function getScrollResponder() {
      const self = this;
      if (this._scrollRef) {
        if (self._scrollRef.getScrollResponder) {
          const _scrollRef = self._scrollRef;
          return _scrollRef.getScrollResponder();
        }
      }
    }
  };
  items[8] = {
    key: "getScrollableNode",
    value: function getScrollableNode() {
      const self = this;
      if (this._scrollRef) {
        if (self._scrollRef.getScrollableNode) {
          const _scrollRef = self._scrollRef;
          let scrollableNode = _scrollRef.getScrollableNode();
        }
        return scrollableNode;
      }
      scrollableNode = callback7(self._scrollRef);
    }
  };
  items[9] = {
    key: "getScrollRef",
    value: function getScrollRef() {
      const self = this;
      if (this._scrollRef) {
        if (self._scrollRef.getScrollRef) {
          const _scrollRef2 = self._scrollRef;
          let _scrollRef = _scrollRef2.getScrollRef();
        }
        return _scrollRef;
      }
      _scrollRef = self._scrollRef;
    }
  };
  items[10] = {
    key: "setNativeProps",
    value: function setNativeProps(arg0) {
      if (this._scrollRef) {
        const _scrollRef = this._scrollRef;
        _scrollRef.setNativeProps(arg0);
      }
    }
  };
  items[11] = {
    key: "_getCellKey",
    value: function _getCellKey() {
      const context = this.context;
      let str;
      if (null != context) {
        str = context.cellKey;
      }
      if (!str) {
        str = "rootList";
      }
      return str;
    }
  };
  items[12] = {
    key: "hasMore",
    value: function hasMore() {
      return this._hasMore;
    }
  };
  items[13] = {
    key: "_checkProps",
    value: function _checkProps(arg0) {
      let data;
      let getItemCount;
      let initialScrollIndex;
      let onScroll;
      let windowSize;
      const self = this;
      ({ onScroll, getItemCount, initialScrollIndex } = arg0);
      ({ windowSize, data } = arg0);
      let tmp2 = !onScroll;
      if (!tmp2) {
        tmp2 = !onScroll.__isNative;
      }
      callback(closure_3[13])(tmp2, "Components based on VirtualizedList must be wrapped with Animated.createAnimatedComponent to support native onScroll events with useNativeDriver");
      const tmp = callback(closure_3[13]);
      const tmp4 = callback(closure_3[13]);
      tmp4(VirtualizedList(closure_3[18]).windowSizeOrDefault(windowSize) > 0, "VirtualizedList: The windowSize prop must be present and set to a value greater than 0.");
      callback(closure_3[13])(getItemCount, "VirtualizedList: The \"getItemCount\" prop must be provided");
      const itemCount = getItemCount(data);
      let initialScrollIndex2 = null == initialScrollIndex || self._hasTriggeredInitialScrollToIndex;
      if (!initialScrollIndex2) {
        let tmp8 = initialScrollIndex < 0;
        if (!tmp8) {
          tmp8 = itemCount > 0 && initialScrollIndex >= itemCount;
          const tmp9 = itemCount > 0 && initialScrollIndex >= itemCount;
        }
        initialScrollIndex2 = !tmp8;
      }
      if (!initialScrollIndex2) {
        initialScrollIndex2 = self._hasWarned.initialScrollIndex;
      }
      if (!initialScrollIndex2) {
        const _console = console;
        const _HermesInternal = HermesInternal;
        console.warn("initialScrollIndex \"" + initialScrollIndex + "\" is not valid (list has " + itemCount + " items)");
        self._hasWarned.initialScrollIndex = true;
      }
    }
  };
  items[14] = {
    key: "_adjustCellsAroundViewport",
    value: function _adjustCellsAroundViewport(onEndReachedThreshold, cellsAroundViewport, pendingScrollUpdateCount) {
      let data;
      let getItemCount;
      const self = this;
      ({ data, getItemCount } = onEndReachedThreshold);
      let obj = VirtualizedList(closure_3[18]);
      const visibleLength = this._scrollMetrics.visibleLength;
      const _listMetrics = this._listMetrics;
      const result = obj.onEndReachedThresholdOrDefault(onEndReachedThreshold.onEndReachedThreshold);
      const contentLength = _listMetrics.getContentLength();
      if (visibleLength > 0) {
        if (contentLength > 0) {
          if (onEndReachedThreshold.disableVirtualization) {
            let num = 0;
            if (tmp3 < result * visibleLength) {
              num = VirtualizedList(closure_3[18]).maxToRenderPerBatchOrDefault(onEndReachedThreshold.maxToRenderPerBatch);
              const obj2 = VirtualizedList(closure_3[18]);
            }
            obj = { first: 0 };
            const _Math = Math;
            const sum = cellsAroundViewport.last + num;
            obj.last = Math.min(sum, getItemCount(data) - 1);
            let windowedRenderLimits = obj;
          } else if (pendingScrollUpdateCount > 0) {
            let result1 = cellsAroundViewport;
            if (cellsAroundViewport.last >= getItemCount(data)) {
              result1 = VirtualizedList._constrainToItemCount(cellsAroundViewport, onEndReachedThreshold);
            }
            return result1;
          } else {
            const obj4 = VirtualizedList(closure_3[19]);
            const result2 = VirtualizedList(closure_3[18]).maxToRenderPerBatchOrDefault(onEndReachedThreshold.maxToRenderPerBatch);
            const obj5 = VirtualizedList(closure_3[18]);
            windowedRenderLimits = obj4.computeWindowedRenderLimits(onEndReachedThreshold, result2, VirtualizedList(closure_3[18]).windowSizeOrDefault(onEndReachedThreshold.windowSize), cellsAroundViewport, self._listMetrics, self._scrollMetrics);
            const obj6 = VirtualizedList(closure_3[18]);
            callback(closure_3[13])(windowedRenderLimits.last < getItemCount(data), "computeWindowedRenderLimits() should return range in-bounds");
            const tmp22 = callback(closure_3[13]);
          }
          const _nestedChildLists = self._nestedChildLists;
          if (_nestedChildLists.size() > 0) {
            let last = self._findFirstChildWithMore(windowedRenderLimits.first, windowedRenderLimits.last);
            if (null == last) {
              last = windowedRenderLimits.last;
            }
            windowedRenderLimits.last = last;
          }
          return windowedRenderLimits;
        }
      }
      let result3 = cellsAroundViewport;
      if (cellsAroundViewport.last >= getItemCount(data)) {
        result3 = VirtualizedList._constrainToItemCount(cellsAroundViewport, onEndReachedThreshold);
      }
      return result3;
    }
  };
  items[15] = {
    key: "_findFirstChildWithMore",
    value: function _findFirstChildWithMore(first, last) {
      let sum = first;
      const self = this;
      if (first <= last) {
        while (true) {
          let _indicesToKeys = self._indicesToKeys;
          let value = _indicesToKeys.get(sum);
          let tmp3 = sum;
          if (null != value) {
            let _nestedChildLists = self._nestedChildLists;
            if (_nestedChildLists.anyInCell(value, (hasMore) => hasMore.hasMore())) {
              break;
            }
          }
          sum = sum + 1;
        }
        return sum;
      }
      return null;
    }
  };
  items[16] = {
    key: "componentDidMount",
    value: function componentDidMount() {
      const self = this;
      if (this._isNestedWithSameOrientation()) {
        const context = self.context;
        const obj = { ref: self, cellKey: self.context.cellKey };
        const result = context.registerAsNestedChild(obj);
      }
    }
  };
  items[17] = {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      const self = this;
      if (this._isNestedWithSameOrientation()) {
        const context = self.context;
        const obj = { ref: self };
        const result = context.unregisterAsNestedChild(obj);
      }
      clearTimeout(self._updateCellsToRenderTimeoutID);
      const _viewabilityTuples = self._viewabilityTuples;
      const item = _viewabilityTuples.forEach((viewabilityHelper) => {
        viewabilityHelper = viewabilityHelper.viewabilityHelper;
        viewabilityHelper.dispose();
      });
      const _fillRateHelper = self._fillRateHelper;
      _fillRateHelper.deactivateAndFlush();
    }
  };
  items[18] = {
    key: "_pushCells",
    value: function _pushCells(items, items1, arg2, first, last, arg5) {
      let data;
      let sum = first;
      const VirtualizedList = items;
      const self = this;
      const props = this.props;
      ({ CellRendererComponent: closure_6, ItemSeparatorComponent: closure_7, ListItemComponent: closure_8, data } = props);
      ({ debug: closure_10, getItem: closure_11, getItemLayout: closure_12, horizontal: closure_13, renderItem: closure_14 } = props);
      let num = 0;
      if (props.ListHeaderComponent) {
        num = 1;
      }
      const diff = props.getItemCount(data) - 1;
      const bound = Math.min(diff, last);
      if (sum <= bound) {
        do {
          let tmp4 = function _loop(self) {
            const tmp = callback(data, sum);
            const _keyExtractorResult = self._keyExtractor(tmp, sum, self.props);
            self = _keyExtractorResult;
            const _indicesToKeys = self._indicesToKeys;
            const result = _indicesToKeys.set(sum, _keyExtractorResult);
            if (arg2.has(sum + num)) {
              arg1.push(self.length);
            }
            let enabledResult = null == closure_12 || closure_10;
            if (!enabledResult) {
              const _fillRateHelper = self._fillRateHelper;
              enabledResult = _fillRateHelper.enabled();
            }
            let obj = { CellRendererComponent: closure_6 };
            let tmp12;
            if (sum < diff) {
              tmp12 = closure_7;
            }
            obj.ItemSeparatorComponent = tmp12;
            obj.ListItemComponent = closure_8;
            obj.cellKey = _keyExtractorResult;
            obj.horizontal = closure_13;
            obj.index = sum;
            obj.inversionStyle = arg5;
            obj.item = tmp;
            obj.prevCellKey = _keyExtractorResult;
            ({ _onUpdateSeparators: obj.onUpdateSeparators, _onCellFocusCapture: obj.onCellFocusCapture, _onCellUnmount: obj.onUnmount } = self);
            obj.ref = function ref(arg0) {
              _cellRefs._cellRefs[_keyExtractorResult] = arg0;
            };
            obj.renderItem = closure_14;
            if (enabledResult) {
              obj = { onCellLayout: self._onCellLayout };
              enabledResult = obj;
            }
            self.push(closure_22(arg1(arg5[20]), Object.assign(obj, enabledResult), _keyExtractorResult));
          }();
          sum = sum + 1;
          closure_17 = sum;
        } while (sum <= bound);
      }
    }
  };
  items[19] = {
    key: "_isNestedWithSameOrientation",
    value: function _isNestedWithSameOrientation() {
      const context = this.context;
      let tmp2 = !context;
      if (!tmp2) {
        tmp2 = !!context.horizontal !== VirtualizedList(closure_3[18]).horizontalOrDefault(tmp.props.horizontal);
        const obj = VirtualizedList(closure_3[18]);
        const tmp3 = !context.horizontal;
      }
      return !tmp2;
    }
  };
  items[20] = {
    key: "_renderEmptyComponent",
    value: function _renderEmptyComponent(type, arg1) {
      const VirtualizedList = type;
      const self = this;
      let tmp = type;
      if (type.type !== React.Fragment) {
        const obj = {
          onLayout(arg0) {
              self._onLayoutEmpty(arg0);
              if (arg0.props.onLayout) {
                const props = arg0.props;
                props.onLayout(arg0);
              }
            },
          style: closure_19.compose(arg1, type.props.style)
        };
        tmp = callback5(type, obj);
      }
      return tmp;
    }
  };
  items[21] = {
    key: "render",
    value: function render() {
      let ListEmptyComponent;
      let ListFooterComponent;
      let ListHeaderComponent;
      const self = this;
      this._checkProps(this.props);
      ({ ListEmptyComponent, ListFooterComponent, ListHeaderComponent } = this.props);
      if (!this.props.inverted) {
        const items = [];
        const _Set = Set;
        const set = new Set(self.props.stickyHeaderIndices);
        let obj1 = set;
        const items1 = [];
        if (ListHeaderComponent) {
          if (obj1.has(0)) {
            items1.push(0);
          }
          let tmp17 = ListHeaderComponent;
          if (!callback6(ListHeaderComponent)) {
            tmp17 = callback8(ListHeaderComponent, {});
          }
          let obj = { cellKey: `${self._getCellKey()}-header` };
          obj = { collapsable: false, onLayout: self._onLayoutHeader, style: closure_19.compose(tmp8, self.props.ListHeaderComponentStyle), children: tmp17 };
          obj.children = callback8(closure_20, obj);
          items.push(callback8(VirtualizedList(closure_3[21]).VirtualizedListCellContextProvider, obj, "$header"));
        }
        const props = self.props;
        const itemCount = props.getItemCount(tmp2);
        if (0 === itemCount) {
          if (ListEmptyComponent) {
            let tmp29 = ListEmptyComponent;
            if (!callback6(ListEmptyComponent)) {
              tmp29 = callback8(ListEmptyComponent, {});
            }
            obj1 = { cellKey: `${self._getCellKey()}-empty`, children: self._renderEmptyComponent(tmp29, tmp8) };
            items.push(callback8(VirtualizedList(closure_3[21]).VirtualizedListCellContextProvider, obj1, "$empty"));
          }
        }
        if (itemCount > 0) {
          let closure_24 = false;
          let closure_25 = "";
          const _getSpacerKeyResult = self._getSpacerKey(!tmp3);
          const renderMask = self.state.renderMask;
          const enumerateRegionsResult = renderMask.enumerateRegions();
          let tmp37 = null;
          if (null != enumerateRegionsResult[enumerateRegionsResult.length - 1]) {
            tmp37 = null;
            if (tmp93.isSpacer) {
              tmp37 = tmp93;
            }
          }
          const iter = enumerateRegionsResult[Symbol.iterator]();
          const nextResult = iter.next();
          while (iter !== undefined) {
            let tmp94 = nextResult;
            if (nextResult.isSpacer) {
              if (self.props.disableVirtualization) {
                // continue
              } else {
                let tmp49 = nextResult;
                let tmp50 = tmp37;
                if (tmp94 === tmp38) {
                  if (!self.props.getItemLayout) {
                    let tmp51 = callback;
                    let tmp52 = closure_3;
                    let tmp54 = nextResult;
                    let _listMetrics = self._listMetrics;
                    let tmp53 = callback(closure_3[22]);
                    let diff = tmp94.first - 1;
                    let last = tmp53(diff, tmp94.last, _listMetrics.getHighestMeasuredCellIndex());
                  }
                  let _listMetrics2 = self._listMetrics;
                  let tmp57 = nextResult;
                  let _listMetrics3 = self._listMetrics;
                  let cellMetricsApprox = _listMetrics2.getCellMetricsApprox(tmp94.first, self.props);
                  let cellMetricsApprox1 = _listMetrics3.getCellMetricsApprox(last, self.props);
                  let tmp59 = items;
                  let tmp60 = callback8;
                  let tmp61 = closure_20;
                  let obj2 = {};
                  let tmp62 = callback2;
                  let tmp63 = _getSpacerKeyResult;
                  obj2.style = callback2({}, _getSpacerKeyResult, cellMetricsApprox1.offset + cellMetricsApprox1.length - cellMetricsApprox.offset);
                  let _HermesInternal = HermesInternal;
                  let arr2 = items.push(callback8(closure_20, obj2, "$spacer-" + tmp94.first));
                }
                let tmp56 = nextResult;
                last = tmp94.last;
              }
            } else {
              let tmp42 = items;
              let tmp43 = items1;
              let tmp44 = set;
              let tmp45 = nextResult;
              let tmp46 = null;
              let tmp47 = self;
              let _pushCellsResult = self._pushCells(items, items1, obj1, tmp94.first, tmp94.last, tmp8);
              // continue
            }
            continue;
          }
          if (tmp65) {
            const _console = console;
            console.warn("VirtualizedList: missing keys for items, make sure to specify a key or id property on each item or provide a custom keyExtractor.", closure_25);
            self._hasWarned.keys = true;
          }
          const tmp38 = tmp37;
          const tmp65 = !self._hasWarned.keys && closure_24;
        }
        if (ListFooterComponent) {
          let tmp69 = ListFooterComponent;
          if (!callback6(ListFooterComponent)) {
            tmp69 = callback8(ListFooterComponent, {});
          }
          const obj3 = { cellKey: self._getFooterCellKey() };
          const obj4 = { onLayout: self._onLayoutFooter, style: closure_19.compose(tmp8, self.props.ListFooterComponentStyle), children: tmp69 };
          obj3.children = callback8(closure_20, obj4);
          items.push(callback8(VirtualizedList(closure_3[21]).VirtualizedListCellContextProvider, obj3, "$footer"));
        }
        const obj5 = {};
        ({ _onContentSizeChange: obj9.onContentSizeChange, _onLayout: obj9.onLayout, _onScroll: obj9.onScroll, _onScrollBeginDrag: obj9.onScrollBeginDrag, _onScrollEndDrag: obj9.onScrollEndDrag, _onMomentumScrollBegin: obj9.onMomentumScrollBegin, _onMomentumScrollEnd: obj9.onMomentumScrollEnd } = self);
        const scrollEventThrottle = self.props.scrollEventThrottle;
        let num8 = 0.0001;
        if (null != scrollEventThrottle) {
          num8 = scrollEventThrottle;
        }
        obj5.scrollEventThrottle = num8;
        if (undefined !== self.props.invertStickyHeaders) {
          let inverted = self.props.invertStickyHeaders;
        } else {
          inverted = self.props.inverted;
        }
        obj5.invertStickyHeaders = inverted;
        obj5.stickyHeaderIndices = items1;
        if (null) {
          const items2 = [tmp8, self.props.style];
          let style = items2;
        } else {
          style = self.props.style;
        }
        obj5.style = style;
        obj5.isInvertedVirtualizedList = self.props.inverted;
        let merged;
        if (null != self.props.maintainVisibleContentPosition) {
          const obj6 = {};
          let num9 = 0;
          if (self.props.ListHeaderComponent) {
            num9 = 1;
          }
          obj6.minIndexForVisible = self.props.maintainVisibleContentPosition.minIndexForVisible + num9;
          merged = Object.assign({}, self.props.maintainVisibleContentPosition, obj6);
        }
        obj5.maintainVisibleContentPosition = merged;
        self._hasMore = self.state.cellsAroundViewport.last < itemCount - 1;
        const merged1 = Object.assign({}, self.props, obj5);
        const obj7 = {};
        const obj8 = { cellKey: null, getScrollMetrics: self._getScrollMetrics, horizontal: VirtualizedList(closure_3[18]).horizontalOrDefault(self.props.horizontal) };
        ({ _getOutermostParentListRef: obj12.getOutermostParentListRef, _registerAsNestedChild: obj12.registerAsNestedChild, _unregisterAsNestedChild: obj12.unregisterAsNestedChild } = self);
        obj7.value = obj8;
        let _defaultRenderScrollComponent = self.props.renderScrollComponent;
        if (!_defaultRenderScrollComponent) {
          _defaultRenderScrollComponent = self._defaultRenderScrollComponent;
        }
        const obj9 = { ref: self._captureScrollRef };
        obj7.children = closure_14(_defaultRenderScrollComponent(merged1), obj9, items);
        const tmp83Result = callback8(VirtualizedList(closure_3[21]).VirtualizedListContextProvider, obj7);
        let tmp88 = tmp83Result;
        if (self.props.debug) {
          const obj10 = { style: closure_26.debug };
          const items3 = [tmp83Result, self._renderDebugOverlay()];
          obj10.children = items3;
          tmp88 = callback9(closure_20, obj10);
        }
        return tmp88;
      } else {
        obj = VirtualizedList(closure_3[18]);
        obj.horizontalOrDefault(self.props.horizontal) ? closure_26.horizontallyInverted : closure_26.verticallyInverted;
      }
    }
  };
  items[22] = {
    key: "componentDidUpdate",
    value: function componentDidUpdate(data) {
      const self = this;
      const props = this.props;
      let tmp2 = props.data === data.data;
      if (tmp2) {
        tmp2 = tmp === data.extraData;
      }
      if (!tmp2) {
        const _viewabilityTuples = self._viewabilityTuples;
        const item = _viewabilityTuples.forEach((viewabilityHelper) => {
          viewabilityHelper = viewabilityHelper.viewabilityHelper;
          viewabilityHelper.resetViewableIndices();
        });
      }
      const result = self._scheduleCellsToRenderUpdate();
      if (self._hiPriInProgress) {
        self._hiPriInProgress = false;
      }
      if (null != props.getItemLayout) {
        const result1 = self._maybeCallOnEdgeReached();
      }
    }
  };
  items[23] = {
    key: "_computeBlankness",
    value: function _computeBlankness() {
      const _fillRateHelper = this._fillRateHelper;
      const blankness = _fillRateHelper.computeBlankness(this.props, this.state.cellsAroundViewport, this._scrollMetrics);
    }
  };
  items[24] = {
    key: "_triggerRemeasureForChildListsInCell",
    value: function _triggerRemeasureForChildListsInCell(tmp2Result) {
      const _nestedChildLists = this._nestedChildLists;
      _nestedChildLists.forEachInCell(tmp2Result, (measureLayoutRelativeToContainingList) => {
        const result = measureLayoutRelativeToContainingList.measureLayoutRelativeToContainingList();
      });
    }
  };
  items[25] = {
    key: "measureLayoutRelativeToContainingList",
    value: function measureLayoutRelativeToContainingList() {
      let _scrollRef;
      let context;
      const VirtualizedList = this;
      if (this._scrollRef) {
        ({ _scrollRef, context } = this);
        const outermostParentListRef = context.getOutermostParentListRef();
        _scrollRef.measureLayout(outermostParentListRef.getScrollRef(), (arg0, arg1, width, height) => {
          let _convertParentScrollMetrics;
          let context;
          let obj = { x: arg0, y: arg1 };
          self._offsetFromParentVirtualizedList = self._selectOffset(obj);
          const _listMetrics = self._listMetrics;
          obj = { layout: obj, orientation: self._orientation() };
          obj = { width, height };
          const result = _listMetrics.notifyListContentLayout(obj);
          ({ context, _convertParentScrollMetrics } = self);
          const result1 = _convertParentScrollMetrics(context.getScrollMetrics());
          let tmp3 = self._scrollMetrics.visibleLength !== result1.visibleLength;
          if (!tmp3) {
            tmp3 = self._scrollMetrics.offset !== result1.offset;
          }
          if (tmp3) {
            ({ visibleLength: closure_0._scrollMetrics.visibleLength, offset: closure_0._scrollMetrics.offset } = result1);
            const _nestedChildLists = self._nestedChildLists;
            const item = _nestedChildLists.forEach((measureLayoutRelativeToContainingList) => {
              const result = measureLayoutRelativeToContainingList.measureLayoutRelativeToContainingList();
            });
          }
        }, (arg0) => {
          console.warn("VirtualizedList: Encountered an error while measuring a list's offset from its containing VirtualizedList.");
        });
      }
    }
  };
  items[26] = {
    key: "_getFooterCellKey",
    value: function _getFooterCellKey() {
      return this._getCellKey() + "-footer";
    }
  };
  items[27] = {
    key: "_renderDebugOverlay",
    value: function _renderDebugOverlay() {
      const self = this;
      const _listMetrics = this._listMetrics;
      const result = this._scrollMetrics.visibleLength / (_listMetrics.getContentLength() || 1);
      const VirtualizedList = result;
      const items = [];
      const props = self.props;
      const itemCount = props.getItemCount(self.props.data);
      for (let num = 0; num < itemCount; num = num + 1) {
        let _listMetrics2 = self._listMetrics;
        let cellMetricsApprox = _listMetrics2.getCellMetricsApprox(num, self.props);
        let tmp5 = num;
        if (cellMetricsApprox.isMounted) {
          let arr = items.push(cellMetricsApprox);
        }
      }
      const _listMetrics3 = self._listMetrics;
      const offset = _listMetrics3.getCellMetricsApprox(self.state.cellsAroundViewport.first, self.props).offset;
      const _listMetrics4 = self._listMetrics;
      const cellMetricsApprox1 = _listMetrics4.getCellMetricsApprox(self.state.cellsAroundViewport.last, self.props);
      const obj = { style: items1 };
      const items1 = [closure_26.debugOverlayBase, closure_26.debugOverlay];
      const diff = cellMetricsApprox1.offset + cellMetricsApprox1.length - offset;
      const items2 = [
        items.map((offset) => {
          const style = [closure_26.debugOverlayBase, closure_26.debugOverlayFrame, { top: offset.offset * result, height: offset.length * result }];
          return callback(closure_20, { style }, "f" + arg1);
        }),
      ,

      ];
      const items3 = [closure_26.debugOverlayBase, closure_26.debugOverlayFrameLast, { top: offset * result, height: diff * result }];
      items2[1] = callback8(closure_20, { style: items3 });
      const items4 = [closure_26.debugOverlayBase, closure_26.debugOverlayFrameVis, { top: self._scrollMetrics.offset * result, height: self._scrollMetrics.visibleLength * result }];
      items2[2] = callback8(closure_20, { style: items4 });
      obj.children = items2;
      return callback9(closure_20, obj);
    }
  };
  items[28] = {
    key: "_selectLength",
    value: function _selectLength(width) {
      return VirtualizedList(closure_3[18]).horizontalOrDefault(this.props.horizontal) ? width.width : width.height;
    }
  };
  items[29] = {
    key: "_selectOffset",
    value: function _selectOffset(arg0) {
      let x;
      let y;
      ({ y, x } = arg0);
      if (this._orientation().horizontal) {
        y = x;
      }
      return y;
    }
  };
  items[30] = {
    key: "_orientation",
    value: function _orientation() {
      const obj = { horizontal: VirtualizedList(closure_3[18]).horizontalOrDefault(this.props.horizontal), rtl: isRTL.isRTL };
      return obj;
    }
  };
  items[31] = {
    key: "_maybeCallOnEdgeReached",
    value: function _maybeCallOnEdgeReached() {
      let data;
      let getItemCount;
      let offset;
      let onEndReached;
      let onEndReachedThreshold;
      let onStartReached;
      let onStartReachedThreshold;
      let visibleLength;
      const self = this;
      const props = this.props;
      ({ onStartReached, onStartReachedThreshold, onEndReached, onEndReachedThreshold } = props);
      const _listMetrics = this._listMetrics;
      ({ data, getItemCount } = props);
      if (_listMetrics.hasContentLength()) {
        if (0 !== self._scrollMetrics.visibleLength) {
          if (self.state.pendingScrollUpdateCount <= 0) {
            ({ visibleLength, offset } = self._scrollMetrics);
            const _listMetrics6 = self._listMetrics;
            let num2 = _listMetrics6.getContentLength() - visibleLength - offset;
            if (offset < 0.001) {
              offset = 0;
            }
            if (num2 < 0.001) {
              num2 = 0;
            }
            let num3 = 2;
            let num4 = 2;
            if (null != onStartReachedThreshold) {
              num4 = onStartReachedThreshold * visibleLength;
            }
            if (null != onEndReachedThreshold) {
              num3 = onEndReachedThreshold * visibleLength;
            }
            let tmp4 = onEndReached;
            if (onEndReached) {
              tmp4 = self.state.cellsAroundViewport.last === getItemCount(data) - 1;
            }
            if (tmp4) {
              tmp4 = tmp3;
            }
            if (tmp4) {
              const _listMetrics2 = self._listMetrics;
              tmp4 = _listMetrics2.getContentLength() !== self._sentEndForContentLength;
            }
            if (tmp4) {
              const _listMetrics3 = self._listMetrics;
              self._sentEndForContentLength = _listMetrics3.getContentLength();
              let obj = { distanceFromEnd: num2 };
              onEndReached(obj);
            }
            let tmp6 = null != onStartReached && 0 === self.state.cellsAroundViewport.first && tmp2;
            if (tmp6) {
              const _listMetrics4 = self._listMetrics;
              tmp6 = _listMetrics4.getContentLength() !== self._sentStartForContentLength;
            }
            if (tmp6) {
              const _listMetrics5 = self._listMetrics;
              self._sentStartForContentLength = _listMetrics5.getContentLength();
              obj = { distanceFromStart: offset };
              onStartReached(obj);
            }
            if (offset > num4) {
              self._sentStartForContentLength = 0;
            }
            if (num2 > num3) {
              self._sentEndForContentLength = 0;
            }
          }
        }
      }
    }
  };
  items[32] = {
    key: "_maybeScrollToInitialScrollIndex",
    value: function _maybeScrollToInitialScrollIndex(width, height) {
      const self = this;
      let tmp = width > 0;
      if (tmp) {
        tmp = height > 0;
      }
      if (tmp) {
        tmp = null != self.props.initialScrollIndex;
      }
      if (tmp) {
        tmp = self.props.initialScrollIndex > 0;
      }
      if (tmp) {
        tmp = !self._hasTriggeredInitialScrollToIndex;
      }
      if (tmp) {
        if (null != self.props.contentOffset) {
          self._hasTriggeredInitialScrollToIndex = true;
        } else {
          const props = self.props;
          if (self.props.initialScrollIndex >= props.getItemCount(self.props.data)) {
            let obj = { animated: false };
            self.scrollToEnd(obj);
          }
        }
        obj = { animated: false, index: callback(closure_3[23])(self.props.initialScrollIndex) };
        self.scrollToIndex(obj);
      }
    }
  };
  items[33] = {
    key: "unstable_onScroll",
    value: function unstable_onScroll(arg0) {
      this._onScroll(arg0);
    }
  };
  items[34] = {
    key: "_offsetFromScrollEvent",
    value: function _offsetFromScrollEvent(nativeEvent) {
      let contentOffset;
      let contentSize;
      let layoutMeasurement;
      const self = this;
      ({ contentOffset, contentSize, layoutMeasurement } = nativeEvent.nativeEvent);
      const _orientationResult = this._orientation();
      if (_orientationResult.horizontal) {
        if (_orientationResult.rtl) {
          const _selectLengthResult = self._selectLength(contentSize);
          let diff = _selectLengthResult - (self._selectOffset(contentOffset) + self._selectLength(layoutMeasurement));
          const _selectOffsetResult = self._selectOffset(contentOffset);
        }
        return diff;
      }
      diff = self._selectOffset(contentOffset);
    }
  };
  items[35] = {
    key: "_scheduleCellsToRenderUpdate",
    value: function _scheduleCellsToRenderUpdate() {
      const self = this;
      const VirtualizedList = this;
      const _listMetrics = this._listMetrics;
      if (_listMetrics.getAverageCellLength() > 0) {
        if (self._shouldRenderWithPriority()) {
          if (!self._hiPriInProgress) {
            self._hiPriInProgress = true;
            if (null != self._updateCellsToRenderTimeoutID) {
              const _clearTimeout = clearTimeout;
              clearTimeout(self._updateCellsToRenderTimeoutID);
              self._updateCellsToRenderTimeoutID = null;
            }
            self._updateCellsToRender();
          }
        }
      }
      if (null == self._updateCellsToRenderTimeoutID) {
        const updateCellsBatchingPeriod = self.props.updateCellsBatchingPeriod;
        let num = 50;
        if (null != updateCellsBatchingPeriod) {
          num = updateCellsBatchingPeriod;
        }
        self._updateCellsToRenderTimeoutID = setTimeout(() => {
          self._updateCellsToRenderTimeoutID = null;
          self._updateCellsToRender();
        }, num);
      }
    }
  };
  items[36] = {
    key: "_shouldRenderWithPriority",
    value: function _shouldRenderWithPriority() {
      let first;
      let last;
      let offset;
      let velocity;
      let visibleLength;
      const self = this;
      ({ first, last } = this.state.cellsAroundViewport);
      ({ offset, visibleLength, velocity } = this._scrollMetrics);
      const props = this.props;
      const itemCount = props.getItemCount(this.props.data);
      const result = VirtualizedList(closure_3[18]).onStartReachedThresholdOrDefault(this.props.onStartReachedThreshold);
      const obj = VirtualizedList(closure_3[18]);
      let flag = false;
      const result1 = VirtualizedList(closure_3[18]).onEndReachedThresholdOrDefault(this.props.onEndReachedThreshold);
      if (first > 0) {
        const _listMetrics = self._listMetrics;
        const diff = offset - _listMetrics.getCellMetricsApprox(first, self.props).offset;
        let tmp5 = diff < 0;
        if (!tmp5) {
          let tmp6 = velocity < -2;
          if (tmp6) {
            tmp6 = diff < callback11(result, visibleLength);
          }
          tmp5 = tmp6;
        }
        flag = tmp5;
      }
      let tmp8 = flag;
      if (!flag) {
        tmp8 = flag;
        if (last >= 0) {
          tmp8 = flag;
          if (last < itemCount - 1) {
            const _listMetrics2 = self._listMetrics;
            const diff1 = _listMetrics2.getCellMetricsApprox(last, self.props).offset - (offset + visibleLength);
            let tmp10 = diff1 < 0;
            if (!tmp10) {
              let tmp11 = velocity > 2;
              if (tmp11) {
                tmp11 = diff1 < callback11(result1, visibleLength);
              }
              tmp10 = tmp11;
            }
            tmp8 = tmp10;
          }
        }
      }
      return tmp8;
    }
  };
  items[37] = {
    key: "unstable_onScrollBeginDrag",
    value: function unstable_onScrollBeginDrag(nativeEvent) {
      this._onScrollBeginDrag(nativeEvent);
    }
  };
  items[38] = {
    key: "unstable_onScrollEndDrag",
    value: function unstable_onScrollEndDrag(arg0) {
      this._onScrollEndDrag(arg0);
    }
  };
  items[39] = {
    key: "unstable_onMomentumScrollBegin",
    value: function unstable_onMomentumScrollBegin(arg0) {
      const result = this._onMomentumScrollBegin(arg0);
    }
  };
  items[40] = {
    key: "unstable_onMomentumScrollEnd",
    value: function unstable_onMomentumScrollEnd(nativeEvent) {
      this._onMomentumScrollEnd(nativeEvent);
    }
  };
  items[41] = {
    key: "__getListMetrics",
    value: function __getListMetrics() {
      return this._listMetrics;
    }
  };
  items[42] = {
    key: "_updateViewableItems",
    value: function _updateViewableItems(props, cellsAroundViewport) {
      const VirtualizedList = props;
      const self = this;
      if (this.state.pendingScrollUpdateCount <= 0) {
        const _viewabilityTuples = this._viewabilityTuples;
        const item = _viewabilityTuples.forEach((viewabilityHelper) => {
          viewabilityHelper = viewabilityHelper.viewabilityHelper;
          viewabilityHelper.onUpdate(viewabilityHelper, self._scrollMetrics.offset, self._scrollMetrics.visibleLength, self._listMetrics, self._createViewToken, viewabilityHelper.onViewableItemsChanged, arg1);
        });
      }
    }
  };
  const items1 = [
    {
      key: "_findItemIndexWithKey",
      value: function _findItemIndexWithKey(getItemCount, firstVisibleItemKey, index) {
        const itemCount = getItemCount.getItemCount(getItemCount.data);
        if (null != index) {
          if (index >= 0) {
            if (index < itemCount) {
              if (VirtualizedList._getItemKey(getItemCount, index) === firstVisibleItemKey) {
                return index;
              }
            }
          }
        }
        let num2 = 0;
        if (0 < itemCount) {
          while (VirtualizedList._getItemKey(getItemCount, num2) !== firstVisibleItemKey) {
            num2 = num2 + 1;
          }
          return num2;
        }
        return null;
      }
    },
    {
      key: "_getItemKey",
      value: function _getItemKey(props, index) {
        return VirtualizedList._keyExtractor(props.getItem(props.data, index), index, props);
      }
    },
    {
      key: "_createRenderMask",
      value: function _createRenderMask(getItemCount, _initialRenderRegionResult, closure_0) {
        let items1 = closure_0;
        const itemCount = getItemCount.getItemCount(getItemCount.data);
        let tmp3 = _initialRenderRegionResult.first >= 0;
        if (tmp3) {
          tmp3 = _initialRenderRegionResult.last >= _initialRenderRegionResult.first - 1;
        }
        if (tmp3) {
          tmp3 = _initialRenderRegionResult.last < itemCount;
        }
        callback(closure_3[13])(tmp3, "Invalid cells around viewport \"[" + _initialRenderRegionResult.first + ", " + _initialRenderRegionResult.last + "]\" was passed to VirtualizedList._createRenderMask");
        const cellRenderMask = new VirtualizedList(closure_3[24]).CellRenderMask(itemCount);
        if (itemCount > 0) {
          const items = [_initialRenderRegionResult];
          if (null == items1) {
            items1 = [];
          }
          const combined = items.concat(closure_5(items1));
          for (const item10047 of combined) {
            let tmp8 = cellRenderMask;
            let addCellsResult = obj.addCells(item10047);
          }
          if (null == getItemCount.initialScrollIndex) {
            obj.addCells(VirtualizedList._initialRenderRegion(getItemCount));
          }
          const _Set = Set;
          const set = new Set(getItemCount.stickyHeaderIndices);
          const result = VirtualizedList._ensureClosestStickyHeader(getItemCount, set, obj, _initialRenderRegionResult.first);
          const tmp22 = closure_5;
        }
        return cellRenderMask;
      }
    },
    {
      key: "_initialRenderRegion",
      value: function _initialRenderRegion(getItemCount) {
        const itemCount = getItemCount.getItemCount(getItemCount.data);
        const initialScrollIndex = getItemCount.initialScrollIndex;
        let num = 0;
        const diff = itemCount - 1;
        if (null != initialScrollIndex) {
          num = initialScrollIndex;
        }
        const bound = Math.max(0, Math.min(diff, Math.floor(num)));
        const obj = { first: bound, last: Math.min(itemCount, bound + VirtualizedList(closure_3[18]).initialNumToRenderOrDefault(getItemCount.initialNumToRender)) - 1 };
        return obj;
      }
    },
    {
      key: "_ensureClosestStickyHeader",
      value: function _ensureClosestStickyHeader(ListHeaderComponent, set, addCells, first) {
        let num = 0;
        if (ListHeaderComponent.ListHeaderComponent) {
          num = 1;
        }
        let diff = first - 1;
        if (diff >= 0) {
          while (!set.has(diff + num)) {
            diff = diff - 1;
          }
          const obj = { first: diff, last: diff };
          addCells.addCells(obj);
        }
      }
    },
    {
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(getItemCount, renderMask) {
        const itemCount = getItemCount.getItemCount(getItemCount.data);
        renderMask = renderMask.renderMask;
        if (itemCount === renderMask.numCells()) {
          return renderMask;
        } else {
          const firstVisibleItemKey = renderMask.firstVisibleItemKey;
          const maintainVisibleContentPosition = getItemCount.maintainVisibleContentPosition;
          let minIndexForVisible;
          if (null != maintainVisibleContentPosition) {
            minIndexForVisible = maintainVisibleContentPosition.minIndexForVisible;
          }
          let num = 0;
          if (null != minIndexForVisible) {
            num = minIndexForVisible;
          }
          let _getItemKeyResult = null;
          if (getItemCount.getItemCount(getItemCount.data) > num) {
            _getItemKeyResult = VirtualizedList._getItemKey(getItemCount, num);
          }
          let tmp5 = null;
          if (null != getItemCount.maintainVisibleContentPosition) {
            tmp5 = null;
            if (null != firstVisibleItemKey) {
              tmp5 = null;
              if (null != _getItemKeyResult) {
                tmp5 = null;
                if (_getItemKeyResult !== firstVisibleItemKey) {
                  const renderMask2 = renderMask.renderMask;
                  const result = VirtualizedList._findItemIndexWithKey(getItemCount, firstVisibleItemKey, itemCount - renderMask2.numCells() + num);
                  let diff = null;
                  if (null != result) {
                    diff = result - num;
                  }
                  tmp5 = diff;
                }
              }
            }
          }
          const cellsAroundViewport = renderMask.cellsAroundViewport;
          if (null != tmp5) {
            let obj = { first: cellsAroundViewport.first + tmp5, last: renderMask.cellsAroundViewport.last + tmp5 };
            let tmp11 = obj;
          } else {
            tmp11 = cellsAroundViewport;
          }
          const result1 = VirtualizedList._constrainToItemCount(tmp11, getItemCount);
          obj = { cellsAroundViewport: result1, renderMask: VirtualizedList._createRenderMask(getItemCount, result1), firstVisibleItemKey: _getItemKeyResult };
          const pendingScrollUpdateCount = renderMask.pendingScrollUpdateCount;
          if (null != tmp5) {
            let sum = pendingScrollUpdateCount + 1;
          } else {
            sum = pendingScrollUpdateCount;
          }
          obj.pendingScrollUpdateCount = sum;
          return obj;
        }
      }
    },
    {
      key: "_constrainToItemCount",
      value: function _constrainToItemCount(first, getItemCount) {
        const diff = getItemCount.getItemCount(getItemCount.data) - 1;
        let obj = VirtualizedList(closure_3[18]);
        obj = {};
        const bound = Math.max(0, diff - obj.maxToRenderPerBatchOrDefault(getItemCount.maxToRenderPerBatch));
        obj.first = callback(closure_3[22])(0, first.first, bound);
        obj.last = Math.min(diff, first.last);
        return obj;
      }
    },
    {
      key: "_keyExtractor",
      value: function _keyExtractor(item, sum, props) {
        if (null != props.keyExtractor) {
          return props.keyExtractor(item, sum);
        } else {
          const keyExtractorResult = VirtualizedList(closure_3[19]).keyExtractor(item, sum);
          const _String = String;
          if (keyExtractorResult === String(sum)) {
            let closure_24 = true;
            if (tmp5) {
              const displayName = item.type.displayName;
            }
            const tmp5 = item.type && item.type.displayName;
          }
          return keyExtractorResult;
        }
      }
    }
  ];
  return callback(VirtualizedList, items, items1);
}(importDefault(dependencyMap[25]));
tmp5.contextType = arg1(dependencyMap[21]).VirtualizedListContext;
const items = [{ scale: -1 }];
const items1 = [{ scaleX: -1 }];
const styles = StyleSheet.create({ verticallyInverted: { transform: items }, horizontallyInverted: { transform: items1 }, debug: { flex: 1 }, debugOverlayBase: { onLongPressAvatar: true, onTapUsername: true, onLongPressUsername: true }, debugOverlay: {}, debugOverlayFrame: { includes: "interactionStart", gap: "interactionComplete" }, debugOverlayFrameLast: {}, debugOverlayFrameVis: {} });

export default tmp5;
