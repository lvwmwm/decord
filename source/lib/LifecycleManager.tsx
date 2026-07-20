// Module ID: 4522
// Function ID: 39705
// Name: LifecycleManager
// Dependencies: []

// Module 4522 (LifecycleManager)
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
const tmp2 = () => {
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
const result = arg1(dependencyMap[2]).fileFinishedImporting("lib/LifecycleManager.tsx");

export default tmp2;
