// Module ID: 625
// Function ID: 7142
// Name: BatchedStoreListener
// Dependencies: [6, 7, 570, 2]

// Module 625 (BatchedStoreListener)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

const tmp2 = (() => {
  class BatchedStoreListener {
    constructor(arg0, arg1) {
      self = this;
      tmp = outer1_2(this, self);
      this.handleStoreChange = () => {
        const changeSentinel = BatchedStoreListener(outer2_1[2]).getChangeSentinel();
        if (self.storeVersionHandled !== changeSentinel) {
          self.changeCallback();
          self.storeVersionHandled = changeSentinel;
        }
      };
      this.stores = arg0;
      this.changeCallback = arg1;
      return;
    }
  }
  let obj = {
    key: "attach",
    value(arg0) {
      const self = this;
      let closure_1 = arg0;
      const stores = this.stores;
      const item = stores.forEach((addReactChangeListener) => {
        if (null == addReactChangeListener) {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const error = new Error("" + closure_1 + " tried to load a non-existent store. Either it isn't defined or there is a circular dependency. Loaded " + arg1 + " stores before error.");
          throw error;
        } else {
          const result = addReactChangeListener.addReactChangeListener(self.handleStoreChange);
        }
      });
    }
  };
  const items = [obj, ];
  obj = {
    key: "detach",
    value() {
      const self = this;
      const stores = this.stores;
      const item = stores.forEach((removeReactChangeListener) => removeReactChangeListener.removeReactChangeListener(self.handleStoreChange));
    }
  };
  items[1] = obj;
  return callback(BatchedStoreListener, items);
})();
let result = require("logger").fileFinishedImporting("../discord_common/js/packages/flux/BatchedStoreListener.tsx");

export const BatchedStoreListener = tmp2;
