// Module ID: 5166
// Function ID: 43793
// Name: ViewabilityHelper
// Dependencies: []

// Module 5166 (ViewabilityHelper)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);

export default () => {
  class ViewabilityHelper {
    constructor(arg0, arg1) {
      tmp = closure_2(this, ViewabilityHelper);
      this.possiblyViewableIndices = [];
      this.hasInteracted = false;
      this.viewableIndices = [];
      this.lastReportedViewableIndices = [];
      set = new Set();
      this.timers = set;
      this.viewabilityConfig = arg0;
      this.viewableIndicesChanged = arg1;
      return;
    }
  }
  const arg1 = ViewabilityHelper;
  let obj = {
    key: "dispose",
    value: function dispose() {
      const timers = this.timers;
      const item = timers.forEach(clearTimeout);
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "updateViewableItems",
    value: function updateViewableItems(arg0, arg1, arg2, arg3, arg4, possiblyViewableIndices) {
      let self = this;
      const ViewabilityHelper = arg0;
      self = this;
      if (undefined !== possiblyViewableIndices) {
        self.possiblyViewableIndices = possiblyViewableIndices;
      }
      const viewabilityConfig = self.viewabilityConfig;
      let prop;
      if (null != viewabilityConfig) {
        prop = viewabilityConfig.itemVisiblePercentThreshold;
      }
      if (null !== prop) {
        const viewabilityConfig2 = self.viewabilityConfig;
        let prop1;
        if (null != viewabilityConfig2) {
          prop1 = viewabilityConfig2.itemVisiblePercentThreshold;
        }
        if (undefined !== prop1) {
          const viewabilityConfig3 = self.viewabilityConfig;
          let prop2;
          if (null != viewabilityConfig3) {
            prop2 = viewabilityConfig3.viewAreaCoveragePercentThreshold;
          }
          if (null !== prop2) {
            const viewabilityConfig4 = self.viewabilityConfig;
            let prop3;
            if (null != viewabilityConfig4) {
              prop3 = viewabilityConfig4.viewAreaCoveragePercentThreshold;
            }
            if (undefined !== prop3) {
              const _Error = Error;
              const error = new Error(ViewabilityHelper(arg1[2]).ErrorMessages.multipleViewabilityThresholdTypesNotSupported);
              throw error;
            }
          }
        }
      }
      const viewabilityConfig5 = self.viewabilityConfig;
      let waitForInteraction;
      if (null != viewabilityConfig5) {
        waitForInteraction = viewabilityConfig5.waitForInteraction;
      }
      const prop4 = self.possiblyViewableIndices;
      const found = prop4.filter((arg0) => {
        const viewabilityConfig = self.viewabilityConfig;
        let prop;
        if (null != viewabilityConfig) {
          prop = viewabilityConfig.viewAreaCoveragePercentThreshold;
        }
        const viewabilityConfig2 = self.viewabilityConfig;
        let prop1;
        if (null != viewabilityConfig2) {
          prop1 = viewabilityConfig2.itemVisiblePercentThreshold;
        }
        return self.isItemViewable(arg0, arg0, arg1, arg2, arg3, prop, prop1, arg4);
      });
      self.viewableIndices = found;
      const viewabilityConfig6 = self.viewabilityConfig;
      let minimumViewTime;
      if (null != viewabilityConfig6) {
        minimumViewTime = viewabilityConfig6.minimumViewTime;
      }
      let num = 250;
      if (null != minimumViewTime) {
        num = minimumViewTime;
      }
      if (num > 0) {
        const _setTimeout = setTimeout;
        const timerId = setTimeout(() => {
          const timers = self.timers;
          timers.delete(timerId);
          const result = self.checkViewableIndicesChanges(found);
        }, num);
        const timers = self.timers;
        timers.add(timerId);
      } else {
        const result = self.checkViewableIndicesChanges(found);
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "checkViewableIndicesChanges",
    value: function checkViewableIndicesChanges(found) {
      const self = this;
      const ViewabilityHelper = this;
      found = found.filter((arg0) => {
        const viewableIndices = self.viewableIndices;
        return viewableIndices.includes(arg0);
      });
      const found1 = found.filter((arg0) => {
        const lastReportedViewableIndices = self.lastReportedViewableIndices;
        return !lastReportedViewableIndices.includes(arg0);
      });
      const prop = this.lastReportedViewableIndices;
      const found2 = prop.filter((arg0) => !found.includes(arg0));
      if (tmp) {
        self.lastReportedViewableIndices = found;
        const result = self.viewableIndicesChanged(found, found1, found2);
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "clearLastReportedViewableIndices",
    value: function clearLastReportedViewableIndices() {
      this.lastReportedViewableIndices = [];
    }
  };
  items[4] = {
    key: "isItemViewable",
    value: function isItemViewable(arg0, arg1, arg2, arg3, width, prop, prop1, arg7) {
      const size = arg7(arg0);
      if (undefined === size) {
        return false;
      } else {
        const diff = arg1 ? size.x : size.y - arg2;
        const tmp3 = arg1 ? size.width : size.height;
        if (arg1) {
          width = width.width;
        } else {
          width = width.height - arg3;
        }
        const _Math = Math;
        const _Math2 = Math;
        const bound = Math.min(diff + tmp3, width);
        const diff1 = bound - Math.max(diff, 0);
        if (diff1 === tmp3) {
          return true;
        } else if (0 === diff1) {
          return false;
        } else {
          if (null != prop) {
            let result = 0.01 * prop;
          } else {
            let num2 = 0;
            if (null != prop1) {
              num2 = prop1;
            }
            result = 0.01 * num2;
          }
          return null != prop ? diff1 / width : diff1 / tmp3 >= result;
        }
      }
    }
  };
  return callback(ViewabilityHelper, items);
}();
