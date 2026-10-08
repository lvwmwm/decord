// Module ID: 2001
// Function ID: 2002
// Name: LifecycleManager
// Dependencies: [2]

// Module 2001 (LifecycleManager)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/LifecycleManager.tsx");
class LifecycleManager {
  constructor() {
    return Object.assign({ isInitialized: false });
  }
  initialize() {
    const self = this;
    const items = [...arguments];
    if (!this.isInitialized) {
      self.isInitialized = true;
      const _initialize = self._initialize;
      const items1 = [];
      HermesBuiltin.arraySpread(items1, items, 0);
      HermesBuiltin.apply(_initialize, items1, self);
    }
  }
  terminate() {
    const self = this;
    if (this.isInitialized) {
      self.isInitialized = false;
      self._terminate();
    }
  }
}
const prototype = LifecycleManager.prototype;

export default LifecycleManager;
