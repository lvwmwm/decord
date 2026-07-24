// Module ID: 5425
// Function ID: 46492
// Name: JSFPSMonitor
// Dependencies: [5368, 5369, 5356, 5426]

// Module 5425 (JSFPSMonitor)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

const require = arg1;

export const JSFPSMonitor = (() => {
  class JSFPSMonitor {
    constructor() {
      self = this;
      tmp = outer1_2(this, self);
      this.startTime = 0;
      this.frameCount = 0;
      this.timeWindow = { frameCount: 0, startTime: 0 };
      this.minFPS = Number.MAX_SAFE_INTEGER;
      this.maxFPS = 0;
      this.averageFPS = 0;
      this.clearAnimationNumber = 0;
      this.updateLoopCompute = () => {
        self.frameCount = self.frameCount + 1;
        const result = (Date.now() - self.startTime) / 1000;
        let num = 0;
        if (result > 0) {
          num = self.frameCount / result;
        }
        self.averageFPS = num;
        const timeWindow = self.timeWindow;
        timeWindow.frameCount = timeWindow.frameCount + 1;
        const result1 = (Date.now() - self.timeWindow.startTime) / 1000;
        if (result1 >= 1) {
          const result2 = self.timeWindow.frameCount / result1;
          const _Math = Math;
          self.minFPS = Math.min(self.minFPS, result2);
          const _Math2 = Math;
          self.maxFPS = Math.max(self.maxFPS, result2);
          self.timeWindow.frameCount = 0;
          const _Date = Date;
          self.timeWindow.startTime = Date.now();
        }
        self.measureLoop();
      };
      return;
    }
  }
  let obj = {
    key: "measureLoop",
    value: function measureLoop() {
      this.clearAnimationNumber = requestAnimationFrame(this.updateLoopCompute);
    }
  };
  const items = [obj, , ];
  obj = {
    key: "startTracking",
    value: function startTracking() {
      const self = this;
      if (0 !== this.startTime) {
        const _Error = Error;
        const error = new Error(JSFPSMonitor(outer1_1[2]).ErrorMessages.fpsMonitorAlreadyRunning);
        throw error;
      } else {
        const _Date = Date;
        self.startTime = Date.now();
        const _Date2 = Date;
        self.timeWindow.startTime = Date.now();
        self.measureLoop();
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "stopAndGetData",
    value: function stopAndGetData() {
      const self = this;
      cancelAnimationFrame(this.clearAnimationNumber);
      if (this.minFPS === Number.MAX_SAFE_INTEGER) {
        ({ averageFPS: self.minFPS, averageFPS: self.maxFPS } = self);
      }
      const obj = { minFPS: JSFPSMonitor(outer1_1[3]).roundToDecimalPlaces(self.minFPS, 1) };
      const obj2 = JSFPSMonitor(outer1_1[3]);
      obj.maxFPS = JSFPSMonitor(outer1_1[3]).roundToDecimalPlaces(self.maxFPS, 1);
      const obj3 = JSFPSMonitor(outer1_1[3]);
      obj.averageFPS = JSFPSMonitor(outer1_1[3]).roundToDecimalPlaces(self.averageFPS, 1);
      return obj;
    }
  };
  items[2] = obj;
  return callback(JSFPSMonitor, items);
})();
