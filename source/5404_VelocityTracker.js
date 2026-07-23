// Module ID: 5404
// Function ID: 46312
// Name: VelocityTracker
// Dependencies: [5368, 5369]

// Module 5404 (VelocityTracker)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";


export const VelocityTracker = (() => {
  class VelocityTracker {
    constructor() {
      tmp = VelocityTracker(this, VelocityTracker);
      this.lastUpdateTime = Date.now();
      this.velocity = { x: 0, y: 0 };
      this.timeoutId = null;
      return;
    }
  }
  let obj = {
    key: "computeVelocity",
    value: function computeVelocity(arg0, absoluteLastScrollOffset, arg2, arg3) {
      let self = this;
      let _classCallCheck = arg3;
      self = this;
      this.cleanUp();
      const timestamp = Date.now();
      const diff = arg0 - absoluteLastScrollOffset;
      const result = diff / Math.max(1, timestamp - this.lastUpdateTime);
      this.lastUpdateTime = timestamp;
      let num = 0;
      if (arg2) {
        num = result;
      }
      this.velocity.x = num;
      let num2 = 0;
      if (!arg2) {
        num2 = result;
      }
      self.velocity.y = num2;
      arg3(self.velocity, false);
      self.timeoutId = setTimeout(() => {
        self.cleanUp();
        self.lastUpdateTime = Date.now();
        self.velocity.x = 0;
        self.velocity.y = 0;
        callback(self.velocity, true);
      }, 100);
    }
  };
  const items = [obj, ];
  obj = {
    key: "cleanUp",
    value: function cleanUp() {
      const self = this;
      if (null !== this.timeoutId) {
        const _clearTimeout = clearTimeout;
        clearTimeout(self.timeoutId);
        self.timeoutId = null;
      }
    }
  };
  items[1] = obj;
  return callback(VelocityTracker, items);
})();
