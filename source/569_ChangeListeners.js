// Module ID: 569
// Function ID: 6904
// Name: ChangeListeners
// Dependencies: []

// Module 569 (ChangeListeners)
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
const tmp2 = () => {
  class ChangeListeners {
    constructor() {
      ChangeListeners = this;
      tmp = ChangeListeners(this, ChangeListeners);
      set = new Set();
      this.listeners = set;
      set1 = new Set();
      this.conditionalListeners = set1;
      this.add = (arg0) => {
        const listeners = self.listeners;
        listeners.add(arg0);
      };
      this.remove = (arg0) => {
        const listeners = self.listeners;
        listeners.delete(arg0);
        const conditionalListeners = self.conditionalListeners;
        conditionalListeners.delete(arg0);
      };
      this.addConditional = (arg0) => {
        let flag = arg1;
        const self = arg0;
        if (arg1 === undefined) {
          flag = true;
        }
        let conditionalCallback;
        if (!flag) {
          conditionalCallback = function conditionalCallback() {
            if (false === arg0()) {
              arg0.remove(conditionalCallback);
            }
          };
          self.add(conditionalCallback);
          const conditionalListeners = self.conditionalListeners;
          conditionalListeners.add(conditionalCallback);
        }
      };
      this.removeAllConditional = () => {
        let conditionalListeners = self.conditionalListeners;
        const item = conditionalListeners.forEach((arg0) => {
          const listeners = listeners.listeners;
          return listeners.delete(arg0);
        });
        conditionalListeners = self.conditionalListeners;
        conditionalListeners.clear();
      };
      return;
    }
  }
  let closure_0 = ChangeListeners;
  let obj = {
    key: "has",
    value(arg0) {
      const listeners = this.listeners;
      return listeners.has(arg0);
    }
  };
  const items = [obj, , ];
  obj = {
    key: "hasAny",
    value() {
      return this.listeners.size > 0;
    }
  };
  items[1] = obj;
  obj = {
    key: "invokeAll",
    value() {
      const listeners = this.listeners;
      const item = listeners.forEach((arg0) => arg0());
    }
  };
  items[2] = obj;
  return callback(ChangeListeners, items);
}();
const result = arg1(dependencyMap[2]).fileFinishedImporting("../discord_common/js/packages/flux/ChangeListeners.tsx");

export const ChangeListeners = tmp2;
