// Module ID: 5078
// Function ID: 44185
// Name: AutomaticLifecycleManager
// Dependencies: [6, 7, 686, 2]

// Module 5078 (AutomaticLifecycleManager)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

const tmp2 = (() => {
  class AutomaticLifecycleManager {
    constructor() {
      tmp = outer1_2(this, AutomaticLifecycleManager);
      this.initializedCount = 0;
      this.actions = {};
      map = new Map();
      this.stores = map;
      return;
    }
  }
  let obj = {
    key: "initialize",
    value() {
      const self = this;
      this.initializedCount = this.initializedCount + 1;
      if (this.initializedCount <= 1) {
        self._initialize();
        const _Object = Object;
        const entries = Object.entries(self.actions);
        const item = entries.forEach((arg0) => {
          let tmp;
          let tmp2;
          [tmp, tmp2] = arg0;
          let callback = tmp2;
          if ("function" !== typeof tmp2) {
            callback = tmp2.callback;
          }
          const subscription = AutomaticLifecycleManager(outer2_1[2]).subscribe(tmp, callback);
        });
        const stores = self.stores;
        const item1 = stores.forEach((handleStoreChange, addChangeListener) => {
          addChangeListener.addChangeListener(handleStoreChange);
          handleStoreChange();
        });
      }
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "terminate",
    value(arg0) {
      const self = this;
      if (this.initializedCount > 0) {
        if (arg0) {
          self.initializedCount = 0;
        } else {
          self.initializedCount = self.initializedCount - 1;
        }
        if (0 === self.initializedCount) {
          self._terminate();
          const _Object = Object;
          const entries = Object.entries(self.actions);
          const item = entries.forEach((arg0) => {
            let tmp;
            let tmp2;
            [tmp, tmp2] = arg0;
            let callback = tmp2;
            if ("function" !== typeof tmp2) {
              callback = tmp2.callback;
            }
            AutomaticLifecycleManager(outer2_1[2]).unsubscribe(tmp, callback);
          });
          const stores = self.stores;
          const item1 = stores.forEach((arg0, removeChangeListener) => {
            removeChangeListener.removeChangeListener(arg0);
          });
        }
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "_initialize",
    value() {

    }
  };
  items[2] = obj;
  items[3] = {
    key: "_terminate",
    value() {

    }
  };
  return callback(AutomaticLifecycleManager, items);
})();
const result = require("dispatcher").fileFinishedImporting("lib/AutomaticLifecycleManager.tsx");

export default tmp2;
