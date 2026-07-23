// Module ID: 627
// Function ID: 7178
// Name: _createForOfIteratorHelperLoose
// Dependencies: [6, 7, 4, 628, 20, 44, 570, 571, 632, 633, 2]

// Module 627 (_createForOfIteratorHelperLoose)
import logger from "logger";
import add from "add";
import set from "log";

const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
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
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
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
let set = new Set(["APP_STATE_UPDATE", "CLEAR_CACHES", "CONNECTION_CLOSED", "CONNECTION_OPEN", "CONNECTION_RESUMED", "LOGIN_SUCCESS", "LOGIN", "LOGOUT", "MESSAGE_SEND_FAILED", "PUSH_NOTIFICATION_CLICK", "RESET_SOCKET", "SESSION_START", "UPLOAD_FAIL", "WRITE_CACHES"]);
const logger = new require("AppStartPerformance").Logger("Flux");
let closure_8 = (() => {
  class ActionHandlersGraph {
    constructor() {
      tmp = outer1_4(this, ActionHandlersGraph);
      this._orderedActionHandlers = {};
      this._orderedCallbackTokens = null;
      this._lastID = 1;
      depGraph = new ActionHandlersGraph(outer1_3[9]).DepGraph();
      this._dependencyGraph = depGraph;
      return;
    }
  }
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
  let items = [obj, , , , , , , , , ];
  obj = {
    key: "register",
    value: function register(name, obj, storeDidChange, band, token) {
      const self = this;
      let closure_0 = name;
      let closure_1 = obj;
      if (token === undefined) {
        token = self.createToken();
      }
      obj = undefined;
      let c3;
      let isIntegerResult = band >= 0;
      if (isIntegerResult) {
        const _Number = Number;
        isIntegerResult = Number.isInteger(band);
      }
      outer1_1(outer1_3[5])(isIntegerResult, "band must be a non-negative integer.");
      obj = {};
      for (const key10023 in arg1) {
        let tmp10 = key10023;
        c3 = key10023;
        let tmp6Result = tmp6();
        continue;
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
      this._lastID = +this._lastID + 1;
      return "ID_" + +this._lastID;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "addDependencies",
    value: function addDependencies(arg0, arg1) {
      let done;
      const self = this;
      const result = this._validateDependencies(arg0, arg1);
      const tmp2 = outer1_9(arg1);
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
          storeDidChange(actionHandler) {

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
      const self = this;
      const _dependencyGraph = this._dependencyGraph;
      const overallOrderResult = _dependencyGraph.overallOrder();
      this._orderedCallbackTokens = overallOrderResult;
      return overallOrderResult;
    }
  };
  return callback(ActionHandlersGraph, items);
})();
let result = set.fileFinishedImporting("../discord_common/js/packages/flux/Dispatcher.tsx");

export const Dispatcher = (() => {
  class Dispatcher {
    constructor() {
      num = arg0;
      actionLogger = arg1;
      self = this;
      if (arg0 === undefined) {
        num = 0;
      }
      tmp2 = outer1_4(self, Dispatcher);
      self._interceptors = [];
      self._subscriptions = {};
      self._waitQueue = [];
      self._processingWaitQueue = false;
      self._currentDispatchActionType = null;
      tmp3 = new outer1_8();
      self._actionHandlers = tmp3;
      self._sentryUtils = undefined;
      self.functionCache = {};
      self._defaultBand = num;
      self._sentryUtils = arg2;
      if (null == actionLogger) {
        tmp4 = Dispatcher;
        tmp5 = outer1_3;
        num2 = 3;
        ActionLogger = Dispatcher(outer1_3[3]).ActionLogger;
        prototype = ActionLogger.prototype;
        tmp6 = new.target;
        tmp7 = new.target;
        actionLogger = new ActionLogger();
      }
      self.actionLogger = actionLogger;
      actionLogger = self.actionLogger;
      onResult = actionLogger.on("trace", (arg0, arg1, arg2) => {
        let isTracing = outer2_1(outer2_3[4]).isTracing;
        if (isTracing) {
          isTracing = arg2 >= 10;
        }
        if (isTracing) {
          outer2_1(outer2_3[4]).mark("\u{1F9A5}", arg1, arg2);
          const obj = outer2_1(outer2_3[4]);
        }
      });
      return;
    }
  }
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
      const self = this;
      let closure_1 = arg0;
      return new Promise((arg0, arg1) => {
        const _self = arg0;
        let closure_1 = arg1;
        const _waitQueue = _self._waitQueue;
        _waitQueue.push(() => {
          if (null == lib.functionCache[closure_1.type]) {
            lib.functionCache[closure_1.type] = (arg0) => closure_0._dispatchWithDevtools(arg0);
            outer3_11(lib.functionCache[closure_1.type], `dispatch_${closure_1.type}`);
          }
          const functionCache = lib.functionCache;
          functionCache[closure_1.type](closure_1);
          lib();
        });
        _self.flushWaitQueue();
      });
    }
  };
  items[1] = obj;
  obj = {
    key: "dispatchForStoreTest",
    value(type) {
      let iter2;
      outer1_1(outer1_3[5])(false, "dispatchForTest cannot be called in: production");
      const tmp2 = outer1_9(this._actionHandlers.getOrderedActionHandlers(type));
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
        outer1_1(outer1_3[6]).isDispatching = true;
        let num3 = 0;
        if (self._waitQueue.length > 0) {
          const sum = num3 + 1;
          num3 = sum;
          while (sum <= 100) {
            if (self._waitQueue.length > 0) {
              do {
                let _waitQueue = self._waitQueue;
                let tmp5 = _waitQueue.shift()();
                length = self._waitQueue.length;
              } while (length > 0);
            }
            let tmp6 = outer1_1;
            let tmp7 = outer1_3;
            let obj = outer1_1(outer1_3[6]);
            let emitResult = obj.emit();
          }
          const serializeResult = outer1_2(outer1_3[7]).serialize();
          outer1_7.error("LastFewActions", serializeResult);
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
        outer1_1(outer1_3[6]).isDispatching = false;
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
      const self = this;
      let closure_1 = type;
      outer1_1(outer1_3[5])(null == this._currentDispatchActionType, "Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch. Action: " + type.type + " Already dispatching: " + this._currentDispatchActionType);
      outer1_1(outer1_3[5])(type.type, "Dispatch.dispatch(...) called without an action type");
      if (outer1_6.has(type.type)) {
        const _HermesInternal = HermesInternal;
        outer1_7.log("Dispatching " + tmp.type);
      }
      const tmp2 = outer1_1(outer1_3[5]);
      const tmp3 = null == this._currentDispatchActionType;
      Dispatcher(outer1_3[8]).mark(type.type);
      const obj = Dispatcher(outer1_3[8]);
      outer1_2(outer1_3[7]).add(type.type);
      const actionLogger = this.actionLogger;
      const logResult1 = actionLogger.log(type, (arg0) => {
        self._currentDispatchActionType = type.type;
        self._dispatch(type, arg0);
        self._currentDispatchActionType = null;
      });
      if (logResult1.totalTime > 100) {
        const _HermesInternal2 = HermesInternal;
        outer1_7.verbose("Slow dispatch on " + tmp.type + ": " + logResult1.totalTime + "ms");
      }
      const obj2 = outer1_2(outer1_3[7]);
      Dispatcher(outer1_3[8]).measure("DISPATCH[" + type.type + "]", type.type);
    }
  };
  items[6] = {
    key: "_dispatch",
    value(type) {
      const self = this;
      let closure_0 = type;
      let closure_1 = arg1;
      const tmp = outer1_9(this._interceptors);
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
      let c3 = 0;
      if (0 < orderedActionHandlers.length) {
        do {
          let tmp2 = (function _loop() {
            if (false !== callback(orderedActionHandlers[c3].name, () => actionHandler(actionHandler))) {
              obj.storeDidChange(actionHandler);
            }
          })();
          num = num + 1;
          c3 = num;
        } while (num < length);
      }
      let logger = tmp3;
      if (null != self._subscriptions[type.type]) {
        arg1("__subscriptions", () => {
          const item = tmp3.forEach((arg0) => arg0(outer1_0));
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
      if (null != this._subscriptions[arg0]) {
        obj.delete(arg1);
        if (0 === obj.size) {
          const _subscriptions = tmp3._subscriptions;
          delete tmp[tmp2];
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
})();
