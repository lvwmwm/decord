// Module ID: 625
// Function ID: 7142
// Name: BatchedStoreListener
// Dependencies: []

// Module 625 (BatchedStoreListener)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const tmp2 = () => {
  class BatchedStoreListener {
    constructor(arg0, arg1) {
      BatchedStoreListener = this;
      tmp = closure_2(this, BatchedStoreListener);
      this.handleStoreChange = () => {
        const changeSentinel = self(closure_1[2]).getChangeSentinel();
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
  const importDefault = BatchedStoreListener;
  let obj = {
    key: "attach",
    value(arg0) {
      const BatchedStoreListener = this;
      const stores = this.stores;
      const item = stores.forEach((addReactChangeListener) => {
        if (null == addReactChangeListener) {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const error = new Error("" + addReactChangeListener + " tried to load a non-existent store. Either it isn't defined or there is a circular dependency. Loaded " + arg1 + " stores before error.");
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
      const BatchedStoreListener = this;
      const stores = this.stores;
      const item = stores.forEach((removeReactChangeListener) => removeReactChangeListener.removeReactChangeListener(self.handleStoreChange));
    }
  };
  items[1] = obj;
  return callback(BatchedStoreListener, items);
}();
const result = arg1(dependencyMap[3]).fileFinishedImporting("../discord_common/js/packages/flux/BatchedStoreListener.tsx");

export const BatchedStoreListener = tmp2;
