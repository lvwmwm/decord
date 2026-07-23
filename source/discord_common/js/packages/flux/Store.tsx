// Module ID: 568
// Function ID: 6873
// Name: Store
// Dependencies: [6, 7, 569, 570, 20, 44, 2]

// Module 568 (Store)
import set from "set";
import _defineProperties from "_defineProperties";

const require = arg1;
let closure_6 = [];
let c7 = false;
const tmp3 = (() => {
  class Store {
    constructor(arg0, arg1, arg2) {
      obj = arg1;
      self = this;
      self = this;
      tmp = outer1_4(this, self);
      changeListeners = new Store(outer1_2[2]).ChangeListeners();
      this._changeCallbacks = changeListeners;
      changeListeners1 = new Store(outer1_2[2]).ChangeListeners();
      this._reactChangeCallbacks = changeListeners1;
      this._syncWiths = [];
      this._isInitialized = false;
      this.doEmitChanges = (arg0) => {
        let hasAnyResult = self._changeCallbacks.hasAny();
        if (!hasAnyResult) {
          hasAnyResult = self._reactChangeCallbacks.hasAny();
          const _reactChangeCallbacks = self._reactChangeCallbacks;
        }
        if (!hasAnyResult) {
          hasAnyResult = self._syncWiths.length > 0;
        }
        if (hasAnyResult) {
          outer2_1(outer2_2[3]).markChanged(self);
          const obj = outer2_1(outer2_2[3]);
          let isPaused = outer2_1(outer2_2[3]).getIsPaused();
          if (isPaused) {
            isPaused = null != self._mustEmitChanges;
          }
          if (isPaused) {
            isPaused = self._mustEmitChanges(arg0);
          }
          if (isPaused) {
            outer2_1(outer2_2[3]).resume(false);
            const obj3 = outer2_1(outer2_2[3]);
          }
          const obj2 = outer2_1(outer2_2[3]);
        }
      };
      this.addChangeListener = this._changeCallbacks.add;
      this.removeChangeListener = this._changeCallbacks.remove;
      this.addConditionalChangeListener = this._changeCallbacks.addConditional;
      this.removeAllConditionalChangeListeners = this._changeCallbacks.removeAllConditional;
      this.addReactChangeListener = this._reactChangeCallbacks.add;
      this.removeReactChangeListener = this._reactChangeCallbacks.remove;
      this._dispatcher = arg0;
      _dispatcher = this._dispatcher;
      this._dispatchToken = _dispatcher.createToken();
      if (null == arg1) {
        obj = {};
      }
      result = this.registerActionHandlers(obj, arg2);
      arr = outer1_6.push(self);
      if (outer1_7) {
        initializeIfNeededResult = self.initializeIfNeeded();
      }
      return;
    }
  }
  let obj = {
    key: "registerActionHandlers",
    value(arg0, arg1) {
      const _dispatcher = this._dispatcher;
      _dispatcher.register(this.getName(), arg0, this.doEmitChanges, arg1, this._dispatchToken);
    }
  };
  let items = [obj, , , , , , , , ];
  obj = {
    key: "getName",
    value() {
      let name = this.constructor.displayName;
      if (null == name) {
        name = this.constructor.name;
      }
      return name;
    }
  };
  items[1] = obj;
  obj = {
    key: "initializeIfNeeded",
    value() {
      const self = this;
      if (!this._isInitialized) {
        const _Date = Date;
        const timestamp = Date.now();
        self.initialize();
        self._isInitialized = true;
        const _Date2 = Date;
        const diff = Date.now() - timestamp;
        if (diff > 5) {
          outer1_1(outer1_2[4]).mark("\u{1F9A5}", `${self.getName()}.initialize()`, diff);
          const obj = outer1_1(outer1_2[4]);
        }
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "initialize",
    value() {

    }
  };
  items[4] = {
    key: "syncWith",
    value(arr) {
      const self = this;
      let closure_1 = arg1;
      const items = [...arr];
      this.waitFor.apply(items);
      if (null != arg2) {
        let c2 = 0;
        function wrapper() {
          if (changeSentinel !== obj.getChangeSentinel()) {
            changeSentinel = outer2_1(outer2_2[3]).getChangeSentinel();
            if (false !== callback()) {
              self.emitChange();
            }
            const obj2 = outer2_1(outer2_2[3]);
          }
        }
        let closure_3 = wrapper;
        let num = 0;
        if (null != arg2) {
          num = arg2;
        }
        closure_3 = (function debounce(arg0, wrapper) {
          let closure_0 = arg0;
          let closure_1 = wrapper;
          let c2 = null;
          return 0 === arg0 ? (() => {
            clearImmediate(immediate);
            immediate = setImmediate(closure_1);
          }) : (() => {
            if (null == timeout) {
              const _setTimeout = setTimeout;
              timeout = setTimeout(() => {
                outer1_1();
                let closure_2 = null;
              }, closure_0);
            }
          });
        })(num, wrapper);
        const item = arr.forEach((addChangeListener) => addChangeListener.addChangeListener(closure_3));
      } else {
        const item1 = arr.forEach((_syncWiths) => {
          _syncWiths = _syncWiths._syncWiths;
          _syncWiths.push({ func: closure_1, store: self });
        });
      }
    }
  };
  items[5] = {
    key: "waitFor",
    value(arg0) {
      const self = this;
      const items = [...arguments];
      const mapped = items.map((_dispatcher) => {
        let dispatchToken = null;
        outer2_1(outer2_2[5])(null != _dispatcher, "Store.waitFor(...) called with null Store at index " + arg1 + " for store " + self.getName());
        if (null != _dispatcher._dispatcher) {
          outer2_1(outer2_2[5])(_dispatcher._dispatcher === self._dispatcher, "Stores belong to two separate dispatchers.");
          dispatchToken = _dispatcher.getDispatchToken();
        }
        return dispatchToken;
      });
      const _dispatcher = this._dispatcher;
      let dispatchToken = this.getDispatchToken();
      _dispatcher.addDependencies(dispatchToken, mapped.filter((arg0) => null != arg0));
    }
  };
  items[6] = {
    key: "emitChange",
    value() {
      outer1_1(outer1_2[3]).markChanged(this);
    }
  };
  items[7] = {
    key: "getDispatchToken",
    value() {
      return this._dispatchToken;
    }
  };
  items[8] = {
    key: "mustEmitChanges",
    value() {
      let fn = arg0;
      if (arg0 === undefined) {
        fn = function t() {
          return true;
        };
      }
      this._mustEmitChanges = fn;
    }
  };
  const items1 = [
    {
      key: "initialize",
      value() {
        const outer1_7 = true;
        const item = outer1_6.forEach((initializeIfNeeded) => initializeIfNeeded.initializeIfNeeded());
        if (null != outer1_3) {
          outer1_3();
        }
      }
    },
    {
      key: "destroy",
      value() {
        outer1_6.length = 0;
        outer1_1(outer1_2[3]).destroy();
      }
    },
    {
      key: "getAll",
      value() {
        return outer1_6;
      }
    },
    {
      key: "removeAllConditionalListeners",
      value() {
        const item = outer1_6.forEach((_changeCallbacks) => {
          _changeCallbacks._changeCallbacks.removeAllConditional();
        });
      }
    }
  ];
  return callback(Store, items, items1);
})();
tmp3.initialized = new Promise((arg0) => {
  let closure_0 = arg0;
  function t() {
    callback();
    const t = null;
  }
});
const promise = new Promise((arg0) => {
  let closure_0 = arg0;
  function t() {
    callback();
    const t = null;
  }
});
let result = require("ChangeListeners").fileFinishedImporting("../discord_common/js/packages/flux/Store.tsx");

export const Store = tmp3;
