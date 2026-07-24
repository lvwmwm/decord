// Module ID: 5398
// Function ID: 46244
// Name: RVLayoutManager
// Dependencies: [5382, 5368, 5369, 5373, 5399, 5386, 5356, 5400]

// Module 5398 (RVLayoutManager)
import _toConsumableArray from "_toConsumableArray";
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

const require = arg1;

export const RVLayoutManager = (() => {
  class RVLayoutManager {
    constructor(arg0, arg1) {
      self = this;
      tmp = outer1_3(this, RVLayoutManager);
      this.requiresRepaint = false;
      this.maxItemsToProcess = 250;
      this.spanSizeInfo = {};
      this.spanTracker = [];
      this.currentMaxIndexWithChangedLayout = -1;
      this.lastSkippedLayoutIndex = Number.MAX_VALUE;
      multiTypeAverageWindow = new RVLayoutManager(outer1_1[3]).MultiTypeAverageWindow(5, 200);
      this.heightAverageWindow = multiTypeAverageWindow;
      multiTypeAverageWindow1 = new RVLayoutManager(outer1_1[3]).MultiTypeAverageWindow(5, 200);
      this.widthAverageWindow = multiTypeAverageWindow1;
      ({ getItemType: this.getItemType, overrideItemLayout: this.overrideItemLayout } = arg0);
      layouts = undefined;
      if (null != arg1) {
        layouts = arg1.layouts;
      }
      if (null == layouts) {
        layouts = [];
      }
      self.layouts = layouts;
      if (arg1) {
        updateLayoutParamsResult = self.updateLayoutParams(arg0);
      } else {
        _Boolean = Boolean;
        self.horizontal = Boolean(arg0.horizontal);
        ({ windowSize: self.windowSize, maxColumns } = arg0);
        num = 1;
        if (null != maxColumns) {
          num = maxColumns;
        }
        self.maxColumns = num;
      }
      return;
    }
  }
  let obj = {
    key: "getEstimatedWidth",
    value: function getEstimatedWidth(arg0) {
      const widthAverageWindow = this.widthAverageWindow;
      return widthAverageWindow.getCurrentValue(this.getItemType(arg0));
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , ];
  obj = {
    key: "getEstimatedHeight",
    value: function getEstimatedHeight(arg0) {
      const heightAverageWindow = this.heightAverageWindow;
      return heightAverageWindow.getCurrentValue(this.getItemType(arg0));
    }
  };
  items[1] = obj;
  obj = {
    key: "isHorizontal",
    value: function isHorizontal() {
      return this.horizontal;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getWindowsSize",
    value: function getWindowsSize() {
      return this.windowSize;
    }
  };
  items[4] = {
    key: "getVisibleLayouts",
    value: function getVisibleLayouts(bound1, bound1) {
      const result = RVLayoutManager(outer1_1[4]).findFirstVisibleIndex(this.layouts, bound1, this.horizontal);
      const obj = RVLayoutManager(outer1_1[4]);
      const findLastVisibleIndexResult = RVLayoutManager(outer1_1[4]).findLastVisibleIndex(this.layouts, bound1, this.horizontal);
      if (-1 !== result) {
        if (-1 !== findLastVisibleIndexResult) {
          const ConsecutiveNumbers = RVLayoutManager(outer1_1[5]).ConsecutiveNumbers;
          const prototype = ConsecutiveNumbers.prototype;
          let EMPTY = new ConsecutiveNumbers(result, findLastVisibleIndexResult);
        }
        return EMPTY;
      }
      EMPTY = RVLayoutManager(outer1_1[5]).ConsecutiveNumbers.EMPTY;
    }
  };
  items[5] = {
    key: "deleteLayout",
    value: function deleteLayout(arr) {
      const self = this;
      const sorted = arr.sort((arg0, arg1) => arg1 - arg0);
      while (tmp2 !== undefined) {
        let layouts = self.layouts;
        let spliceResult = layouts.splice(tmp3, 1);
        continue;
      }
      const applyResult = min.apply(Math, outer1_2(arr));
      const minRecomputeIndex = self.getMinRecomputeIndex(applyResult);
      self._recomputeLayouts(minRecomputeIndex, self.getMaxRecomputeIndex(applyResult));
    }
  };
  items[6] = {
    key: "modifyLayout",
    value: function modifyLayout(arr, arg1) {
      const self = this;
      let closure_0 = arg1;
      this.maxItemsToProcess = Math.max(this.maxItemsToProcess, 10 * arr.length);
      let found = arr;
      if (this.layouts.length > arg1) {
        self.layouts.length = arg1;
        self.spanTracker.length = arg1;
        MAX_VALUE = arg1 - 1;
        found = arr.filter((index) => index.index < closure_0);
      }
      const bound = Math.min(MAX_VALUE, self.computeEstimatesAndMinMaxChangedLayout(found));
      if (self.layouts.length < arg1) {
        if (arg1 > 0) {
          self.layouts.length = arg1;
          self.spanTracker.length = arg1;
          let sum = length;
          if (self.layouts.length < arg1) {
            do {
              let layout = self.getLayout(sum);
              let span = self.getSpan(sum);
              sum = sum + 1;
            } while (sum < arg1);
          }
          self.recomputeLayouts(self.layouts.length, arg1 - 1);
        }
      }
      const minIndexWithChangedSpan = self.computeMinIndexWithChangedSpan(found);
      const processLayoutInfoResult = self.processLayoutInfo(found, arg1);
      let tmp9 = bound;
      if (null != processLayoutInfoResult) {
        tmp9 = processLayoutInfoResult;
      }
      const bound1 = Math.min(bound, self.lastSkippedLayoutIndex, minIndexWithChangedSpan, tmp9, self.computeEstimatesAndMinMaxChangedLayout(found));
      if (bound1 >= 0) {
        if (bound1 < arg1) {
          self._recomputeLayouts(bound1, self.getMaxRecomputeIndex(bound1));
        }
      }
      self.currentMaxIndexWithChangedLayout = -1;
    }
  };
  items[7] = {
    key: "getLayout",
    value: function getLayout(arg0) {
      const self = this;
      if (arg0 >= this.layouts.length) {
        const _Error = Error;
        const error = new Error(RVLayoutManager(outer1_1[6]).ErrorMessages.indexOutOfBounds);
        throw error;
      } else {
        let tmp = self.layouts[arg0];
        if (!tmp) {
          const obj = { x: 0, y: 0, width: 0, height: 0 };
          self.layouts[arg0] = obj;
          tmp = obj;
        }
        if (!tmp2) {
          self.estimateLayout(arg0);
        }
        return tmp;
      }
    }
  };
  items[8] = {
    key: "updateLayoutParams",
    value: function updateLayoutParams(maxColumns) {
      let horizontal;
      const self = this;
      ({ windowSize: this.windowSize, horizontal } = maxColumns);
      if (null == horizontal) {
        horizontal = self.horizontal;
      }
      self.horizontal = horizontal;
      maxColumns = maxColumns.maxColumns;
      if (null == maxColumns) {
        maxColumns = self.maxColumns;
      }
      self.maxColumns = maxColumns;
      let optimizeItemArrangement = maxColumns.optimizeItemArrangement;
      if (null == optimizeItemArrangement) {
        optimizeItemArrangement = self.optimizeItemArrangement;
      }
      self.optimizeItemArrangement = optimizeItemArrangement;
    }
  };
  items[9] = {
    key: "getLayoutCount",
    value: function getLayoutCount() {
      return this.layouts.length;
    }
  };
  items[10] = {
    key: "isInLastRow",
    value: function isInLastRow(arg0) {
      return false;
    }
  };
  items[11] = {
    key: "getSpan",
    value: function getSpan(sum, arg1) {
      const self = this;
      let num = 1;
      self.spanSizeInfo.span = undefined;
      self.overrideItemLayout(sum, self.spanSizeInfo);
      const span = self.spanSizeInfo.span;
      if (null != span) {
        num = span;
      }
      const bound = Math.min(num, self.maxColumns);
      if (!tmp) {
        self.spanTracker[sum] = bound;
      }
      return bound;
    }
  };
  items[12] = {
    key: "handleSpanChange",
    value: function handleSpanChange(arg0) {

    }
  };
  items[13] = {
    key: "getMaxRecomputeIndex",
    value: function getMaxRecomputeIndex(applyResult) {
      return Math.min(Math.max(applyResult, this.currentMaxIndexWithChangedLayout) + this.maxItemsToProcess, this.layouts.length - 1);
    }
  };
  items[14] = {
    key: "getMinRecomputeIndex",
    value: function getMinRecomputeIndex(applyResult) {
      return applyResult;
    }
  };
  items[15] = {
    key: "_recomputeLayouts",
    value: function _recomputeLayouts(bound1, maxRecomputeIndex) {
      const self = this;
      this.recomputeLayouts(bound1, maxRecomputeIndex);
      if (tmp2) {
        const _Number = Number;
        self.lastSkippedLayoutIndex = Number.MAX_VALUE;
      }
      if (maxRecomputeIndex + 1 < self.layouts.length) {
        const _Math = Math;
        self.lastSkippedLayoutIndex = Math.min(maxRecomputeIndex + 1, self.lastSkippedLayoutIndex);
        const diff = self.layouts.length - 1;
        if (self.layouts[diff].y < self.layouts[maxRecomputeIndex].y) {
          self.recomputeLayouts(self.lastSkippedLayoutIndex, diff);
          const _Number2 = Number;
          self.lastSkippedLayoutIndex = Number.MAX_VALUE;
        }
      }
    }
  };
  items[16] = {
    key: "computeEstimatesAndMinMaxChangedLayout",
    value: function computeEstimatesAndMinMaxChangedLayout(found) {
      const self = this;
      const iter = found[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let index = nextResult.index;
        let tmp24 = index;
        let dimensions = nextResult.dimensions;
        let size = self.layouts[index];
        let tmp25 = index >= self.lastSkippedLayoutIndex;
        let tmp3 = tmp25;
        if (!tmp25) {
          let tmp2 = size;
          tmp3 = !size;
        }
        let tmp4 = tmp3;
        if (!tmp3) {
          let tmp5 = size;
          tmp4 = !size.isHeightMeasured;
        }
        let tmp6 = tmp4;
        if (!tmp4) {
          let tmp7 = size;
          tmp6 = !size.isWidthMeasured;
        }
        let result = tmp6;
        if (!tmp6) {
          let tmp9 = RVLayoutManager;
          let tmp10 = outer1_1;
          let obj = RVLayoutManager(outer1_1[7]);
          let tmp11 = size;
          let tmp12 = dimensions;
          result = obj.areDimensionsNotEqual(size.height, dimensions.height);
        }
        let result1 = result;
        if (!result) {
          let tmp14 = RVLayoutManager;
          let tmp15 = outer1_1;
          let obj2 = RVLayoutManager(outer1_1[7]);
          let tmp16 = size;
          let tmp17 = dimensions;
          result1 = obj2.areDimensionsNotEqual(size.width, dimensions.width);
        }
        if (result1) {
          let _Math = Math;
          let tmp18 = MAX_VALUE;
          let tmp19 = index;
          MAX_VALUE = Math.min(MAX_VALUE, tmp24);
          let _Math2 = Math;
          self.currentMaxIndexWithChangedLayout = Math.max(self.currentMaxIndexWithChangedLayout, tmp24);
        }
        let heightAverageWindow = self.heightAverageWindow;
        let tmp20 = dimensions;
        let tmp21 = index;
        let addValueResult = heightAverageWindow.addValue(dimensions.height, self.getItemType(tmp24));
        let widthAverageWindow = self.widthAverageWindow;
        let addValueResult1 = widthAverageWindow.addValue(dimensions.width, self.getItemType(tmp24));
        continue;
      }
      return MAX_VALUE;
    }
  };
  items[17] = {
    key: "computeMinIndexWithChangedSpan",
    value: function computeMinIndexWithChangedSpan(found) {
      const self = this;
      const iter = found[Symbol.iterator]();
      while (iter !== undefined) {
        let index = iter.next().index;
        let tmp = index;
        let span = self.getSpan(index, true);
        if (span !== self.spanTracker[index]) {
          let tmp4 = index;
          let tmp5 = span;
          self.spanTracker[tmp] = tmp3;
          let handleSpanChangeResult = self.handleSpanChange(tmp);
          let _Math = Math;
          let tmp7 = MAX_VALUE;
          MAX_VALUE = Math.min(MAX_VALUE, tmp);
        }
        continue;
      }
      return MAX_VALUE;
    }
  };
  return callback(RVLayoutManager, items);
})();
