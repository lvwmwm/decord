// Module ID: 627
// Function ID: 7178
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 627 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function setDisplayName(arg0, displayName) {
  arg0.displayName = displayName;
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
const set = new Set([]);
const logger = new arg1(dependencyMap[2]).Logger("Flux");
let closure_8 = () => {
  class ActionHandlersGraph {
    constructor() {
      tmp = closure_4(this, ActionHandlersGraph);
      this._orderedActionHandlers = {};
      this._orderedCallbackTokens = null;
      this._lastID = 1;
      depGraph = new ActionHandlersGraph(closure_3[9]).DepGraph();
      this._dependencyGraph = depGraph;
      return;
    }
  }
  const arg1 = ActionHandlersGraph;
  let obj = {
    key: "getOrderedActionHandlers",
    value: function getOrderedActionHandlers(type) {
      const self = this;
      let result = this._orderedActionHandlers[type.type];
      if (null == result) {
        result = self._computeOrderedActionHandlers(type.type);
      }
      return result;
    }
  };
  const items = [obj, , , , , , , , , ];
  obj = {
    key: "register",
    value: function register(name, obj, storeDidChange, band, token) {
      const self = this;
      if (token === undefined) {
        token = self.createToken();
      }
      obj = undefined;
      let closure_3;
      let isIntegerResult = band >= 0;
      if (isIntegerResult) {
        const _Number = Number;
        isIntegerResult = Number.isInteger(band);
      }
      obj(closure_3[5])(isIntegerResult, "band must be a non-negative integer.");
      obj = {};
      for (const key10023 in arg1) {
        let tmp10 = key10023;
        closure_3 = key10023;
        let tmp6Result = tmp6();
      }
      const _dependencyGraph = self._dependencyGraph;
      obj = { name, band, actionHandler: obj, storeDidChange };
      _dependencyGraph.addNode(token, obj);
      self._addToBand(token, band);
      self._invalidateCaches();
      return token;
    }
  };
  items[1] = obj;
  obj = {
    key: "createToken",
    value: function createToken() {
      const tmp = +this._lastID;
      this._lastID = tmp + 1;
      return "ID_" + tmp;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "addDependencies",
    value: function addDependencies(arg0, arg1) {
      let done;
      const self = this;
      const result = this._validateDependencies(arg0, arg1);
      const tmp2 = callback2(arg1);
      let iter = tmp2();
      if (!iter.done) {
        do {
          let _dependencyGraph = self._dependencyGraph;
          let addDependencyResult = _dependencyGraph.addDependency(arg0, iter.value);
          let iter2 = tmp2();
          iter = iter2;
          done = iter2.done;
        } while (!done);
      }
      self._invalidateCaches();
    }
  };
  items[4] = {
    key: "_validateDependencies",
    value: function _validateDependencies(arg0, arg1) {

    }
  };
  items[5] = {
    key: "_invalidateCaches",
    value: function _invalidateCaches() {
      this._orderedCallbackTokens = null;
      this._orderedActionHandlers = {};
    }
  };
  items[6] = {
    key: "_bandToken",
    value: function _bandToken(band) {
      const self = this;
      const combined = "band." + band;
      const _dependencyGraph = this._dependencyGraph;
      if (!_dependencyGraph.hasNode(combined)) {
        const _dependencyGraph2 = self._dependencyGraph;
        const obj = {
          name: combined,
          band,
          actionHandler: {},
          storeDidChange(type) {

            }
        };
        _dependencyGraph2.addNode(combined, obj);
        if (band > 0) {
          const _dependencyGraph3 = self._dependencyGraph;
          _dependencyGraph3.addDependency(combined, self._bandToken(band - 1));
        }
      }
      return combined;
    }
  };
  items[7] = {
    key: "_addToBand",
    value: function _addToBand(token, band) {
      const self = this;
      const _dependencyGraph = this._dependencyGraph;
      _dependencyGraph.addDependency(this._bandToken(band), token);
      if (band > 0) {
        const _dependencyGraph2 = self._dependencyGraph;
        _dependencyGraph2.addDependency(token, self._bandToken(band - 1));
      }
    }
  };
  items[8] = {
    key: "_computeOrderedActionHandlers",
    value: function _computeOrderedActionHandlers(type) {
      const self = this;
      let prop = this._orderedCallbackTokens;
      if (null == prop) {
        prop = self._computeOrderedCallbackTokens();
      }
      const items = [];
      for (let num = 0; num < length; num = num + 1) {
        let _dependencyGraph = self._dependencyGraph;
        let nodeData = _dependencyGraph.getNodeData(prop[num]);
        let tmp4 = nodeData.actionHandler[type];
        if (null != tmp4) {
          let obj = { name: tmp2, actionHandler: tmp4, storeDidChange: tmp3 };
          let arr = items.push(obj);
        }
      }
      self._orderedActionHandlers[type] = items;
      return items;
    }
  };
  items[9] = {
    key: "_computeOrderedCallbackTokens",
    value: function _computeOrderedCallbackTokens() {
      const _dependencyGraph = this._dependencyGraph;
      const overallOrderResult = _dependencyGraph.overallOrder();
      this._orderedCallbackTokens = overallOrderResult;
      return overallOrderResult;
    }
  };
  return callback(ActionHandlersGraph, items);
}();
const tmp4 = () => {
  class Dispatcher {
    constructor() {
      num = arg0;
      actionLogger = arg1;
      self = this;
      if (arg0 === undefined) {
        num = 0;
      }
      tmp2 = closure_4(self, Dispatcher);
      self._interceptors = [];
      self._subscriptions = {};
      self._waitQueue = [];
      self._processingWaitQueue = false;
      self._currentDispatchActionType = null;
      tmp3 = new closure_8();
      self._actionHandlers = tmp3;
      self._sentryUtils = undefined;
      self.functionCache = {};
      self._defaultBand = num;
      self._sentryUtils = arg2;
      if (null == actionLogger) {
        tmp4 = Dispatcher;
        tmp5 = closure_3;
        num2 = 3;
        ActionLogger = Dispatcher(closure_3[3]).ActionLogger;
        prototype = ActionLogger.prototype;
        tmp6 = new.target;
        tmp7 = new.target;
        actionLogger = new ActionLogger();
      }
      self.actionLogger = actionLogger;
      actionLogger = self.actionLogger;
      onResult = actionLogger.on("trace", (arg0, arg1, arg2) => {
        let isTracing = callback(closure_3[4]).isTracing;
        if (isTracing) {
          isTracing = arg2 >= 10;
        }
        if (isTracing) {
          callback(closure_3[4]).mark("\u{1F9A5}", arg1, arg2);
          const obj = callback(closure_3[4]);
        }
      });
      return;
    }
  }
  const arg1 = Dispatcher;
  let obj = {
    key: "isDispatching",
    value() {
      return null != this._currentDispatchActionType;
    }
  };
  const items = [obj, , , , , , , , , , , , , ];
  obj = {
    key: "dispatch",
    value(arg0) {
      const Dispatcher = this;
      return new Promise((arg0, arg1) => {
        const self = arg0;
        arg0 = arg1;
        const _waitQueue = self._waitQueue;
        _waitQueue.push(() => {
          if (null == arg0.functionCache[closure_1.type]) {
            arg0.functionCache[arg1.type] = (arg0) => closure_0._dispatchWithDevtools(arg0);
            callback(arg0.functionCache[closure_1.type], `dispatch_${closure_1.type}`);
          }
          const functionCache = arg0.functionCache;
          functionCache[closure_1.type](arg1);
          arg0();
        });
        self.flushWaitQueue();
      });
    }
  };
  items[1] = obj;
  obj = {
    key: "dispatchForStoreTest",
    value(type) {
      let iter2;
      callback(closure_3[5])(false, "dispatchForTest cannot be called in: production");
      const tmp2 = callback4(this._actionHandlers.getOrderedActionHandlers(type));
      let iter = tmp2();
      if (!iter.done) {
        do {
          let value = iter.value;
          let tmp3 = value.name === arg1;
          if (tmp3) {
            tmp3 = false !== value.actionHandler(type);
          }
          if (tmp3) {
            let storeDidChangeResult = value.storeDidChange(type);
          }
          iter2 = tmp2();
          iter = iter2;
        } while (!iter2.done);
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "flushWaitQueue",
    value() {
      const self = this;
      if (!this._processingWaitQueue) {
        self._processingWaitQueue = true;
        callback(closure_3[6]).isDispatching = true;
        let num3 = 0;
        if (self._waitQueue.length > 0) {
          const sum = num3 + 1;
          num3 = sum;
          while (sum <= 100) {
            if (self._waitQueue.length > 0) {
              do {
                let _waitQueue = self._waitQueue;
                let tmp5 = _waitQueue.shift()();
                let length = self._waitQueue.length;
              } while (length > 0);
            }
            let tmp6 = callback;
            let tmp7 = closure_3;
            let obj = callback(closure_3[6]);
            let emitResult = obj.emit();
          }
          const serializeResult = callback2(closure_3[7]).serialize();
          closure_7.error("LastFewActions", serializeResult);
          const _sentryUtils = self._sentryUtils;
          if (null != _sentryUtils) {
            obj = { message: "Dispatcher: Dispatch loop detected" };
            obj = { lastFewActions: serializeResult };
            obj.data = obj;
            _sentryUtils.addBreadcrumb(obj);
          }
          const _Error = Error;
          throw Error("Dispatch loop detected, aborting");
        }
        self._processingWaitQueue = false;
        callback(closure_3[6]).isDispatching = false;
      }
    }
  };
  items[4] = {
    key: "_dispatchWithDevtools",
    value(arg0) {
      this._dispatchWithLogging(arg0);
    }
  };
  items[5] = {
    key: "_dispatchWithLogging",
    value(type) {
      const Dispatcher = this;
      type(closure_3[5])(null == this._currentDispatchActionType, "Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch. Action: " + type.type + " Already dispatching: " + this._currentDispatchActionType);
      type(closure_3[5])(type.type, "Dispatch.dispatch(...) called without an action type");
      if (set.has(type.type)) {
        const _HermesInternal = HermesInternal;
        closure_7.log("Dispatching " + tmp.type);
      }
      const tmp2 = type(closure_3[5]);
      const tmp3 = null == this._currentDispatchActionType;
      Dispatcher(closure_3[8]).mark(type.type);
      const obj = Dispatcher(closure_3[8]);
      callback2(closure_3[7]).add(type.type);
      const actionLogger = this.actionLogger;
      const logResult1 = actionLogger.log(type, (arg0) => {
        self._currentDispatchActionType = arg0.type;
        self._dispatch(arg0, arg0);
        self._currentDispatchActionType = null;
      });
      if (logResult1.totalTime > 100) {
        const _HermesInternal2 = HermesInternal;
        closure_7.verbose("Slow dispatch on " + tmp.type + ": " + logResult1.totalTime + "ms");
      }
      const obj2 = callback2(closure_3[7]);
      Dispatcher(closure_3[8]).measure("DISPATCH[" + type.type + "]", type.type);
    }
  };
  items[6] = {
    key: "_dispatch",
    value(type) {
      const self = this;
      const Dispatcher = type;
      const tmp = callback4(this._interceptors);
      let iter = tmp();
      if (!iter.done) {
        while (!iter.value(type)) {
          let iter2 = tmp();
          iter = iter2;
        }
        return false;
      }
      const orderedActionHandlers = self._actionHandlers.getOrderedActionHandlers(type);
      let num = 0;
      let closure_3 = 0;
      if (0 < orderedActionHandlers.length) {
        do {
          let tmp2 = function _loop() {
            const arg0 = obj.actionHandler;
            if (false !== arg1(orderedActionHandlers[closure_3].name, () => actionHandler(actionHandler))) {
              obj.storeDidChange(arg0);
            }
          }();
          num = num + 1;
          closure_3 = num;
        } while (num < length);
      }
      const tmp3 = self._subscriptions[type.type];
      if (null != tmp3) {
        arg1("__subscriptions", () => {
          const item = tmp3.forEach((arg0) => arg0(closure_0));
        });
      }
    }
  };
  items[7] = {
    key: "addInterceptor",
    value: function addInterceptor(handleAction) {
      const _interceptors = this._interceptors;
      _interceptors.push(handleAction);
    }
  };
  items[8] = {
    key: "wait",
    value: function wait(arg0) {
      const _waitQueue = this._waitQueue;
      _waitQueue.push(arg0);
      this.flushWaitQueue();
    }
  };
  items[9] = {
    key: "subscribe",
    value: function subscribe(arg0, arg1) {
      let obj = this._subscriptions[arg0];
      if (null == obj) {
        const _Set = Set;
        const set = new Set();
        this._subscriptions[arg0] = set;
        obj = set;
      }
      obj.add(arg1);
    }
  };
  items[10] = {
    key: "unsubscribe",
    value: function unsubscribe(arg0, arg1) {
      const obj = this._subscriptions[arg0];
      if (null != obj) {
        obj.delete(arg1);
        if (0 === obj.size) {
          const _subscriptions = tmp._subscriptions;
          delete r0[r1];
        }
      }
    }
  };
  items[11] = {
    key: "register",
    value: function register(arg0, arg1, arg2, arg3, arg4) {
      let _defaultBand = arg3;
      if (null == arg3) {
        _defaultBand = this._defaultBand;
      }
      return this._actionHandlers.register(arg0, arg1, arg2, _defaultBand, arg4);
    }
  };
  items[12] = {
    key: "createToken",
    value: function createToken() {
      return this._actionHandlers.createToken();
    }
  };
  items[13] = {
    key: "addDependencies",
    value: function addDependencies(arg0, arg1) {
      this._actionHandlers.addDependencies(arg0, arg1);
    }
  };
  return callback(Dispatcher, items);
}();
const result = arg1(dependencyMap[10]).fileFinishedImporting("../discord_common/js/packages/flux/Dispatcher.tsx");

export const Dispatcher = tmp4;
