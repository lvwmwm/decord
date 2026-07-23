// Module ID: 4530
// Function ID: 39801
// Name: LifecycleManager
// Dependencies: [6, 7, 2]

// Module 4530 (LifecycleManager)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

const tmp2 = (() => {
  class LifecycleManager {
    constructor() {
      tmp = LifecycleManager(this, LifecycleManager);
      this.isInitialized = false;
      return;
    }
  }
  let obj = {
    key: "initialize",
    value(arg0) {
      const self = this;
      const items = [...arguments];
      if (!this.isInitialized) {
        self.isInitialized = true;
        const _initialize = self._initialize;
        const items1 = [];
        HermesBuiltin.arraySpread(items, 0);
        HermesBuiltin.apply(items1, self);
      }
    }
  };
  let items = [obj, ];
  obj = {
    key: "terminate",
    value() {
      const self = this;
      if (this.isInitialized) {
        self.isInitialized = false;
        self._terminate();
      }
    }
  };
  items[1] = obj;
  return callback(LifecycleManager, items);
})();
const result = require("set").fileFinishedImporting("lib/LifecycleManager.tsx");

export default tmp2;
