// Module ID: 310
// Function ID: 4759
// Name: _isViewable
// Dependencies: []

// Module 310 (_isViewable)
function _isViewable(arg0, arg1, arg2, arg3, arg4, arg5) {
  if (tmp) {
    return true;
  } else {
    const _Math = Math;
    const _Math2 = Math;
    const bound = Math.min(arg3, arg4);
    const _Math3 = Math;
    const bound1 = Math.max(0, bound - Math.max(arg2, 0));
    if (arg0) {
      let result = bound1 / arg4;
    } else {
      result = bound1 / arg5;
    }
    return 100 * result >= arg1;
  }
  const tmp = arg2 >= 0 && arg3 <= arg4 && arg3 > arg2;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);

export default () => {
  class ViewabilityHelper {
    constructor() {
      self = this;
      if (arguments.length > 0) {
        if (undefined !== arguments[0]) {
          first = arguments[0];
        }
        tmp2 = closure_3;
        tmp3 = ViewabilityHelper;
        tmp4 = closure_3(self, ViewabilityHelper);
        flag = false;
        self._hasInteracted = false;
        tmp5 = globalThis;
        _Set = Set;
        prototype = Set.prototype;
        tmp6 = new.target;
        tmp7 = new.target;
        set = new Set();
        tmp9 = set;
        self._timers = set;
        self._viewableIndices = [];
        _Map = Map;
        prototype2 = Map.prototype;
        tmp10 = new.target;
        tmp11 = new.target;
        map = new Map();
        tmp13 = map;
        self._viewableItems = map;
        self._config = { viewAreaCoveragePercentThreshold: 0 };
        return;
      }
      return;
    }
  }
  const arg1 = ViewabilityHelper;
  let obj = {
    key: "dispose",
    value: function dispose() {
      const _timers = this._timers;
      const item = _timers.forEach(clearTimeout);
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "computeViewableItems",
    value: function computeViewableItems(getItemCount, arg1, arg2, getCellMetrics, renderRange) {
      let first;
      let itemVisiblePercentThreshold;
      let last;
      let viewAreaCoveragePercentThreshold;
      const itemCount = getItemCount.getItemCount(getItemCount.data);
      ({ itemVisiblePercentThreshold, viewAreaCoveragePercentThreshold } = this._config);
      let tmp3 = itemVisiblePercentThreshold;
      if (null != viewAreaCoveragePercentThreshold) {
        tmp3 = viewAreaCoveragePercentThreshold;
      }
      let tmp5 = null != tmp3;
      if (tmp5) {
        tmp5 = null != itemVisiblePercentThreshold !== (null != viewAreaCoveragePercentThreshold);
      }
      ViewabilityHelper(closure_1[3])(tmp5, "Must set exactly one of itemVisiblePercentThreshold or viewAreaCoveragePercentThreshold");
      const items = [];
      if (0 === itemCount) {
        return items;
      } else {
        let tmp7 = renderRange;
        if (!renderRange) {
          let obj = { first: 0, last: itemCount - 1 };
          tmp7 = obj;
        }
        ({ first, last } = tmp7);
        if (last >= itemCount) {
          const _console = console;
          const _JSON = JSON;
          obj = { renderRange, itemCount };
          console.warn(`Invalid render range computing viewability ${JSON.stringify(obj2)}`);
          return [];
        } else {
          let num2 = -1;
          if (first <= last) {
            while (true) {
              let cellMetrics = getCellMetrics.getCellMetrics(first, getItemCount);
              let tmp8 = first;
              let tmp9 = num2;
              if (!cellMetrics) {
                first = first + 1;
                num2 = tmp9;
                if (first > last) {
                  break;
                }
              } else {
                let _Math = Math;
                let rounded = Math.floor(cellMetrics.offset - arg1);
                let _Math2 = Math;
                let rounded1 = Math.floor(rounded + cellMetrics.length);
                if (rounded < arg2) {
                  if (rounded1 > 0) {
                    let tmp14 = callback2;
                    let tmp15 = tmp2;
                    let tmp16 = tmp3;
                    let tmp17 = rounded;
                    let tmp18 = rounded1;
                    let tmp19 = arg2;
                    tmp9 = first;
                    let tmp20 = rounded;
                    let tmp21 = rounded1;
                    if (callback2(tmp2, tmp3, rounded, rounded1, arg2, cellMetrics.length)) {
                      let arr = items.push(first);
                      tmp9 = first;
                      let tmp23 = rounded;
                      let tmp24 = rounded1;
                    }
                  }
                }
                let tmp12 = rounded;
                let tmp13 = rounded1;
                tmp9 = num2;
                if (num2 >= 0) {
                  break;
                }
              }
              break;
            }
          }
          return items;
        }
      }
      const tmp4 = ViewabilityHelper(closure_1[3]);
    }
  };
  items[1] = obj;
  obj = {
    key: "onUpdate",
    value: function onUpdate(getItemCount, arg1, arg2, getCellMetrics, arg4, arg5, renderRange) {
      let self = this;
      const ViewabilityHelper = getItemCount;
      self = this;
      const itemCount = getItemCount.getItemCount(getItemCount.data);
      if (!this._config.waitForInteraction) {
        if (0 !== itemCount) {
          if (getCellMetrics.getCellMetrics(0, getItemCount)) {
            let items = [];
            let viewableItems = items;
            if (itemCount) {
              viewableItems = self.computeViewableItems(getItemCount, arg1, arg2, getCellMetrics, renderRange);
              items = viewableItems;
            }
            if (self._viewableIndices.length !== items.length) {
              self._viewableIndices = items;
              if (self._config.minimumViewTime) {
                const _setTimeout = setTimeout;
                const timerId = setTimeout(() => {
                  const _timers = self._timers;
                  _timers.delete(timerId);
                  self._onUpdateSync(arg0, viewableItems, arg5, arg4);
                }, self._config.minimumViewTime);
                const _timers = self._timers;
                _timers.add(timerId);
              } else {
                self._onUpdateSync(getItemCount, items, arg5, arg4);
              }
            } else {
              const _viewableIndices = self._viewableIndices;
            }
          }
        }
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "resetViewableIndices",
    value: function resetViewableIndices() {
      this._viewableIndices = [];
    }
  };
  items[4] = {
    key: "recordInteraction",
    value: function recordInteraction() {
      this._hasInteracted = true;
    }
  };
  items[5] = {
    key: "_onUpdateSync",
    value: function _onUpdateSync(getItemCount, items, arg2, arg3) {
      let self = this;
      const ViewabilityHelper = getItemCount;
      self = this;
      const found = items.filter((arg0) => {
        const _viewableIndices = self._viewableIndices;
        return _viewableIndices.includes(arg0);
      });
      const _viewableItems = this._viewableItems;
      const map = new Map(found.map((arg0) => {
        const tmp = arg3(arg0, true, arg0);
        const items = [tmp.key, tmp];
        return items;
      }));
      let obj = map;
      items = [];
      while (tmp3 !== undefined) {
        let tmp5 = self;
        let tmp6 = self(tmp4, 2);
        let tmp7 = tmp6[1];
        let tmp8 = _viewableItems;
        if (!_viewableItems.has(tmp6[0])) {
          let tmp9 = items;
          let tmp10 = tmp7;
          let arr = items.push(tmp7);
        }
        // continue
      }
      const tmp3 = map[Symbol.iterator]();
      while (tmp12 !== undefined) {
        let tmp14 = self;
        let tmp15 = self(tmp13, 2);
        let tmp16 = tmp15[1];
        let tmp17 = tmp2;
        if (!obj.has(tmp15[0])) {
          let tmp18 = items;
          let _Object = Object;
          let tmp19 = tmp16;
          obj = { isViewable: false };
          arr = items.push(Object.assign({}, tmp16, obj));
        }
        // continue
      }
      if (items.length > 0) {
        self._viewableItems = obj;
        obj = {};
        const _Array = Array;
        obj.viewableItems = Array.from(obj.values());
        obj.changed = items;
        obj.viewabilityConfig = self._config;
        arg2(obj);
      }
    }
  };
  return callback(ViewabilityHelper, items);
}();
