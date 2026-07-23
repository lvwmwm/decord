// Module ID: 5390
// Function ID: 46202
// Name: _isNativeReflectConstruct
// Dependencies: [5382, 5368, 5369, 5391, 5393, 5394, 5396, 5398]

// Module 5390 (_isNativeReflectConstruct)
import _toConsumableArray from "_toConsumableArray";
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _get from "_get";
import _inherits from "_inherits";

function _isNativeReflectConstruct() {
  let _toConsumableArray = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return _toConsumableArray;
  }
  const result = _isNativeReflectConstruct();
}

export const RVMasonryLayoutManagerImpl = ((RVLayoutManager) => {
  class RVMasonryLayoutManagerImpl {
    constructor(arg0, arg1) {
      self = this;
      tmp = outer1_1(this, RVMasonryLayoutManagerImpl);
      items = [, ];
      items[0] = RVLayoutManager;
      items[1] = arg1;
      obj = outer1_4(RVMasonryLayoutManagerImpl);
      tmp2 = outer1_3;
      if (outer1_7()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_4;
        constructResult = Reflect.construct(obj, items, outer1_4(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.currentColumn = 0;
      tmp2Result.fullRelayoutRequired = false;
      tmp2Result.boundedSize = RVLayoutManager.windowSize.width;
      tmp2Result.optimizeItemArrangement = RVLayoutManager.optimizeItemArrangement;
      columnHeights = tmp2Result.columnHeights;
      if (null == columnHeights) {
        tmp7 = globalThis;
        _Array = Array;
        ArrayResult = Array(tmp2Result.maxColumns);
        columnHeights = ArrayResult.fill(0);
      }
      tmp2Result.columnHeights = columnHeights;
      return tmp2Result;
    }
  }
  callback2(RVMasonryLayoutManagerImpl, RVLayoutManager);
  let obj = {
    key: "updateLayoutParams",
    value: function updateLayoutParams(windowSize) {
      let maxColumns;
      let optimizeItemArrangement;
      const self = this;
      ({ maxColumns, optimizeItemArrangement } = this);
      const items = [windowSize];
      !(function _superPropGet(RVMasonryLayoutManagerImpl, updateLayoutParams, arg2, arg3) {
        let _toConsumableArray = arg2;
        let prototype = RVMasonryLayoutManagerImpl;
        if (1) {
          prototype = RVMasonryLayoutManagerImpl.prototype;
        }
        const tmpResult = outer2_5(outer2_4(prototype), "updateLayoutParams", arg2);
        let _classCallCheck = tmpResult;
        let fn = tmpResult;
        if (2) {
          fn = tmpResult;
          if ("function" === typeof tmpResult) {
            fn = (arg0) => tmpResult.apply(_toConsumableArray, arg0);
          }
        }
        return fn;
      })(RVMasonryLayoutManagerImpl, "updateLayoutParams", this, 3)(items);
      if (!tmp2) {
        self.boundedSize = windowSize.windowSize.width;
        if (self.layouts.length > 0) {
          self.updateAllWidths();
          self.recomputeLayouts(0, self.layouts.length - 1);
          self.requiresRepaint = true;
        }
      }
    }
  };
  let items = [obj, , , , , , , , , , , ];
  obj = {
    key: "processLayoutInfo",
    value: function processLayoutInfo(arg0, arg1) {
      const self = this;
      const iter = arg0[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let index = nextResult.index;
        let tmp2 = self.layouts[index];
        tmp2.height = nextResult.dimensions.height;
        tmp2.isHeightMeasured = true;
        tmp2.isWidthMeasured = true;
        self.layouts[index] = tmp2;
        continue;
      }
      if (self.fullRelayoutRequired) {
        self.updateAllWidths();
        self.fullRelayoutRequired = false;
        return 0;
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "estimateLayout",
    value: function estimateLayout(arg0) {
      this.layouts[arg0].width = this.getWidth(arg0);
      this.layouts[arg0].height = this.getEstimatedHeight(arg0);
      this.layouts[arg0].isWidthMeasured = true;
      this.layouts[arg0].enforcedWidth = true;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "handleSpanChange",
    value: function handleSpanChange(arg0) {
      this.fullRelayoutRequired = true;
    }
  };
  items[4] = {
    key: "getLayoutSize",
    value: function getLayoutSize() {
      const self = this;
      if (0 === this.layouts.length) {
        return { width: 0, height: 0 };
      } else {
        const _Math = Math;
        const _Math2 = Math;
        const obj = { width: self.boundedSize, height: max.apply(Math, RVMasonryLayoutManagerImpl(self.columnHeights)) };
        return obj;
      }
    }
  };
  items[5] = {
    key: "recomputeLayouts",
    value: function recomputeLayouts(sum) {
      const self = this;
      if (0 === sum) {
        const _Array = Array;
        self.columnHeights = Array(self.maxColumns).fill(0);
        self.currentColumn = 0;
        const ArrayResult = Array(self.maxColumns);
      } else {
        const result = self.updateColumnHeightsToIndex(sum);
      }
      if (sum < self.layouts.length) {
        do {
          let layout = self.getLayout(sum);
          let span = self.getSpan(sum, true);
          let tmp6 = sum;
          if (self.optimizeItemArrangement) {
            if (1 === span) {
              let result1 = self.placeSingleColumnItem(layout);
            } else {
              let result2 = self.placeOptimizedMultiColumnItem(layout, span);
            }
          } else {
            let result3 = self.placeItemSequentially(layout, span);
          }
          sum = sum + 1;
        } while (sum < length);
      }
    }
  };
  items[6] = {
    key: "getWidth",
    value: function getWidth(sum) {
      const result = this.boundedSize / this.maxColumns;
      return result * this.getSpan(sum);
    }
  };
  items[7] = {
    key: "updateAllWidths",
    value: function updateAllWidths() {
      let length;
      const self = this;
      let num = 0;
      if (0 < this.layouts.length) {
        do {
          self.layouts[num].width = self.getWidth(num);
          self.layouts[num].minHeight = undefined;
          num = num + 1;
          length = self.layouts.length;
        } while (num < length);
      }
    }
  };
  items[8] = {
    key: "placeItemSequentially",
    value: function placeItemSequentially(layout, span) {
      const self = this;
      if (this.currentColumn + span > this.maxColumns) {
        self.currentColumn = 0;
      }
      let sum = self.currentColumn + 1;
      let tmp3 = tmp;
      let tmp4 = tmp;
      if (sum < self.currentColumn + span) {
        do {
          let bound = tmp3;
          if (sum < self.maxColumns) {
            let _Math = Math;
            bound = Math.max(tmp3, self.columnHeights[sum]);
          }
          sum = sum + 1;
          tmp3 = bound;
          tmp4 = bound;
        } while (sum < self.currentColumn + span);
      }
      layout.x = self.boundedSize / self.maxColumns * self.currentColumn;
      layout.y = tmp4;
      let currentColumn = self.currentColumn;
      if (currentColumn < self.currentColumn + span) {
        do {
          if (currentColumn < self.maxColumns) {
            self.columnHeights[currentColumn] = tmp4 + layout.height;
          }
          currentColumn = currentColumn + 1;
        } while (currentColumn < self.currentColumn + span);
      }
      self.currentColumn = self.currentColumn + span;
      if (self.currentColumn >= self.maxColumns) {
        self.currentColumn = 0;
      }
    }
  };
  items[9] = {
    key: "placeSingleColumnItem",
    value: function placeSingleColumnItem(layout) {
      const self = this;
      let num = 0;
      let first = this.columnHeights[0];
      let num2 = 1;
      let num3 = 0;
      if (1 < this.maxColumns) {
        do {
          if (self.columnHeights[num2] < first) {
            first = self.columnHeights[num2];
            num3 = num2;
          }
          num2 = num2 + 1;
          num = num3;
        } while (num2 < self.maxColumns);
      }
      layout.x = self.boundedSize / self.maxColumns * num;
      layout.y = self.columnHeights[num];
      const columnHeights = self.columnHeights;
      columnHeights[num] = columnHeights[num] + layout.height;
    }
  };
  items[10] = {
    key: "placeOptimizedMultiColumnItem",
    value: function placeOptimizedMultiColumnItem(layout, span) {
      let sum4;
      const self = this;
      let num = 0;
      let num2 = 0;
      let num3 = 0;
      if (0 <= this.maxColumns - span) {
        do {
          let bound = self.columnHeights[num2];
          let sum = num2 + 1;
          let tmp3 = bound;
          if (sum < num2 + span) {
            do {
              let _Math = Math;
              bound = Math.max(bound, self.columnHeights[sum]);
              sum = sum + 1;
              tmp3 = bound;
              sum1 = num2 + span;
            } while (sum < sum1);
          }
          let num4 = 0;
          let num5 = 0;
          let num6 = 0;
          if (0 < self.maxColumns) {
            while (true) {
              if (num5 >= num2) {
                if (num5 < num2 + span) {
                  let sum2 = tmp3 + layout.height;
                  num4 = num4 + sum2;
                  num5 = num5 + 1;
                  num6 = num4;
                  if (num5 >= self.maxColumns) {
                    break;
                  }
                }
              }
              sum2 = self.columnHeights[num5];
            }
          }
          if (num6 < MAX_VALUE) {
            num = num2;
            MAX_VALUE = num6;
          }
          num2 = num2 + 1;
          num3 = num;
        } while (num2 <= self.maxColumns - span);
      }
      const columnHeights = self.columnHeights;
      const applyResult = max.apply(Math, RVMasonryLayoutManagerImpl(columnHeights.slice(num3, num3 + span)));
      layout.x = self.boundedSize / self.maxColumns * num3;
      layout.y = applyResult;
      let sum3 = num3;
      if (num3 < num3 + span) {
        do {
          self.columnHeights[sum3] = applyResult + layout.height;
          sum3 = sum3 + 1;
          sum4 = num3 + span;
        } while (sum3 < sum4);
      }
    }
  };
  items[11] = {
    key: "updateColumnHeightsToIndex",
    value: function updateColumnHeightsToIndex(sum) {
      const self = this;
      let num = 0;
      this.columnHeights = Array(this.maxColumns).fill(0);
      this.currentColumn = 0;
      if (0 < sum) {
        do {
          let size = self.layouts[num];
          let result = self.boundedSize / self.maxColumns;
          let _Math = Math;
          let rounded = Math.round(size.width / result);
          let _Math2 = Math;
          let rounded1 = Math.round(size.x / result);
          let _Math3 = Math;
          let bound = Math.min(rounded1 + rounded, self.maxColumns);
          sum = rounded1;
          if (rounded1 < bound) {
            do {
              let _Math4 = Math;
              self.columnHeights[sum] = Math.max(self.columnHeights[sum], size.y + size.height);
              sum = sum + 1;
            } while (sum < bound);
          }
          if (!self.optimizeItemArrangement) {
            self.currentColumn = (rounded1 + rounded) % self.maxColumns;
          }
          num = num + 1;
        } while (num < sum);
      }
    }
  };
  return callback(RVMasonryLayoutManagerImpl, items);
})(require("RVLayoutManager").RVLayoutManager);
