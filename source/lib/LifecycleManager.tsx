// Module ID: 4526
// Function ID: 39769
// Name: LifecycleManager
// Dependencies: [513, 511, 513]

// Module 4526 (LifecycleManager)
import closure_0 from "items";
import module_511 from "module_511";
import items from "items";

const result = items.fileFinishedImporting("lib/LifecycleManager.tsx");

export default () => {
  class LifecycleManager {
    constructor() {
      tmp = LifecycleManager(this, LifecycleManager);
      this.isInitialized = false;
      return;
    }
  }
  let closure_0 = LifecycleManager;
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
  const items = [obj, ];
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
}();
