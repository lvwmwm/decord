// Module ID: 64
// Function ID: 1414
// Name: MessageQueue
// Dependencies: []

// Module 64 (MessageQueue)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);

export default () => {
  class MessageQueue {
    constructor() {
      tmp = closure_4(this, MessageQueue);
      this._lazyCallableModules = {};
      items = [, , , ];
      items[0] = [];
      items[1] = [];
      items[2] = [];
      items[3] = 0;
      this._queue = items;
      map = new Map();
      this._successCallbacks = map;
      map1 = new Map();
      this._failureCallbacks = map1;
      this._callID = 0;
      this._lastFlush = 0;
      this._eventLoopStartTime = Date.now();
      this._reactNativeMicrotasksCallback = null;
      callFunctionReturnFlushedQueue = this.callFunctionReturnFlushedQueue;
      this.callFunctionReturnFlushedQueue = callFunctionReturnFlushedQueue.bind(this);
      flushedQueue = this.flushedQueue;
      this.flushedQueue = flushedQueue.bind(this);
      invokeCallbackAndReturnFlushedQueue = this.invokeCallbackAndReturnFlushedQueue;
      this.invokeCallbackAndReturnFlushedQueue = invokeCallbackAndReturnFlushedQueue.bind(this);
      return;
    }
  }
  const global = MessageQueue;
  let obj = {
    key: "callFunctionReturnFlushedQueue",
    value: function callFunctionReturnFlushedQueue(arg0, arg1, arg2) {
      const MessageQueue = arg0;
      const self = this;
      this.__guard(() => {
        self.__callFunction(arg0, arg1, arg2);
      });
      return this.flushedQueue();
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , ];
  obj = {
    key: "invokeCallbackAndReturnFlushedQueue",
    value: function invokeCallbackAndReturnFlushedQueue(arg0, arg1) {
      const MessageQueue = arg0;
      const self = this;
      this.__guard(() => {
        self.__invokeCallback(arg0, arg1);
      });
      return this.flushedQueue();
    }
  };
  items[1] = obj;
  obj = {
    key: "flushedQueue",
    value: function flushedQueue() {
      const MessageQueue = this;
      this.__guard(() => {
        const result = self.__callReactNativeMicrotasks();
      });
      const _queue = this._queue;
      const items = [[], [], [], this._callID];
      this._queue = items;
      let tmp2 = null;
      if (_queue[0].length) {
        tmp2 = _queue;
      }
      return tmp2;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getEventLoopRunningTime",
    value: function getEventLoopRunningTime() {
      return Date.now() - this._eventLoopStartTime;
    }
  };
  items[4] = {
    key: "registerCallableModule",
    value: function registerCallableModule(MobileVoiceOverlayManager, _module) {
      const MessageQueue = _module;
      this._lazyCallableModules[MobileVoiceOverlayManager] = () => arg1;
    }
  };
  items[5] = {
    key: "registerLazyCallableModule",
    value: function registerLazyCallableModule(MobileVoiceOverlayManager, _module) {
      this._lazyCallableModules[MobileVoiceOverlayManager] = () => {
        if (_module) {
          let closure_0 = _module();
          const _module = null;
        }
        return closure_0;
      };
    }
  };
  items[6] = {
    key: "getCallableModule",
    value: function getCallableModule(module) {
      const tmp = this._lazyCallableModules[module];
      let tmpResult = null;
      if (tmp) {
        tmpResult = tmp();
      }
      return tmpResult;
    }
  };
  items[7] = {
    key: "callNativeSyncHook",
    value: function callNativeSyncHook(arg0, arg1, substr, arg3, arg4) {
      this.processCallbacks(arg0, arg1, substr, arg3, arg4);
      return MessageQueue.nativeCallSyncHook(arg0, arg1, substr);
    }
  };
  items[8] = {
    key: "processCallbacks",
    value: function processCallbacks(arg0, arg1, arr) {
      const self = this;
      let tmp = arg3;
      if (!arg3) {
        tmp = arg4;
      }
      if (tmp) {
        if (arg3) {
          arr.push(self._callID << 1);
        }
        if (arg4) {
          arr.push(self._callID << 1 | 1);
        }
        const result = self._successCallbacks.set(self._callID, arg4);
        const result1 = self._failureCallbacks.set(self._callID, arg3);
        const _failureCallbacks = self._failureCallbacks;
        const _successCallbacks = self._successCallbacks;
      }
      self._callID = self._callID + 1;
    }
  };
  items[9] = {
    key: "enqueueNativeCall",
    value: function enqueueNativeCall(array, error, array2, arg3, arg4) {
      const self = this;
      this.processCallbacks(array, error, array2, arg3, arg4);
      const first = this._queue[0];
      first.push(array);
      let arr1 = this._queue[1];
      arr1.push(error);
      arr1 = this._queue[2].push(array2);
      const timestamp = Date.now();
      if (MessageQueue.nativeFlushQueueImmediate) {
        if (timestamp - self._lastFlush >= 5) {
          const items = [[], [], [], self._callID];
          self._queue = items;
          self._lastFlush = timestamp;
          const result = MessageQueue.nativeFlushQueueImmediate(self._queue);
        }
      }
      let obj = callback(closure_2[3]);
      obj.counterEvent("pending_js_to_native_queue", self._queue[0].length);
      if (self.__spy) {
        obj = { type: 1, module: "" + array, method: error, args: array2 };
        self.__spy(obj);
      }
    }
  };
  items[10] = {
    key: "createDebugLookup",
    value: function createDebugLookup(arg0, arg1, arg2) {

    }
  };
  items[11] = {
    key: "setReactNativeMicrotasksCallback",
    value: function setReactNativeMicrotasksCallback(callReactNativeMicrotasks) {
      this._reactNativeMicrotasksCallback = callReactNativeMicrotasks;
    }
  };
  items[12] = {
    key: "__guard",
    value: function __guard(arg0) {
      if (this.__shouldPauseOnThrow()) {
        arg0();
      } else {
        arg0();
      }
    }
  };
  items[13] = {
    key: "__shouldPauseOnThrow",
    value: function __shouldPauseOnThrow() {
      let tmp = "undefined" !== typeof globalThis.DebuggerInternal;
      if (tmp) {
        tmp = true === globalThis.DebuggerInternal.shouldPauseOnThrow;
      }
      return tmp;
    }
  };
  items[14] = {
    key: "__callReactNativeMicrotasks",
    value: function __callReactNativeMicrotasks() {
      const self = this;
      callback(closure_2[3]).beginEvent("JSTimers.callReactNativeMicrotasks()");
      if (null != this._reactNativeMicrotasksCallback) {
        const result = self._reactNativeMicrotasksCallback();
      }
      const obj = callback(closure_2[3]);
      callback(closure_2[3]).endEvent();
    }
  };
  items[15] = {
    key: "__callFunction",
    value: function __callFunction(module, method, args) {
      const self = this;
      this._lastFlush = Date.now();
      this._eventLoopStartTime = this._lastFlush;
      const beginEvent = callback(closure_2[3]).beginEvent;
      if (this.__spy) {
        const _HermesInternal2 = HermesInternal;
        beginEvent("" + tmp4 + "." + tmp5 + "(" + tmp(tmp2[5]).default(args) + ")");
        const tmpResult = tmp(tmp2[5]);
      } else {
        const _HermesInternal = HermesInternal;
        beginEvent("" + tmp4 + "." + tmp5 + "(...)");
      }
      if (self.__spy) {
        const obj = { type: 0, module, method, args };
        self.__spy(obj);
      }
      const callableModule = self.getCallableModule(module);
      if (!callableModule) {
        const _Object = Object;
        const keys = Object.keys(self._lazyCallableModules);
        const joined = keys.join(", ");
        let str9 = "false";
        if (true === MessageQueue.RN$Bridgeless) {
          str9 = "true";
        }
        const _HermesInternal3 = HermesInternal;
        callback(closure_2[6])(false, "Failed to call into JavaScript module method " + module + "." + method + "(). Module has not been registered as callable. Bridgeless Mode: " + str9 + ". Registered callable JavaScript modules (n = " + keys.length + "): " + joined + ".\n          A frequent cause of the error is that the application entry file path is incorrect. This can also happen when the JS bundle is corrupt or there is an early initialization error when loading React Native.");
        const tmp23 = callback(closure_2[6]);
      }
      if (!callableModule[method]) {
        const _HermesInternal4 = HermesInternal;
        callback(closure_2[6])(false, "Failed to call into JavaScript module method " + module + "." + method + "(). Module exists, but the method is undefined.");
        const tmp32 = callback(closure_2[6]);
      }
      callableModule[method].apply(callableModule, args);
      const obj3 = callableModule[method];
      const tmp = callback;
      const tmp2 = closure_2;
      const tmp3 = callback(closure_2[3]);
      callback(closure_2[3]).endEvent();
    }
  };
  items[16] = {
    key: "__invokeCallback",
    value: function __invokeCallback(arg0, arg1) {
      const self = this;
      this._lastFlush = Date.now();
      this._eventLoopStartTime = this._lastFlush;
      if (1 & arg0) {
        let value = self._successCallbacks.get(tmp);
        const _successCallbacks = self._successCallbacks;
      } else {
        value = self._failureCallbacks.get(tmp);
        const _failureCallbacks = self._failureCallbacks;
      }
      if (value) {
        self._successCallbacks.delete(tmp);
        self._failureCallbacks.delete(tmp);
        obj.apply(undefined, callback2(arg1));
      }
      const obj = value;
    }
  };
  const items1 = [
    {
      key: "spy",
      value: function spy(arg0) {
        if (true === arg0) {
          let tmp = (type) => {
            let str = "JS->N";
            if (0 === type.type) {
              str = "N->JS";
            }
            let str2 = "";
            if (null != type.module) {
              str2 = `${type.module}.`;
            }
            const text = `${str} : ${"" + str2 + type.method}`;
            console.log(text + "(" + JSON.stringify(type.args) + ")");
          };
        } else {
          tmp = null;
          if (false !== arg0) {
            tmp = arg0;
          }
        }
        MessageQueue.prototype.__spy = tmp;
      }
    }
  ];
  return callback(MessageQueue, items, items1);
}();
