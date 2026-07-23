// Module ID: 570
// Function ID: 6917
// Name: logger
// Dependencies: [6, 7, 4, 571, 2]

// Module 570 (logger)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

const logger = new require("set").Logger("Flux");
function batchEmitChanges(arg0) {
  return arg0();
}
let tmp3 = (() => {
  class Emitter {
    constructor() {
      tmp = outer1_2(this, Emitter);
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
  let obj = {
    key: "destroy",
    value() {
      const changedStores = this.changedStores;
      changedStores.clear();
      const reactChangedStores = this.reactChangedStores;
      reactChangedStores.clear();
      const outer1_5 = function batchEmitChanges(arg0) {
        return arg0();
      };
    }
  };
  const items = [obj, , , , , , , , , , ];
  obj = {
    key: "injectBatchEmitChanges",
    value(arg0) {
      const outer1_5 = arg0;
    }
  };
  items[1] = obj;
  obj = {
    key: "pause",
    value() {
      let tmp = arg0;
      let self = this;
      self = this;
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
      let self = this;
      self = this;
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
      const self = this;
      if (!tmp) {
        outer1_5(() => {
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
            outer2_4.error("LastFewActions", Emitter(outer2_1[3]).serialize());
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
            outer2_4.error("LastFewActions", Emitter(outer2_1[3]).serialize());
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
      const self = this;
      let closure_1 = arg0;
      let _classCallCheck = arg1;
      const timestamp = Date.now();
      let changedStores = this.changedStores;
      this.changedStores = new Set();
      let item = changedStores.forEach((_changeCallbacks) => {
        set.add(_changeCallbacks);
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
          if (!outer1_1.has(func)) {
            outer1_1.add(func);
            if (false !== func()) {
              if (!outer1_2.has(store)) {
                outer1_2.add(store);
                outer1_0.markChanged(store);
              }
            }
          }
        });
      });
      const timestamp1 = Date.now();
      if (timestamp1 - timestamp > 100) {
        const _HermesInternal = HermesInternal;
        const combined = "Slow batch emitChanges took " + timestamp1 - timestamp + "ms recentActions:";
        outer1_4.verbose(combined, Emitter(outer1_1[3]).serialize());
        const obj = Emitter(outer1_1[3]);
      }
    }
  };
  items[10] = {
    key: "emitReactOnce",
    value() {
      const self = this;
      const timestamp = Date.now();
      let reactChangedStores = this.reactChangedStores;
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
        outer1_4.verbose(combined, Emitter(outer1_1[3]).serialize());
        const obj = Emitter(outer1_1[3]);
      }
    }
  };
  return callback(Emitter, items);
})();
tmp3 = new tmp3();
const result = require("log").fileFinishedImporting("../discord_common/js/packages/flux/Emitter.tsx");

export default tmp3;
