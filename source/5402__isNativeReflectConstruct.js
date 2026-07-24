// Module ID: 5402
// Function ID: 46302
// Name: _isNativeReflectConstruct
// Dependencies: [5368, 5369, 5391, 5393, 5394, 5396, 5398]

// Module 5402 (_isNativeReflectConstruct)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _get from "_get";
import _inherits from "_inherits";

function _isNativeReflectConstruct() {
  let _classCallCheck = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return _classCallCheck;
  }
  const result = _isNativeReflectConstruct();
}

export const RVLinearLayoutManagerImpl = ((RVLayoutManager) => {
  class RVLinearLayoutManagerImpl {
    constructor(arg0, arg1) {
      self = this;
      tmp = RVLinearLayoutManagerImpl(this, RVLinearLayoutManagerImpl);
      items = [, ];
      items[0] = RVLayoutManager;
      items[1] = arg1;
      obj = outer1_3(RVLinearLayoutManagerImpl);
      tmp2 = outer1_2;
      if (outer1_6()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_3;
        constructResult = Reflect.construct(obj, items, outer1_3(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.hasSize = false;
      tmp2Result.tallestItemHeight = 0;
      windowSize = RVLayoutManager.windowSize;
      tmp2Result.boundedSize = tmp2Result.horizontal ? windowSize.height : windowSize.width;
      tmp2Result.hasSize = tmp2Result.boundedSize > 0;
      return tmp2Result;
    }
  }
  callback2(RVLinearLayoutManagerImpl, RVLayoutManager);
  let obj = {
    key: "updateLayoutParams",
    value: function updateLayoutParams(windowSize) {
      const self = this;
      const items = [windowSize];
      !(function _superPropGet(RVLinearLayoutManagerImpl, updateLayoutParams, arg2, arg3) {
        let _classCallCheck = arg2;
        let prototype = RVLinearLayoutManagerImpl;
        if (1) {
          prototype = RVLinearLayoutManagerImpl.prototype;
        }
        const tmpResult = outer2_4(outer2_3(prototype), "updateLayoutParams", arg2);
        let _defineProperties = tmpResult;
        let fn = tmpResult;
        if (2) {
          fn = tmpResult;
          if ("function" === typeof tmpResult) {
            fn = (arg0) => tmpResult.apply(_classCallCheck, arg0);
          }
        }
        return fn;
      })(RVLinearLayoutManagerImpl, "updateLayoutParams", this, 3)(items);
      windowSize = windowSize.windowSize;
      self.boundedSize = this.horizontal ? windowSize.height : windowSize.width;
      if (!tmp2) {
        if (self.layouts.length > 0) {
          self.recomputeLayouts(0, self.layouts.length - 1);
          self.requiresRepaint = true;
        }
      }
    }
  };
  let items = [obj, , , , , ];
  obj = {
    key: "processLayoutInfo",
    value: function processLayoutInfo(arg0, arg1) {
      const self = this;
      const iter = arg0[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let dimensions = nextResult.dimensions;
        let tmp2 = self.layouts[nextResult.index];
        let tmp3 = tmp2;
        if (self.horizontal) {
          let tmp4 = dimensions;
          let boundedSize = dimensions.width;
        } else {
          boundedSize = self.boundedSize;
        }
        tmp2.width = boundedSize;
        let tmp5 = tmp2;
        tmp3.isHeightMeasured = true;
        tmp3.isWidthMeasured = true;
        let tmp6 = dimensions;
        tmp3.height = dimensions.height;
        continue;
      }
      if (tmp7) {
        const result = self.normalizeLayoutHeights(arg0);
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "estimateLayout",
    value: function estimateLayout(arg0) {
      const self = this;
      if (this.horizontal) {
        let boundedSize = self.getEstimatedWidth(arg0);
      } else {
        boundedSize = self.boundedSize;
      }
      this.layouts[arg0].width = boundedSize;
      this.layouts[arg0].height = self.getEstimatedHeight(arg0);
      this.layouts[arg0].isWidthMeasured = !self.horizontal;
      this.layouts[arg0].enforcedWidth = !self.horizontal;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getLayoutSize",
    value: function getLayoutSize() {
      const self = this;
      if (0 === this.layouts.length) {
        return { width: 0, height: 0 };
      } else {
        const size = self.layouts[self.layouts.length - 1];
        const obj = {};
        if (self.horizontal) {
          let boundedSize = size.x + size.width;
        } else {
          boundedSize = self.boundedSize;
        }
        obj.width = boundedSize;
        if (self.horizontal) {
          const tallestItem = self.tallestItem;
          let height;
          if (null != tallestItem) {
            height = tallestItem.height;
          }
          if (null == height) {
            height = self.boundedSize;
          }
          let sum = height;
        } else {
          sum = size.y + size.height;
        }
        obj.height = sum;
        return obj;
      }
    }
  };
  items[4] = {
    key: "normalizeLayoutHeights",
    value: function normalizeLayoutHeights(arg0) {
      const self = this;
      let tmp;
      const iter = arg0[Symbol.iterator]();
      while (iter !== undefined) {
        let tmp2 = self.layouts[iter.next().index];
        let minHeight = tmp2.minHeight;
        let tmp4 = minHeight;
        let num = 0;
        let tmp3 = tmp2;
        if (null != minHeight) {
          num = minHeight;
        }
        let tmp5 = tmp2.height > num;
        let tmp6 = tmp5;
        if (tmp5) {
          let tmp7 = tmp2;
          let height;
          if (null != tmp) {
            let tmp10 = tmp;
            height = tmp8.height;
          }
          let tmp11 = height;
          let num2 = 0;
          if (null != height) {
            num2 = height;
          }
          tmp6 = tmp3.height > num2;
        }
        if (tmp6) {
          tmp = tmp2;
        }
        continue;
      }
      if (tmp) {
        if (tmp.height !== self.tallestItemHeight) {
          let num3 = tmp.height;
          if (tmp.height < self.tallestItemHeight) {
            self.requiresRepaint = true;
            num3 = 0;
          }
          const layouts = self.layouts;
          for (const item10046 of layouts) {
            let tmp14 = item10046;
            let tmp15 = num3;
            if (num3 > 0) {
              let tmp16 = item10046;
              let tmp17 = tmp;
              tmp14.height = tmp.height;
            }
            let tmp18 = item10046;
            let tmp19 = num3;
            tmp14.minHeight = num3;
            continue;
          }
          tmp.minHeight = 0;
          self.tallestItem = tmp;
          self.tallestItemHeight = tmp.height;
        }
      }
    }
  };
  items[5] = {
    key: "recomputeLayouts",
    value: function recomputeLayouts(arg0, arg1) {
      let sum = arg0;
      const self = this;
      if (arg0 <= arg1) {
        do {
          let layout = self.getLayout(sum);
          let tmp4 = sum;
          if (0 === sum) {
            layout.x = 0;
            layout.y = 0;
            let size = tmp2;
          } else {
            size = self.getLayout(sum - 1);
            let num = 0;
            if (self.horizontal) {
              num = size.x + size.width;
            }
            layout.x = num;
            let num2 = 0;
            if (!self.horizontal) {
              num2 = size.y + size.height;
            }
            layout.y = num2;
          }
          if (self.horizontal) {
            if (self.hasSize) {
              layout.minHeight = self.boundedSize;
            }
          } else {
            layout.width = self.boundedSize;
          }
          sum = sum + 1;
          tmp2 = size;
        } while (sum <= arg1);
      }
    }
  };
  return callback(RVLinearLayoutManagerImpl, items);
})(require("RVLayoutManager").RVLayoutManager);
