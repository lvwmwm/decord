// Module ID: 5507
// Function ID: 5508
// Name: RenderTimeTracker
// Dependencies: [5508, 5509, 5513, 5514]

// Module 5507 (RenderTimeTracker)
import _createClassDefault from "_createClass" /* 5509 */;
import AverageWindow from "AverageWindow" /* 5513 */;
import PlatformConfig from "PlatformConfig" /* 5514 */;
import _classCallCheck from "_classCallCheck" /* 5508 */;

class RenderTimeTracker {
  constructor() {
    _classCallCheck(this, RenderTimeTracker);
    const averageWindow = new AverageWindow.AverageWindow(5);
    this.renderTimeAvgWindow = averageWindow;
    this.lastTimerStartedAt = -1;
    this.maxRenderTime = 32;
    this.defaultRenderTime = 16;
    this.rendersWithoutCommit = 0;
    this.maxRendersWithoutCommit = 40;
  }
}
const entry = {
  key: "startTracking",
  value: function startTracking() {
    const self = this;
    this.rendersWithoutCommit = this.rendersWithoutCommit + 1;
    const trackAverageRenderTimeForOffsetProjection = PlatformConfig.PlatformConfig.trackAverageRenderTimeForOffsetProjection && -1 === self.lastTimerStartedAt;
    if (trackAverageRenderTimeForOffsetProjection) {
      const _Date = Date;
      self.lastTimerStartedAt = Date.now();
    }
  }
};
const items = [
  entry,
  {
    key: "markRenderComplete",
    value: function markRenderComplete() {
      const self = this;
      this.rendersWithoutCommit = 0;
      const trackAverageRenderTimeForOffsetProjection = PlatformConfig.PlatformConfig.trackAverageRenderTimeForOffsetProjection && -1 !== self.lastTimerStartedAt;
      if (trackAverageRenderTimeForOffsetProjection) {
        const renderTimeAvgWindow = self.renderTimeAvgWindow;
        const _Date = Date;
        renderTimeAvgWindow.addValue(Date.now() - self.lastTimerStartedAt);
        self.lastTimerStartedAt = -1;
      }
    }
  },
  {
    key: "hasExceededMaxRendersWithoutCommit",
    value: function hasExceededMaxRendersWithoutCommit() {
      return this.rendersWithoutCommit >= this.maxRendersWithoutCommit;
    }
  },
  {
    key: "getRawValue",
    value: function getRawValue() {
      return this.renderTimeAvgWindow.currentValue;
    }
  },
  {
    key: "getAverageRenderTime",
    value: function getAverageRenderTime() {
      let defaultRenderTime;
      const self = this;
      if (PlatformConfig.PlatformConfig.trackAverageRenderTimeForOffsetProjection) {
        const _Math = Math;
        const _Math2 = Math;
        const _Math3 = Math;
        defaultRenderTime = Math.min(self.maxRenderTime, Math.max(Math.round(self.renderTimeAvgWindow.currentValue), 16));
      } else {
        defaultRenderTime = self.defaultRenderTime;
      }
      return defaultRenderTime;
    }
  }
];
const RenderTimeTracker_export = _createClassDefault(RenderTimeTracker, items);

export { RenderTimeTracker_export as RenderTimeTracker };
