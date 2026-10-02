// Module ID: 578
// Function ID: 579
// Name: flux/Dispatcher
// Dependencies: [4, 579, 10, 38, 508, 509, 583, 584, 2]

// Module 578 (flux/Dispatcher)
import logger_Logger from "logger/Logger" /* 4 */;
import AppStartPerformanceDefault from "AppStartPerformance" /* 10 */;
import _modDef38 from "module_38" /* 38 */;
import EmitterDefault from "Emitter" /* 508 */;
import LastFewActionsAll from "LastFewActions" /* 509 */;
import profiling from "profiling" /* 583 */;
import DepGraph from "DepGraph" /* 584 */;
import size from "module_2" /* 2 */;

let _self;

function setDisplayName(arg0, displayName) {
  arg0.displayName = displayName;
}
let set = new Set(["APP_STATE_UPDATE", "CLEAR_CACHES", "CONNECTION_CLOSED", "CONNECTION_OPEN", "CONNECTION_RESUMED", "LOGIN_SUCCESS", "LOGIN", "LOGOUT", "MESSAGE_SEND_FAILED", "PUSH_NOTIFICATION_CLICK", "RESET_SOCKET", "SESSION_START", "UPLOAD_FAIL", "WRITE_CACHES"]);
const logger = new logger_Logger.Logger("Flux");
class ActionHandlersGraph {
  constructor() {
    const merged = Object.assign({ _orderedActionHandlers: null, _orderedCallbackTokens: null, _lastID: 1, _dependencyGraph: null });
    merged[0] = {};
    const depGraph = new DepGraph.DepGraph();
    merged[3] = depGraph;
    return merged;
  }
  getOrderedActionHandlers(type) {
    const self = this;
    let result = this._orderedActionHandlers[type.type];
    if (result == null) {
      result = self._computeOrderedActionHandlers(type.type);
    }
    return result;
  }
  register(name, obj, storeDidChange, band, token) {
    const self = this;
    if (token === undefined) {
      token = self.createToken();
    }
    let isIntegerResult = band >= 0;
    const tmp2 = _modDef38;
    if (isIntegerResult) {
      const _Number = Number;
      isIntegerResult = Number.isInteger(band);
    }
    tmp2(isIntegerResult, "band must be a non-negative integer.");
    obj = {};
    for (const key10024 in obj) {
      let closure_0 = obj[key10024];
      function wrapper(arg0) {
        return closure_0(arg0);
      }
      let _HermesInternal = HermesInternal;
      wrapper.displayName = "" + name + "_" + key10024;
      obj[key10024] = wrapper;
      continue;
    }
    const _dependencyGraph = self._dependencyGraph;
    const obj2 = { name, band, actionHandler: obj, storeDidChange };
    _dependencyGraph.addNode(token, obj2);
    self._addToBand(token, band);
    self._invalidateCaches();
    return token;
  }
  createToken() {
    this._lastID = +this._lastID + 1;
    return "ID_" + +this._lastID;
  }
  addDependencies(arg0, arg1) {
    const self = this;
    const result = this._validateDependencies(arg0, arg1);
    const tmp2 = arg1[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let _dependencyGraph = self._dependencyGraph;
      let addDependencyResult = _dependencyGraph.addDependency(arg0, tmp3);
      continue;
    }
    self._invalidateCaches();
  }
  _validateDependencies(arg0, arg1) {

  }
  _invalidateCaches() {
    this._orderedCallbackTokens = null;
    this._orderedActionHandlers = {};
  }
  _bandToken(band) {
    const self = this;
    const combined = "band." + band;
    const _dependencyGraph = this._dependencyGraph;
    if (!_dependencyGraph.hasNode(combined)) {
      const _dependencyGraph2 = self._dependencyGraph;
      const obj = {
        name: combined,
        band,
        actionHandler: {},
        storeDidChange() {

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
  _addToBand(token, band) {
    const self = this;
    const _dependencyGraph = this._dependencyGraph;
    _dependencyGraph.addDependency(this._bandToken(band), token);
    if (band > 0) {
      const _dependencyGraph2 = self._dependencyGraph;
      _dependencyGraph2.addDependency(token, self._bandToken(band - 1));
    }
  }
  _computeOrderedActionHandlers(type) {
    let num;
    const self = this;
    let prop = this._orderedCallbackTokens;
    if (prop == null) {
      prop = self._computeOrderedCallbackTokens();
    }
    const items = [];
    const length = prop.length;
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
  _computeOrderedCallbackTokens() {
    const self = this;
    try {
      let _dependencyGraph = self._dependencyGraph;
      const overallOrderResult = _dependencyGraph.overallOrder();
      self._orderedCallbackTokens = overallOrderResult;
      return overallOrderResult;
    } catch (tmp2) {
      if (null != tmp2.cyclePath) {
        const cyclePath = tmp2.cyclePath;
        const mapped = cyclePath.map((item) => {
          const _dependencyGraph = self._dependencyGraph;
          return "" + _dependencyGraph.getNodeData(item).name + "(" + item + ")";
        });
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const self2 = this;
        const self3 = this;
        const error = new Error("Dependency Cycle Found: " + mapped.join(" -> "));
        throw error;
      } else {
        throw tmp2;
      }
    }
  }
}
const prototype = ActionHandlersGraph.prototype;
let result = size.fileFinishedImporting("../discord_common/js/packages/flux/Dispatcher.tsx");
class Dispatcher {
  constructor(Default, actionLogger, _sentryUtils) {
    let num = Default;
    if (Default === undefined) {
      num = 0;
    }
    const merged = Object.assign({ _interceptors: null, _subscriptions: null, _waitQueue: null, _processingWaitQueue: false, _currentDispatchActionType: null, _actionHandlers: null, _sentryUtils: "Array", functionCache: "\u{1F469}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FF}" });
    merged[0] = [];
    merged[1] = {};
    merged[2] = [];
    if (typeof ActionHandlersGraph === "function") {
      let actionLogger1 = actionLogger;
      const merged1 = Object.assign({ _orderedActionHandlers: null, _orderedCallbackTokens: null, _lastID: 1, _dependencyGraph: null });
      merged1[0] = {};
      const self = this;
      const self2 = this;
      const depGraph = new DepGraph.DepGraph();
      merged1[3] = depGraph;
      merged[5] = merged1;
      merged[7] = {};
      merged._defaultBand = num;
      merged._sentryUtils = _sentryUtils;
      const tmp6 = require;
      if (null == actionLogger) {
        const self3 = this;
        const self4 = this;
        actionLogger1 = new tmp6(579).ActionLogger();
      }
      merged.actionLogger = actionLogger1;
      actionLogger = merged.actionLogger;
      actionLogger.on("trace", (arg0, arg1, arg2) => {
        let isTracing = AppStartPerformanceDefault.isTracing;
        const tmp = importDefault;
        const tmp2 = dependencyMap;
        if (isTracing) {
          isTracing = arg2 >= 10;
        }
        if (isTracing) {
          const tmpResult = tmp(tmp2[2]);
          tmpResult.mark("\u{1F9A5}", arg1, arg2);
        }
      });
      return merged;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  isDispatching() {
    return null != this._currentDispatchActionType;
  }
  dispatch(arg0) {
    const self = this;
    let closure_0 = arg0;
    const promise = new Promise((arg0, arg1) => {
      let closure_1;
      closure_0 = arg0;
      _self = arg1;
      const _waitQueue = _self._waitQueue;
      _waitQueue.push(() => {
        try {
          if (null == self.functionCache[closure_0.type]) {
            self.functionCache[closure_0.type] = (type) => closure_1_1._dispatchWithDevtools(type);
            setDisplayName(self.functionCache[closure_0.type], "dispatch_" + closure_0.type);
          }
          const functionCache = tmp.functionCache;
          (functionCache)[closure_0.type](closure_0);
          closure_0();
        } catch (tmp9) {
          closure_1(tmp9);
        }
      });
      _self.flushWaitQueue();
    });
    return promise;
  }
  dispatchForStoreTest(type, arg1) {
    let actionHandler;
    let storeDidChange;
    _modDef38(false, "dispatchForTest cannot be called in: production");
    const _actionHandlers = this._actionHandlers;
    const orderedActionHandlers = _actionHandlers.getOrderedActionHandlers(type);
    for (const item10019 of orderedActionHandlers) {
      ({ actionHandler, storeDidChange } = item10019);
      let tmp3 = item10019.name === arg1;
      if (tmp3) {
        tmp3 = false !== actionHandler(type);
      }
      if (tmp3) {
        let storeDidChangeResult = storeDidChange(type);
      }
      continue;
    }
  }
  flushWaitQueue() {
    let length;
    let obj3;
    const self = this;
    if (!this._processingWaitQueue) {
      try {
        self._processingWaitQueue = true;
        let tmp2 = importDefault;
        EmitterDefault.isDispatching = true;
        let num2 = 0;
        if (self._waitQueue.length > 0) {
          const sum = num2 + 1;
          num2 = sum;
          while (100 >= sum) {
            if (self._waitQueue.length > 0) {
              do {
                let _waitQueue = self._waitQueue;
                let tmp7 = _waitQueue.shift()();
                length = self._waitQueue.length;
              } while (length > 0);
            }
            tmp2 = importDefault;
            let obj = EmitterDefault;
            let emitResult = obj.emit();
          }
          const serializer = LastFewActionsAll;
          const serializeResult = serializer.serialize();
          logger.error("LastFewActions", serializeResult);
          const _sentryUtils = self._sentryUtils;
          if (_sentryUtils != null) {
            const obj2 = { message: "Dispatcher: Dispatch loop detected", data: obj3 };
            obj3 = { lastFewActions: serializeResult };
            _sentryUtils.addBreadcrumb(obj2);
          }
          const _Error = Error;
          throw Error("Dispatch loop detected, aborting");
        }
        self._processingWaitQueue = false;
        tmp2(508).isDispatching = false;
      } catch (tmp23) {
        self._processingWaitQueue = false;
        EmitterDefault.isDispatching = false;
        throw tmp23;
      }
    }
  }
  _dispatchWithDevtools(type) {
    this._dispatchWithLogging(type);
  }
  _dispatchWithLogging(type) {
    const self = this;
    let closure_0 = type;
    const tmp2 = _modDef38;
    const tmp3 = null == this._currentDispatchActionType;
    tmp2(tmp3, "Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch. Action: " + type.type + " Already dispatching: " + this._currentDispatchActionType);
    let tmp6 = null != type.type;
    const tmp5 = _modDef38;
    if (tmp6) {
      tmp6 = "" !== type.type;
    }
    tmp5(tmp6, "Dispatch.dispatch(...) called without an action type");
    if (set.has(type.type)) {
      const tmp8 = logger;
      const _HermesInternal = HermesInternal;
      logger.log("Dispatching " + type.type);
    }
    const obj = profiling;
    obj.mark(type.type);
    const obj2 = LastFewActionsAll;
    obj2.add(type.type);
    const actionLogger = this.actionLogger;
    const logResult1 = actionLogger.log(type, (fn) => {
      try {
        self._currentDispatchActionType = type.type;
        self._dispatch(type, fn);
        self._currentDispatchActionType = null;
      } catch (tmp8) {
        self._currentDispatchActionType = null;
        throw tmp8;
      }
    });
    if (logResult1.totalTime > 100) {
      const _HermesInternal2 = HermesInternal;
      logger.verbose("Slow dispatch on " + type.type + ": " + logResult1.totalTime + "ms");
    }
    try {
      const _HermesInternal3 = HermesInternal;
      const tmp10Result = profiling;
      tmp10Result.measure("DISPATCH[" + type.type + "]", type.type);
    } catch (err) {
    }
  }
  _dispatch(type, fn) {
    let sum;
    function _loop() {
      const actionHandler = tmp.actionHandler;
      const storeDidChange = tmp.storeDidChange;
      if (false !== closure_1(orderedActionHandlers[c3].name, () => actionHandler(type))) {
        storeDidChange(actionHandler);
      }
    }
    const self = this;
    let closure_0 = type;
    let closure_1 = fn;
    const _interceptors = this._interceptors;
    for (const item10008 of _interceptors) {
      if (item10008(type)) {
        let tmp = obj;
        obj.return();
        let flag = false;
        return false;
      }
    }
    const _actionHandlers = self._actionHandlers;
    const orderedActionHandlers = _actionHandlers.getOrderedActionHandlers(type);
    let c3 = 0;
    let num = 0;
    if (0 < orderedActionHandlers.length) {
      do {
        let tmp2 = _loop();
        sum = num + 1;
        c3 = sum;
        num = sum;
      } while (sum < orderedActionHandlers.length);
    }
    let closure_4 = tmp4;
    if (null != self._subscriptions[type.type]) {
      fn("__subscriptions", () => {
        const item = closure_4.forEach((fn) => fn(type));
      });
    }
  }
  addInterceptor(handleAction) {
    const _interceptors = this._interceptors;
    _interceptors.push(handleAction);
  }
  wait(arg0) {
    const _waitQueue = this._waitQueue;
    _waitQueue.push(arg0);
    this.flushWaitQueue();
  }
  subscribe(arg0, arg1) {
    let obj = this._subscriptions[arg0];
    if (null == obj) {
      const _Set = Set;
      const self = this;
      const self2 = this;
      const _subscriptions = this._subscriptions;
      set = new Set();
      _subscriptions[arg0] = set;
      obj = set;
    }
    obj.add(arg1);
  }
  unsubscribe(arg0, arg1) {
    if (null != this._subscriptions[arg0]) {
      this._subscriptions[arg0].delete(arg1);
      if (0 === this._subscriptions[arg0].size) {
        delete tmp._subscriptions[tmp2];
      }
    }
  }
  register(arg0, arg1, arg2, arg3, arg4) {
    let _defaultBand = arg3;
    const register = this._actionHandlers.register;
    if (arg3 == null) {
      _defaultBand = this._defaultBand;
    }
    return register(arg0, arg1, arg2, _defaultBand, arg4);
  }
  createToken() {
    const _actionHandlers = this._actionHandlers;
    return _actionHandlers.createToken();
  }
  addDependencies(arg0, arg1) {
    const _actionHandlers = this._actionHandlers;
    _actionHandlers.addDependencies(arg0, arg1);
  }
}

export { Dispatcher };
