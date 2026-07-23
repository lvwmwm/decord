// Module ID: 5367
// Function ID: 46013
// Name: RenderTimeTracker
// Dependencies: [5368, 5369, 5373, 5374]

// Module 5367 (RenderTimeTracker)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

const require = arg1;

export const RenderTimeTracker = (() => {
  class RenderTimeTracker {
    constructor() {
      tmp = outer1_2(this, RenderTimeTracker);
      averageWindow = new RenderTimeTracker(outer1_1[2]).AverageWindow(5);
      this.renderTimeAvgWindow = averageWindow;
      this.lastTimerStartedAt = -1;
      this.maxRenderTime = 32;
      this.defaultRenderTime = 16;
      this.rendersWithoutCommit = 0;
      this.maxRendersWithoutCommit = 40;
      return;
    }
  }
  let obj = {
    key: "startTracking",
    value: function startTracking() {
      const self = this;
      this.rendersWithoutCommit = this.rendersWithoutCommit + 1;
      let trackAverageRenderTimeForOffsetProjection = RenderTimeTracker(outer1_1[3]).PlatformConfig.trackAverageRenderTimeForOffsetProjection;
      if (trackAverageRenderTimeForOffsetProjection) {
        trackAverageRenderTimeForOffsetProjection = -1 === self.lastTimerStartedAt;
      }
      if (trackAverageRenderTimeForOffsetProjection) {
        const _Date = Date;
        self.lastTimerStartedAt = Date.now();
      }
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "markRenderComplete",
    value: function markRenderComplete() {
      const self = this;
      this.rendersWithoutCommit = 0;
      let trackAverageRenderTimeForOffsetProjection = RenderTimeTracker(outer1_1[3]).PlatformConfig.trackAverageRenderTimeForOffsetProjection;
      if (trackAverageRenderTimeForOffsetProjection) {
        trackAverageRenderTimeForOffsetProjection = -1 !== self.lastTimerStartedAt;
      }
      if (trackAverageRenderTimeForOffsetProjection) {
        const renderTimeAvgWindow = self.renderTimeAvgWindow;
        const _Date = Date;
        renderTimeAvgWindow.addValue(Date.now() - self.lastTimerStartedAt);
        self.lastTimerStartedAt = -1;
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "hasExceededMaxRendersWithoutCommit",
    value: function hasExceededMaxRendersWithoutCommit() {
      return this.rendersWithoutCommit >= this.maxRendersWithoutCommit;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getRawValue",
    value: function getRawValue() {
      return this.renderTimeAvgWindow.currentValue;
    }
  };
  items[4] = {
    key: "getAverageRenderTime",
    value: function getAverageRenderTime() {
      const self = this;
      if (RenderTimeTracker(outer1_1[3]).PlatformConfig.trackAverageRenderTimeForOffsetProjection) {
        const _Math = Math;
        const _Math2 = Math;
        const _Math3 = Math;
        let defaultRenderTime = Math.min(self.maxRenderTime, Math.max(Math.round(self.renderTimeAvgWindow.currentValue), 16));
      } else {
        defaultRenderTime = self.defaultRenderTime;
      }
      return defaultRenderTime;
    }
  };
  return callback(RenderTimeTracker, items);
})();
