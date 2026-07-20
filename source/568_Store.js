// Module ID: 568
// Function ID: 6873
// Name: Store
// Dependencies: []

// Module 568 (Store)
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = [];
let closure_7 = false;
const tmp3 = () => {
  class Store {
    constructor(arg0, arg1, arg2) {
      obj = arg1;
      self = this;
      Store = this;
      tmp = closure_4(this, Store);
      changeListeners = new Store(closure_2[2]).ChangeListeners();
      this._changeCallbacks = changeListeners;
      changeListeners1 = new Store(closure_2[2]).ChangeListeners();
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
          callback(closure_2[3]).markChanged(self);
          const obj = callback(closure_2[3]);
          let isPaused = callback(closure_2[3]).getIsPaused();
          if (isPaused) {
            isPaused = null != self._mustEmitChanges;
          }
          if (isPaused) {
            isPaused = self._mustEmitChanges(arg0);
          }
          if (isPaused) {
            callback(closure_2[3]).resume(false);
            const obj3 = callback(closure_2[3]);
          }
          const obj2 = callback(closure_2[3]);
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
      arr = closure_6.push(self);
      if (closure_7) {
        initializeIfNeededResult = self.initializeIfNeeded();
      }
      return;
    }
  }
  const arg1 = Store;
  let obj = {
    key: "registerActionHandlers",
    value(arg0, arg1) {
      const _dispatcher = this._dispatcher;
      _dispatcher.register(this.getName(), arg0, this.doEmitChanges, arg1, this._dispatchToken);
    }
  };
  const items = [obj, , , , , , , , ];
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
          callback(closure_2[4]).mark("\u{1F9A5}", `${self.getName()}.initialize()`, diff);
          const obj = callback(closure_2[4]);
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
      const Store = this;
      const items = [...arr];
      this.waitFor.apply(items);
      if (null != arg2) {
        let closure_2 = 0;
        function wrapper() {
          if (changeSentinel !== obj.getChangeSentinel()) {
            const changeSentinel = arg1(changeSentinel[3]).getChangeSentinel();
            if (false !== arg1()) {
              self.emitChange();
            }
            const obj2 = arg1(changeSentinel[3]);
          }
        }
        let closure_3 = wrapper;
        let num = 0;
        if (null != arg2) {
          num = arg2;
        }
        closure_3 = function debounce(arg0, wrapper) {
          const self = arg0;
          let closure_2 = null;
          return 0 === arg0 ? () => {
            clearImmediate(immediate);
            const immediate = setImmediate(arg1);
          } : () => {
            if (null == timeout) {
              const _setTimeout = setTimeout;
              const timeout = setTimeout(() => {
                callback();
                let closure_2 = null;
              }, arg0);
            }
          };
        }(num, wrapper);
        const item = arr.forEach((addChangeListener) => addChangeListener.addChangeListener(closure_3));
      } else {
        const item1 = arr.forEach((_syncWiths) => {
          _syncWiths = _syncWiths._syncWiths;
          _syncWiths.push({ func: arg1, store: self });
        });
      }
    }
  };
  items[5] = {
    key: "waitFor",
    value(arg0) {
      const Store = this;
      const items = [...arguments];
      const mapped = items.map((_dispatcher) => {
        let dispatchToken = null;
        callback(closure_2[5])(null != _dispatcher, "Store.waitFor(...) called with null Store at index " + arg1 + " for store " + self.getName());
        if (null != _dispatcher._dispatcher) {
          callback(closure_2[5])(_dispatcher._dispatcher === self._dispatcher, "Stores belong to two separate dispatchers.");
          dispatchToken = _dispatcher.getDispatchToken();
        }
        return dispatchToken;
      });
      const _dispatcher = this._dispatcher;
      const dispatchToken = this.getDispatchToken();
      _dispatcher.addDependencies(dispatchToken, mapped.filter((arg0) => null != arg0));
    }
  };
  items[6] = {
    key: "emitChange",
    value() {
      callback(closure_2[3]).markChanged(this);
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
        let closure_7 = true;
        const item = arr.forEach((initializeIfNeeded) => initializeIfNeeded.initializeIfNeeded());
        if (null != callback2) {
          callback2();
        }
      }
    },
    {
      key: "destroy",
      value() {
        closure_6.length = 0;
        callback(closure_2[3]).destroy();
      }
    },
    {
      key: "getAll",
      value() {
        return closure_6;
      }
    },
    {
      key: "removeAllConditionalListeners",
      value() {
        const item = arr.forEach((_changeCallbacks) => {
          _changeCallbacks._changeCallbacks.removeAllConditional();
        });
      }
    }
  ];
  return callback(Store, items, items1);
}();
tmp3.initialized = new Promise((arg0) => {
  const arg1 = arg0;
  function t() {
    arg0();
    let closure_3 = null;
  }
});
const promise = new Promise((arg0) => {
  const arg1 = arg0;
  function t() {
    arg0();
    let closure_3 = null;
  }
});
const result = arg1(dependencyMap[6]).fileFinishedImporting("../discord_common/js/packages/flux/Store.tsx");

export const Store = tmp3;
