// Module ID: 5380
// Function ID: 46065
// Name: RecyclerViewManager
// Dependencies: [5368, 5369, 5381, 5387, 5388, 5356, 5390, 5401, 5402, 5403]

// Module 5380 (RecyclerViewManager)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

const require = arg1;

export const RecyclerViewManager = (() => {
  class RecyclerViewManager {
    constructor(arg0) {
      self = this;
      tmp = outer1_3(this, self);
      this.initialDrawBatchSize = 2;
      this.isFirstLayoutComplete = false;
      this.hasRenderedProgressively = false;
      this.progressiveRenderCount = 0;
      this._isDisposed = false;
      this._isLayoutManagerDirty = false;
      this._animationOptimizationsEnabled = false;
      this.firstItemOffset = 0;
      this.ignoreScrollEvents = false;
      this.isFirstPaintOnUiComplete = false;
      this.isInitialScrollComplete = false;
      this.updateRenderStack = (arg0) => {
        let getDataKey;
        let getItemType;
        const renderStackManager = self.renderStackManager;
        ({ getDataKey, getItemType } = self);
        renderStackManager.sync(getDataKey, getItemType, arg0, self.getDataLength());
      };
      getDataKey = this.getDataKey;
      this.getDataKey = getDataKey.bind(this);
      getItemType = this.getItemType;
      this.getItemType = getItemType.bind(this);
      overrideItemLayout = this.overrideItemLayout;
      this.overrideItemLayout = overrideItemLayout.bind(this);
      this.propsRef = arg0;
      rVEngagedIndicesTrackerImpl = new RecyclerViewManager(outer1_2[2]).RVEngagedIndicesTrackerImpl();
      this.engagedIndicesTracker = rVEngagedIndicesTrackerImpl;
      renderStackManager = new RecyclerViewManager(outer1_2[3]).RenderStackManager(arg0.maxItemsInRecyclePool);
      this.renderStackManager = renderStackManager;
      tmp4 = outer1_1(outer1_2[4]);
      tmp4 = new tmp4(this);
      this.itemViewabilityManager = tmp4;
      this.isInitialScrollComplete = undefined === this.getInitialScrollIndex();
      checkPropsAndWarnResult = this.checkPropsAndWarn();
      return;
    }
  }
  let obj = {
    key: "animationOptimizationsEnabled",
    get() {
      return this._animationOptimizationsEnabled;
    },
    set(_animationOptimizationsEnabled) {
      this._animationOptimizationsEnabled = _animationOptimizationsEnabled;
      this.renderStackManager.disableRecycling = _animationOptimizationsEnabled;
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "isOffsetProjectionEnabled",
    get() {
      return this.engagedIndicesTracker.enableOffsetProjection;
    }
  };
  items[1] = obj;
  obj = {
    key: "isDisposed",
    get() {
      return this._isDisposed;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "numColumns",
    get() {
      const numColumns = this.propsRef.numColumns;
      let num = 1;
      if (null != numColumns) {
        num = numColumns;
      }
      return num;
    }
  };
  items[4] = {
    key: "props",
    get() {
      return this.propsRef;
    }
  };
  items[5] = {
    key: "setOffsetProjectionEnabled",
    value: function setOffsetProjectionEnabled(enableOffsetProjection) {
      this.engagedIndicesTracker.enableOffsetProjection = enableOffsetProjection;
    }
  };
  items[6] = {
    key: "updateProps",
    value: function updateProps(propsRef) {
      const self = this;
      this.propsRef = propsRef;
      let drawDistance = propsRef.drawDistance;
      if (null == drawDistance) {
        drawDistance = self.engagedIndicesTracker.drawDistance;
      }
      this.engagedIndicesTracker.drawDistance = drawDistance;
      const overrideProps = self.propsRef.overrideProps;
      let initialDrawBatchSize;
      if (null != overrideProps) {
        initialDrawBatchSize = overrideProps.initialDrawBatchSize;
      }
      if (null == initialDrawBatchSize) {
        initialDrawBatchSize = self.initialDrawBatchSize;
      }
      self.initialDrawBatchSize = initialDrawBatchSize;
    }
  };
  items[7] = {
    key: "updateScrollOffset",
    value: function updateScrollOffset(arg0, arg1) {
      const self = this;
      if (this.layoutManager) {
        if (!self._isDisposed) {
          const engagedIndicesTracker = self.engagedIndicesTracker;
          const updateScrollOffsetResult = engagedIndicesTracker.updateScrollOffset(arg0 - self.firstItemOffset, arg1, self.layoutManager);
          if (updateScrollOffsetResult) {
            self.updateRenderStack(updateScrollOffsetResult);
            return updateScrollOffsetResult;
          }
        }
      }
    }
  };
  items[8] = {
    key: "updateAverageRenderTime",
    value: function updateAverageRenderTime(averageRenderTime) {
      this.engagedIndicesTracker.averageRenderTime = averageRenderTime;
    }
  };
  items[9] = {
    key: "getIsFirstLayoutComplete",
    value: function getIsFirstLayoutComplete() {
      return this.isFirstLayoutComplete;
    }
  };
  items[10] = {
    key: "getLayout",
    value: function getLayout(arg0) {
      if (this.layoutManager) {
        const layoutManager = this.layoutManager;
        return layoutManager.getLayout(arg0);
      } else {
        const _Error = Error;
        const error = new Error(RecyclerViewManager(outer1_2[5]).ErrorMessages.layoutManagerNotInitializedLayoutInfo);
        throw error;
      }
    }
  };
  items[11] = {
    key: "tryGetLayout",
    value: function tryGetLayout(currentStickyIndex) {
      const self = this;
      if (this.layoutManager) {
        if (currentStickyIndex >= 0) {
          const layoutManager = self.layoutManager;
          if (currentStickyIndex < layoutManager.getLayoutCount()) {
            const layoutManager2 = self.layoutManager;
            return layoutManager2.getLayout(currentStickyIndex);
          }
        }
      }
    }
  };
  items[12] = {
    key: "isInLastRow",
    value: function isInLastRow(arg0) {
      const layoutManager = this.layoutManager;
      let isInLastRowResult;
      if (null != layoutManager) {
        isInLastRowResult = layoutManager.isInLastRow(arg0);
      }
      return null != isInLastRowResult && isInLastRowResult;
    }
  };
  items[13] = {
    key: "getChildContainerDimensions",
    value: function getChildContainerDimensions() {
      if (this.layoutManager) {
        const layoutManager = this.layoutManager;
        return layoutManager.getLayoutSize();
      } else {
        const _Error = Error;
        const error = new Error(RecyclerViewManager(outer1_2[5]).ErrorMessages.layoutManagerNotInitializedChildContainer);
        throw error;
      }
    }
  };
  items[14] = {
    key: "getRenderStack",
    value: function getRenderStack() {
      const renderStackManager = this.renderStackManager;
      return renderStackManager.getRenderStack();
    }
  };
  items[15] = {
    key: "getWindowSize",
    value: function getWindowSize() {
      if (this.layoutManager) {
        const layoutManager = this.layoutManager;
        return layoutManager.getWindowsSize();
      } else {
        const _Error = Error;
        const error = new Error(RecyclerViewManager(outer1_2[5]).ErrorMessages.layoutManagerNotInitializedWindowSize);
        throw error;
      }
    }
  };
  items[16] = {
    key: "getLastScrollOffset",
    value: function getLastScrollOffset() {
      return this.engagedIndicesTracker.scrollOffset;
    }
  };
  items[17] = {
    key: "getMaxScrollOffset",
    value: function getMaxScrollOffset() {
      const self = this;
      const size = this.getChildContainerDimensions();
      const size2 = self.getWindowSize();
      return Math.max(0, (this.propsRef.horizontal ? size.width : size.height) - (self.propsRef.horizontal ? size2.width : size2.height) + self.firstItemOffset);
    }
  };
  items[18] = {
    key: "getAbsoluteLastScrollOffset",
    value: function getAbsoluteLastScrollOffset() {
      return this.engagedIndicesTracker.scrollOffset + this.firstItemOffset;
    }
  };
  items[19] = {
    key: "setScrollDirection",
    value: function setScrollDirection(arg0) {
      const engagedIndicesTracker = this.engagedIndicesTracker;
      engagedIndicesTracker.setScrollDirection(arg0);
    }
  };
  items[20] = {
    key: "resetVelocityCompute",
    value: function resetVelocityCompute() {
      const engagedIndicesTracker = this.engagedIndicesTracker;
      engagedIndicesTracker.resetVelocityHistory();
    }
  };
  items[21] = {
    key: "updateLayoutParams",
    value: function updateLayoutParams(windowSize, firstItemOffset) {
      const self = this;
      this.firstItemOffset = firstItemOffset;
      let layoutManagerClass = this.getLayoutManagerClass();
      if (this.layoutManager) {
        const layoutManager = self.layoutManager;
        let isHorizontalResult;
        if (null != layoutManager) {
          isHorizontalResult = layoutManager.isHorizontal();
        }
        const _Boolean = Boolean;
        if (BooleanResult !== Boolean(self.propsRef.horizontal)) {
          const _Error = Error;
          const error = new Error(RecyclerViewManager(outer1_2[5]).ErrorMessages.horizontalPropCannotBeToggled);
          throw error;
        }
        BooleanResult = Boolean(isHorizontalResult);
      }
      if (self._isLayoutManagerDirty) {
        self.layoutManager = undefined;
        self._isLayoutManagerDirty = false;
      }
      const obj = { windowSize, maxColumns: self.numColumns, horizontal: Boolean(self.propsRef.horizontal), optimizeItemArrangement: tmp6, overrideItemLayout: self.overrideItemLayout, getItemType: self.getItemType };
      const optimizeItemArrangement = self.propsRef.optimizeItemArrangement;
      const layoutManager2 = self.layoutManager;
      if (self.layoutManager instanceof layoutManagerClass) {
        layoutManager2.updateLayoutParams(obj);
      } else {
        const prototype = layoutManagerClass.prototype;
        layoutManagerClass = new layoutManagerClass(obj, layoutManager2);
        self.layoutManager = layoutManagerClass;
      }
    }
  };
  items[22] = {
    key: "hasLayout",
    value: function hasLayout() {
      return undefined !== this.layoutManager;
    }
  };
  items[23] = {
    key: "computeVisibleIndices",
    value: function computeVisibleIndices() {
      const self = this;
      if (this.layoutManager) {
        const engagedIndicesTracker = self.engagedIndicesTracker;
        return engagedIndicesTracker.computeVisibleIndices(self.layoutManager);
      } else {
        const _Error = Error;
        const error = new Error(RecyclerViewManager(outer1_2[5]).ErrorMessages.layoutManagerNotInitializedVisibleIndices);
        throw error;
      }
    }
  };
  items[24] = {
    key: "getEngagedIndices",
    value: function getEngagedIndices() {
      const engagedIndicesTracker = this.engagedIndicesTracker;
      return engagedIndicesTracker.getEngagedIndices();
    }
  };
  items[25] = {
    key: "modifyChildrenLayout",
    value: function modifyChildrenLayout(arr, arg1) {
      let flag = this;
      const layoutManager = this.layoutManager;
      if (null != layoutManager) {
        layoutManager.modifyLayout(arr, arg1);
      }
      if (0 === arg1) {
        return tmp3;
      } else {
        const layoutManager2 = flag.layoutManager;
        if (null == layoutManager2) {
          if (flag.hasRenderedProgressively) {
            let tmp6 = !tmp5;
            if (!!flag.isFirstPaintOnUiComplete) {
              tmp6 = undefined !== flag.recomputeEngagedIndices();
            }
            let flag2 = tmp6;
          } else {
            flag.renderProgressively();
            flag2 = !flag.hasRenderedProgressively;
          }
        }
        flag = false;
        flag.layoutManager.requiresRepaint = false;
        flag2 = true;
      }
    }
  };
  items[26] = {
    key: "computeItemViewability",
    value: function computeItemViewability() {
      let self = this;
      if (this.itemViewabilityManager.shouldListenToVisibleIndices) {
        const itemViewabilityManager = self.itemViewabilityManager;
        if (self.propsRef.masonry) {
          const engagedIndicesTracker = self.engagedIndicesTracker;
          const engagedIndices = engagedIndicesTracker.getEngagedIndices();
          self = engagedIndices.toArray;
          let selfResult = self();
        } else {
          const visibleIndices = self.computeVisibleIndices();
          selfResult = visibleIndices.toArray();
        }
        itemViewabilityManager.updateViewableItems(selfResult);
      }
    }
  };
  items[27] = {
    key: "recordInteraction",
    value: function recordInteraction() {
      const itemViewabilityManager = this.itemViewabilityManager;
      itemViewabilityManager.recordInteraction();
    }
  };
  items[28] = {
    key: "recomputeViewableItems",
    value: function recomputeViewableItems() {
      const itemViewabilityManager = this.itemViewabilityManager;
      const result = itemViewabilityManager.clearLastReportedViewableIndices();
      const itemViewability = this.computeItemViewability();
    }
  };
  items[29] = {
    key: "processDataUpdate",
    value: function processDataUpdate() {
      let engagedIndicesTracker;
      let updateRenderStack;
      const self = this;
      if (this.hasLayout()) {
        const data = self.propsRef.data;
        let length;
        if (null != data) {
          length = data.length;
        }
        let num = 0;
        if (null != length) {
          num = length;
        }
        self.modifyChildrenLayout([], num);
        if (tmp4) {
          ({ engagedIndicesTracker, updateRenderStack } = self);
          updateRenderStack(engagedIndicesTracker.getEngagedIndices());
        }
        tmp4 = self.hasRenderedProgressively && !self.recomputeEngagedIndices();
      }
    }
  };
  items[30] = {
    key: "recomputeEngagedIndices",
    value: function recomputeEngagedIndices() {
      return this.updateScrollOffset(this.getAbsoluteLastScrollOffset());
    }
  };
  items[31] = {
    key: "restoreIfNeeded",
    value: function restoreIfNeeded() {
      if (this._isDisposed) {
        tmp._isDisposed = false;
      }
    }
  };
  items[32] = {
    key: "dispose",
    value: function dispose() {
      this._isDisposed = true;
      const itemViewabilityManager = this.itemViewabilityManager;
      itemViewabilityManager.dispose();
    }
  };
  items[33] = {
    key: "markLayoutManagerDirty",
    value: function markLayoutManagerDirty() {
      this._isLayoutManagerDirty = true;
    }
  };
  items[34] = {
    key: "getInitialScrollIndex",
    value: function getInitialScrollIndex() {
      const self = this;
      let initialScrollIndex = this.propsRef.initialScrollIndex;
      if (null == initialScrollIndex) {
        const maintainVisibleContentPosition = self.propsRef.maintainVisibleContentPosition;
        let diff;
        if (null != maintainVisibleContentPosition) {
          if (maintainVisibleContentPosition.startRenderingFromBottom) {
            diff = self.getDataLength() - 1;
          }
        }
        initialScrollIndex = diff;
      }
      return initialScrollIndex;
    }
  };
  items[35] = {
    key: "shouldMaintainVisibleContentPosition",
    value: function shouldMaintainVisibleContentPosition() {
      const maintainVisibleContentPosition = this.propsRef.maintainVisibleContentPosition;
      return !(null != maintainVisibleContentPosition && maintainVisibleContentPosition.disabled);
    }
  };
  items[36] = {
    key: "getDataLength",
    value: function getDataLength() {
      const data = this.propsRef.data;
      let length;
      if (null != data) {
        length = data.length;
      }
      let num = 0;
      if (null != length) {
        num = length;
      }
      return num;
    }
  };
  items[37] = {
    key: "hasStableDataKeys",
    value: function hasStableDataKeys() {
      return Boolean(this.propsRef.keyExtractor);
    }
  };
  items[38] = {
    key: "getDataKey",
    value: function getDataKey(bound) {
      const propsRef = this.propsRef;
      const keyExtractor = propsRef.keyExtractor;
      let callResult;
      if (null != keyExtractor) {
        callResult = keyExtractor.call(propsRef, tmp.propsRef.data[bound], bound);
      }
      if (null == callResult) {
        callResult = bound.toString();
      }
      return callResult;
    }
  };
  items[39] = {
    key: "getLayoutManagerClass",
    value: function getLayoutManagerClass() {
      const self = this;
      if (this.propsRef.masonry) {
        if (self.propsRef.horizontal) {
          const _Error2 = Error;
          const error = new Error(RecyclerViewManager(outer1_2[5]).ErrorMessages.masonryAndHorizontalIncompatible);
          throw error;
        }
      }
      if (self.numColumns > 1) {
        if (self.propsRef.horizontal) {
          const _Error = Error;
          const error1 = new Error(RecyclerViewManager(outer1_2[5]).ErrorMessages.numColumnsAndHorizontalIncompatible);
          throw error1;
        }
      }
      if (self.propsRef.masonry) {
        let RVLinearLayoutManagerImpl = RecyclerViewManager(outer1_2[6]).RVMasonryLayoutManagerImpl;
      } else {
        if (self.numColumns > 1) {
          if (!self.propsRef.horizontal) {
            RVLinearLayoutManagerImpl = RecyclerViewManager(outer1_2[7]).RVGridLayoutManagerImpl;
          }
        }
        RVLinearLayoutManagerImpl = RecyclerViewManager(outer1_2[8]).RVLinearLayoutManagerImpl;
      }
      return RVLinearLayoutManagerImpl;
    }
  };
  items[40] = {
    key: "applyInitialScrollAdjustment",
    value: function applyInitialScrollAdjustment() {
      let self = this;
      if (this.layoutManager) {
        if (0 !== self.getDataLength()) {
          const initialScrollIndex = self.getInitialScrollIndex();
          if (undefined !== initialScrollIndex) {
            const layoutManager2 = self.layoutManager;
            layoutManager2.recomputeLayouts(0, initialScrollIndex);
            const layoutManager3 = self.layoutManager;
            const point2 = layoutManager3.getLayout(initialScrollIndex);
            self = self.engagedIndicesTracker;
            self.scrollOffset = self.propsRef.horizontal ? point2.x : point2.y;
            const tmp2 = self.propsRef.horizontal ? point2.x : point2.y;
          } else {
            const layoutManager = self.layoutManager;
            const point = layoutManager.getLayout(0);
            self.engagedIndicesTracker.scrollOffset = (self.propsRef.horizontal ? point.x : point.y) - self.firstItemOffset;
          }
        }
      }
    }
  };
  items[41] = {
    key: "renderProgressively",
    value: function renderProgressively() {
      const self = this;
      this.progressiveRenderCount = this.progressiveRenderCount + 1;
      const layoutManager = this.layoutManager;
      if (layoutManager) {
        const result = self.applyInitialScrollAdjustment();
        const visibleIndices = self.computeVisibleIndices();
        self.hasRenderedProgressively = visibleIndices.every((arg0) => {
          let isWidthMeasured = layoutManager.getLayout(arg0).isHeightMeasured;
          if (isWidthMeasured) {
            isWidthMeasured = layoutManager.getLayout(arg0).isWidthMeasured;
          }
          return isWidthMeasured;
        });
        if (self.hasRenderedProgressively) {
          self.isFirstLayoutComplete = true;
        }
        const _Math = Math;
        const numColumns = self.numColumns;
        const initialDrawBatchSize = self.initialDrawBatchSize;
        if (!self.hasRenderedProgressively) {
          const _Math2 = Math;
          self.updateRenderStack(visibleIndices.slice(0, Math.min(visibleIndices.length, self.getRenderStack().size + tmp3)));
        }
      }
    }
  };
  items[42] = {
    key: "getItemType",
    value: function getItemType(arg0) {
      const propsRef = this.propsRef;
      const getItemType = propsRef.getItemType;
      let callResult;
      if (null != getItemType) {
        callResult = getItemType.call(propsRef, tmp.propsRef.data[arg0], arg0);
      }
      let str = "default";
      if (null != callResult) {
        str = callResult;
      }
      return str.toString();
    }
  };
  items[43] = {
    key: "overrideItemLayout",
    value: function overrideItemLayout(sum, spanSizeInfo, sum, numColumns, extraData) {
      const self = this;
      const propsRef = this.propsRef;
      if (!tmp) {
        propsRef.overrideItemLayout(spanSizeInfo, self.propsRef.data[sum], sum, self.numColumns, self.propsRef.extraData);
      }
    }
  };
  items[44] = {
    key: "checkPropsAndWarn",
    value: function checkPropsAndWarn() {
      if (tmp) {
        const _console = console;
        console.warn(RecyclerViewManager(outer1_2[9]).WarningMessages.keyExtractorNotDefinedForMVCP);
      }
    }
  };
  return callback(RecyclerViewManager, items);
})();
