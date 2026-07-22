// Module ID: 570
// Function ID: 6917
// Name: logger
// Dependencies: [0, 4294967295, 4294967295, 4294967295, 0]

// Module 570 (logger)
import __exportStarResult1 from "__exportStarResult1";

let closure_3 = importDefault(dependencyMap[1]);
const logger = new arg1(dependencyMap[2]).Logger("Flux");
function batchEmitChanges(arg0) {
  return arg0();
}
let tmp3 = () => {
  class Emitter {
    constructor() {
      tmp = __exportStarResult1(this, Emitter);
      set = new Set();
      this.changedStores = set;
      set1 = new Set();
      this.reactChangedStores = set1;
      this.changeSentinel = 0;
      this.isBatchEmitting = false;
      this.isDispatching = false;
      this.isPaused = false;
      this.pauseTimer = null;
      return;
    }
  }
  const importAll = Emitter;
  let obj = {
    key: "destroy",
    value() {
      const changedStores = this.changedStores;
      changedStores.clear();
      const reactChangedStores = this.reactChangedStores;
      reactChangedStores.clear();
      function batchEmitChanges(arg0) {
        return arg0();
      }
    }
  };
  const items = [obj, , , , , , , , , , ];
  obj = {
    key: "injectBatchEmitChanges",
    value(arg0) {

    }
  };
  items[1] = obj;
  obj = {
    key: "pause",
    value() {
      let tmp = arg0;
      const self = this;
      const Emitter = this;
      if (arg0 === undefined) {
        tmp = null;
      }
      self.isPaused = true;
      if (null !== self.pauseTimer) {
        const _clearTimeout = clearTimeout;
        clearTimeout(self.pauseTimer);
      }
      if (null !== tmp) {
        const _setTimeout = setTimeout;
        self.pauseTimer = setTimeout(() => {
          self.pauseTimer = null;
          self.resume();
        }, tmp);
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "resume",
    value() {
      let flag = arg0;
      const self = this;
      const Emitter = this;
      if (arg0 === undefined) {
        flag = true;
      }
      clearTimeout(self.pauseTimer);
      self.pauseTimer = null;
      if (self.isPaused) {
        self.isPaused = false;
        if (flag) {
          flag = self.changedStores.size > 0;
        }
        if (flag) {
          const _setImmediate = setImmediate;
          setImmediate(() => self.emit());
        }
      }
    }
  };
  items[4] = {
    key: "batched",
    value(arg0) {
      const self = this;
      if (this.isPaused) {
        return arg0();
      } else {
        self.isPaused = true;
        self.resume(false);
        self.emit();
        return arg0();
      }
    }
  };
  items[5] = {
    key: "emit",
    value() {
      const Emitter = this;
      if (!tmp) {
        callback2(() => {
          self.isBatchEmitting = true;
          self.changeSentinel = self.changeSentinel + 1;
          let num = 0;
          const set = new Set();
          if (self.changedStores.size > 0) {
            const sum = num + 1;
            num = sum;
            while (sum <= 100) {
              let tmp18 = self;
              let tmp19 = set;
              let tmp20 = set1;
              let emitNonReactOnceResult = self.emitNonReactOnce(set, tmp3);
            }
            closure_4.error("LastFewActions", self(closure_1[3]).serialize());
            const _Error2 = Error;
            throw Error("change emit loop detected, aborting");
          }
          if (self.reactChangedStores.size > 0) {
            const sum1 = num + 1;
            num = sum1;
            while (sum1 <= 100) {
              let tmp8 = self;
              let emitReactOnceResult = self.emitReactOnce();
            }
            closure_4.error("LastFewActions", self(closure_1[3]).serialize());
            const _Error = Error;
            throw Error("react change emit loop detected, aborting");
          }
          self.isBatchEmitting = false;
        });
      }
    }
  };
  items[6] = {
    key: "getChangeSentinel",
    value() {
      return this.changeSentinel;
    }
  };
  items[7] = {
    key: "getIsPaused",
    value() {
      return this.isPaused;
    }
  };
  items[8] = {
    key: "markChanged",
    value(_changeCallbacks) {
      const self = this;
      let hasAnyResult = _changeCallbacks._changeCallbacks.hasAny();
      if (!hasAnyResult) {
        hasAnyResult = _changeCallbacks._syncWiths.length > 0;
      }
      if (hasAnyResult) {
        const changedStores = self.changedStores;
        changedStores.add(_changeCallbacks);
      }
      if (_reactChangeCallbacks.hasAny()) {
        const reactChangedStores = self.reactChangedStores;
        reactChangedStores.add(_changeCallbacks);
      }
      if (!tmp4) {
        self.emit();
      }
    }
  };
  items[9] = {
    key: "emitNonReactOnce",
    value(arg0, arg1) {
      const Emitter = this;
      const timestamp = Date.now();
      const changedStores = this.changedStores;
      this.changedStores = new Set();
      const item = changedStores.forEach((_changeCallbacks) => {
        arg1.add(_changeCallbacks);
        _changeCallbacks._changeCallbacks.invokeAll();
        const changedStores = self.changedStores;
        changedStores.delete(_changeCallbacks);
      });
      const item1 = changedStores.forEach((_syncWiths) => {
        _syncWiths = _syncWiths._syncWiths;
        const item = _syncWiths.forEach((arg0) => {
          let func;
          let store;
          ({ func, store } = arg0);
          if (!set.has(func)) {
            set.add(func);
            if (false !== func()) {
              if (!set2.has(store)) {
                set2.add(store);
                closure_0.markChanged(store);
              }
            }
          }
        });
      });
      const timestamp1 = Date.now();
      if (timestamp1 - timestamp > 100) {
        const _HermesInternal = HermesInternal;
        const combined = "Slow batch emitChanges took " + timestamp1 - timestamp + "ms recentActions:";
        closure_4.verbose(combined, Emitter(arg0[3]).serialize());
        const obj = Emitter(arg0[3]);
      }
    }
  };
  items[10] = {
    key: "emitReactOnce",
    value() {
      const Emitter = this;
      const timestamp = Date.now();
      const reactChangedStores = this.reactChangedStores;
      this.reactChangedStores = new Set();
      const item = reactChangedStores.forEach((_reactChangeCallbacks) => {
        _reactChangeCallbacks._reactChangeCallbacks.invokeAll();
        const reactChangedStores = self.reactChangedStores;
        reactChangedStores.delete(_reactChangeCallbacks);
      });
      const timestamp1 = Date.now();
      if (timestamp1 - timestamp > 100) {
        const _HermesInternal = HermesInternal;
        const combined = "Slow batch emitReactChanges took " + timestamp1 - timestamp + "ms recentActions:";
        closure_4.verbose(combined, Emitter(closure_1[3]).serialize());
        const obj = Emitter(closure_1[3]);
      }
    }
  };
  return callback(Emitter, items);
}();
tmp3 = new tmp3();
const result = require("__exportStarResult1").fileFinishedImporting("../discord_common/js/packages/flux/Emitter.tsx");

export default tmp3;
