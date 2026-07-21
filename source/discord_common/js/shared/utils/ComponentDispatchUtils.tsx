// Module ID: 1209
// Function ID: 13879
// Name: ComponentDispatcher
// Dependencies: []

// Module 1209 (ComponentDispatcher)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const tmp2 = () => {
  class ComponentDispatcher {
    constructor() {
      obj = arg0;
      self = this;
      if (arg0 === undefined) {
        obj = {};
      }
      tmp = closure_2(self, ComponentDispatcher);
      eventEmitter = new ComponentDispatcher(closure_1[2]).EventEmitter();
      self.emitter = eventEmitter;
      self._savedDispatches = {};
      obj = {};
      num = 100;
      merged = Object.assign(obj);
      self.options = obj;
      maxListeners = self.options.maxListeners;
      if (null != maxListeners) {
        num = maxListeners;
      }
      emitter = self.emitter;
      setMaxListenersResult = emitter.setMaxListeners(num);
      return;
    }
  }
  const arg1 = ComponentDispatcher;
  let obj = {
    key: "safeDispatch",
    value(arg0, arg1) {
      const self = this;
      const substr = [...arguments].slice();
      if (this.hasSubscribers(arg0)) {
        const dispatch = self.dispatch;
        const items = [arg0];
        HermesBuiltin.arraySpread(substr, 1);
        return HermesBuiltin.apply(items, self);
      } else {
        let items1 = self._savedDispatches[arg0];
        if (null == items1) {
          items1 = [];
        }
        self._savedDispatches[arg0] = items1;
        items1.push(substr[0]);
        return self;
      }
    }
  };
  const items = [obj, , , , , , , , , , , , ];
  obj = {
    key: "dispatch",
    value(arg0, arg1) {
      const self = this;
      const timestamp = Date.now();
      const emitter = this.emitter;
      emitter.emit(arg0, arg1);
      const enableDevtools = this.options.enableDevtools;
      let devtoolsReporter = enableDevtools;
      if (enableDevtools) {
        devtoolsReporter = self.options.devtoolsReporter;
      }
      if (devtoolsReporter) {
        const options = self.options;
        const _Date = Date;
        options.devtoolsReporter(arg0, arg1, Date.now() - timestamp);
      }
      return self;
    }
  };
  items[1] = obj;
  obj = {
    key: "dispatchToLastSubscribed",
    value(arg0, arg1) {
      const self = this;
      const timestamp = Date.now();
      const emitter = this.emitter;
      const listenersResult = emitter.listeners(arg0);
      if (listenersResult.length > 0) {
        arr2[arr2.length - 1](arg1);
      }
      const enableDevtools = self.options.enableDevtools;
      let devtoolsReporter = enableDevtools;
      if (enableDevtools) {
        devtoolsReporter = self.options.devtoolsReporter;
      }
      if (devtoolsReporter) {
        const options = self.options;
        const _Date = Date;
        options.devtoolsReporter(arg0, arg1, Date.now() - timestamp);
      }
      return self;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "hasSubscribers",
    value(arg0) {
      const emitter = this.emitter;
      return emitter.listenerCount(arg0) > 0;
    }
  };
  items[4] = {
    key: "_checkSavedDispatches",
    value(arg0) {
      const ComponentDispatcher = this;
      const arr = this._savedDispatches[arg0];
      if (null != arr) {
        const item = arr.forEach((arg0) => {
          self.dispatch(arg0, arg0);
        });
        tmp._savedDispatches[arg0] = undefined;
      }
    }
  };
  items[5] = {
    key: "subscribe",
    value(arg0, arg1) {
      const self = this;
      const emitter = this.emitter;
      if (listenersResult.indexOf(arg1) >= 0) {
        if (self.options.logger) {
          const logger = self.options.logger;
          logger.warn("ComponentDispatch.subscribe: Attempting to add a duplicate listener", arg0);
        }
      } else {
        const emitter2 = self.emitter;
        emitter2.on(arg0, arg1);
        const result = self._checkSavedDispatches(arg0);
      }
      return self;
    }
  };
  items[6] = {
    key: "subscribeOnce",
    value(arg0, arg1) {
      const emitter = this.emitter;
      emitter.once(arg0, arg1);
      const result = this._checkSavedDispatches(arg0);
      return this;
    }
  };
  items[7] = {
    key: "resubscribe",
    value(arg0, arg1) {
      const self = this;
      const emitter = this.emitter;
      if (listenersResult.includes(arg1)) {
        const emitter2 = self.emitter;
        emitter2.off(arg0, arg1);
        const emitter3 = self.emitter;
        emitter3.on(arg0, arg1);
      } else if (self.options.logger) {
        const logger = self.options.logger;
        logger.warn("ComponentDispatch.resubscribe: Resubscribe without existing subscription", arg0);
      }
      return self;
    }
  };
  items[8] = {
    key: "unsubscribe",
    value(arg0, arg1) {
      const emitter = this.emitter;
      emitter.removeListener(arg0, arg1);
      return this;
    }
  };
  items[9] = {
    key: "reset",
    value() {
      const emitter = this.emitter;
      emitter.removeAllListeners();
      return this;
    }
  };
  items[10] = {
    key: "dispatchKeyed",
    value(arg0, arg1, arg2) {
      const substr = [...arguments].slice();
      const items = ["" + arg0 + "_" + arg1, ...substr];
      return this.dispatch.apply(items);
    }
  };
  items[11] = {
    key: "subscribeKeyed",
    value(arg0, arg1, arg2) {
      return this.subscribe("" + arg0 + "_" + arg1, arg2);
    }
  };
  items[12] = {
    key: "unsubscribeKeyed",
    value(arg0, arg1, arg2) {
      return this.unsubscribe("" + arg0 + "_" + arg1, arg2);
    }
  };
  return callback(ComponentDispatcher, items);
}();
const result = arg1(dependencyMap[3]).fileFinishedImporting("../discord_common/js/shared/utils/ComponentDispatchUtils.tsx");

export const ComponentDispatcher = tmp2;
