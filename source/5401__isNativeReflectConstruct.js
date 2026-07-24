// Module ID: 5401
// Function ID: 46281
// Name: _isNativeReflectConstruct
// Dependencies: [5368, 5369, 5391, 5393, 5394, 5396, 5398]

// Module 5401 (_isNativeReflectConstruct)
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

export const RVGridLayoutManagerImpl = ((RVLayoutManager) => {
  class RVGridLayoutManagerImpl {
    constructor(arg0, arg1) {
      self = this;
      tmp = RVGridLayoutManagerImpl(this, RVGridLayoutManagerImpl);
      items = [, ];
      items[0] = RVLayoutManager;
      items[1] = arg1;
      obj = outer1_3(RVGridLayoutManagerImpl);
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
      tmp2Result.fullRelayoutRequired = false;
      tmp2Result.boundedSize = RVLayoutManager.windowSize.width;
      return tmp2Result;
    }
  }
  callback2(RVGridLayoutManagerImpl, RVLayoutManager);
  let obj = {
    key: "updateLayoutParams",
    value: function updateLayoutParams(windowSize) {
      const self = this;
      const items = [windowSize];
      !(function _superPropGet(RVGridLayoutManagerImpl, updateLayoutParams, arg2, arg3) {
        let _classCallCheck = arg2;
        let prototype = RVGridLayoutManagerImpl;
        if (1) {
          prototype = RVGridLayoutManagerImpl.prototype;
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
      })(RVGridLayoutManagerImpl, "updateLayoutParams", this, 3)(items);
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
  let items = [obj, , , , , , , , , , , , ];
  obj = {
    key: "processLayoutInfo",
    value: function processLayoutInfo(arg0, arg1) {
      const self = this;
      const iter = arg0[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp2 = self.layouts[nextResult.index];
        tmp2.height = nextResult.dimensions.height;
        tmp2.isHeightMeasured = true;
        tmp2.isWidthMeasured = true;
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
        const obj = { width: self.boundedSize, height: self.computeTotalHeightTillRow(self.layouts.length - 1) };
        return obj;
      }
    }
  };
  items[5] = {
    key: "recomputeLayouts",
    value: function recomputeLayouts(arg0, arg1) {
      let x;
      let y;
      const self = this;
      let result = this.locateFirstIndexInRow(Math.max(0, arg0 - 1));
      const layout = this.getLayout(result);
      ({ x, y } = layout);
      if (result <= arg1) {
        do {
          let layout1 = self.getLayout(result);
          let num = x;
          let tmp4 = result;
          if (!self.checkBounds(x, layout1.width)) {
            let result1 = self.processAndReturnTallestItemInRow(result - 1);
            y = result1.y + result1.height;
            num = 0;
          }
          layout1.x = num;
          layout1.y = y;
          x = num + layout1.width;
          result = result + 1;
        } while (result <= arg1);
      }
      if (arg1 === self.layouts.length - 1) {
        const result2 = self.processAndReturnTallestItemInRow(arg1);
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
    key: "processAndReturnTallestItemInRow",
    value: function processAndReturnTallestItemInRow(arg0) {
      const self = this;
      const result = this.locateFirstIndexInRow(arg0);
      let flag = false;
      let num = 0;
      let sum = result;
      let tmp4;
      let num2 = 0;
      let flag2 = false;
      if (result <= arg0) {
        while (true) {
          let tmp5 = self.layouts[sum];
          if (!flag) {
            let _Boolean = Boolean;
            flag = Boolean(tmp5.isHeightMeasured);
          }
          let _Math = Math;
          let bound = Math.max(num, tmp5.height);
          let minHeight = tmp5.minHeight;
          let tmp7 = flag;
          let num3 = 0;
          if (null != minHeight) {
            num3 = minHeight;
          }
          let tmp8 = tmp5.height > num3;
          if (tmp8) {
            let height;
            if (null != tmp2) {
              height = tmp2.height;
            }
            let num4 = 0;
            if (null != height) {
              num4 = height;
            }
            tmp8 = tmp5.height > num4;
            let tmp10 = height;
            let tmp11 = tmp2;
          }
          if (tmp8) {
            tmp2 = tmp5;
          }
          sum = sum + 1;
          let tmp12 = tmp2;
          tmp4 = tmp2;
          num2 = bound;
          flag2 = flag;
          if (sum >= self.layouts.length) {
            break;
          } else {
            num = bound;
            tmp4 = tmp2;
            num2 = bound;
            flag2 = flag;
            if (sum > arg0) {
              break;
            }
          }
        }
      }
      if (tmp13) {
        const _Number = Number;
        num2 = Number.MAX_SAFE_INTEGER;
      }
      if (null == tmp4) {
        tmp4 = self.layouts[result];
      }
      if (flag2) {
        if (tmp4) {
          let num5 = tmp4.height;
          if (num2 - tmp4.height > 1) {
            self.requiresRepaint = true;
            num5 = 0;
          }
          if (result <= arg0) {
            self.layouts[result].minHeight = num5;
            if (num5 > 0) {
              self.layouts[result].height = num5;
            }
            let sum1 = result + 1;
            if (sum1 < self.layouts.length) {
              while (sum1 <= arg0) {
                self.layouts[sum1].minHeight = num5;
                if (num5 > 0) {
                  self.layouts[sum1].height = num5;
                }
                sum1 = sum1 + 1;
                if (sum1 >= self.layouts.length) {
                  break;
                }
              }
            }
          }
          tmp4.minHeight = 0;
        }
        return tmp4;
      } else {
        return tmp4;
      }
      tmp13 = !tmp4 && num2 > 0;
    }
  };
  items[8] = {
    key: "computeTotalHeightTillRow",
    value: function computeTotalHeightTillRow(arg0) {
      const self = this;
      const result = this.locateFirstIndexInRow(arg0);
      let num = 0;
      if (result <= arg0) {
        const _Math = Math;
        let bound = Math.max(0, self.layouts[result].height);
        let sum = result + 1;
        num = bound;
        if (sum < self.layouts.length) {
          num = bound;
          while (sum <= arg0) {
            let _Math2 = Math;
            bound = Math.max(bound, self.layouts[sum].height);
            sum = sum + 1;
            num = bound;
            if (sum >= self.layouts.length) {
              break;
            }
          }
        }
      }
      return this.layouts[result].y + num;
    }
  };
  items[9] = {
    key: "updateAllWidths",
    value: function updateAllWidths() {
      let length;
      const self = this;
      let num = 0;
      if (0 < this.layouts.length) {
        do {
          self.layouts[num].width = self.getWidth(num);
          num = num + 1;
          length = self.layouts.length;
        } while (num < length);
      }
    }
  };
  items[10] = {
    key: "checkBounds",
    value: function checkBounds(arg0, width) {
      return arg0 + width <= this.boundedSize + 0.9;
    }
  };
  items[11] = {
    key: "locateFirstIndexInRow",
    value: function locateFirstIndexInRow(arg0) {
      const self = this;
      if (0 === arg0) {
        return 0;
      } else {
        let tmp = arg0;
        if (arg0 >= 0) {
          let tmp2 = arg0;
          tmp = arg0;
          if (0 !== self.layouts[arg0].x) {
            const diff = tmp2 - 1;
            tmp = diff;
            while (diff >= 0) {
              tmp2 = diff;
              tmp = diff;
              if (0 === self.layouts[diff].x) {
                break;
              }
            }
          }
        }
        const _Math = Math;
        return Math.max(tmp, 0);
      }
    }
  };
  items[12] = {
    key: "isInLastRow",
    value: function isInLastRow(arg0) {
      const self = this;
      if (0 === this.layouts.length) {
        return false;
      } else {
        const diff = self.layouts.length - 1;
        let tmp2 = arg0 === diff;
        if (!tmp2) {
          let y;
          if (null != self.layouts[arg0]) {
            y = tmp3.y;
          }
          let y1;
          if (null != self.layouts[diff]) {
            y1 = tmp6.y;
          }
          tmp2 = y === y1;
        }
        return tmp2;
      }
    }
  };
  return callback(RVGridLayoutManagerImpl, items);
})(require("RVLayoutManager").RVLayoutManager);
