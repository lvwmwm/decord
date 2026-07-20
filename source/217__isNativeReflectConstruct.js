// Module ID: 217
// Function ID: 3029
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 217 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = [null];
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = 0;
const tmp2 = (arg0) => {
  class WebSocket {
    constructor(arg0, arg1, arg2) {
      obj = arg2;
      self = this;
      tmp = closure_5(this, WebSocket);
      obj2 = closure_8(WebSocket);
      tmp2 = closure_7;
      if (closure_11()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_8;
        constructResult = Reflect.construct(obj2, [], closure_8(self).constructor);
      } else {
        constructResult = obj2.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.CONNECTING = 0;
      tmp2Result.OPEN = 1;
      tmp2Result.CLOSING = 2;
      tmp2Result.CLOSED = 3;
      tmp2Result.readyState = 0;
      tmp2Result.url = arg0;
      tmp6 = arg1;
      if ("string" === typeof arg1) {
        items = [];
        items[0] = arg1;
        tmp6 = items;
      }
      if (!obj) {
        obj = {};
      }
      headers = obj.headers;
      if (undefined === headers) {
        headers = {};
      }
      tmp7 = closure_4(obj, closure_3);
      tmp8 = tmp7;
      if (tmp7) {
        tmp8 = "string" === typeof tmp7.origin;
      }
      if (tmp8) {
        tmp9 = globalThis;
        _console = console;
        str = "Specifying `origin` as a WebSocket connection option is deprecated. Include it under `headers` instead.";
        warnResult = console.warn("Specifying `origin` as a WebSocket connection option is deprecated. Include it under `headers` instead.");
        headers.origin = tmp7.origin;
        delete r11.origin;
      }
      if (Object.keys(tmp7).length > 0) {
        _console2 = console;
        _Object = Object;
        keys = Object.keys(tmp7);
        str2 = "`, `";
        str3 = "Unrecognized WebSocket connection option(s) `";
        str4 = "`. Did you mean to put these under `headers`?";
        warnResult1 = console.warn(`Unrecognized WebSocket connection option(s) `${obj5.join("`, `")}`. Did you mean to put these under `headers`?`);
      }
      tmp12 = tmp6;
      if (!Array.isArray(tmp6)) {
        tmp12 = null;
      }
      tmp13 = closure_1(closure_2[6]);
      tmp13 = new tmp13(null);
      tmp2Result._eventEmitter = tmp13;
      tmp15 = +console;
      console = tmp15 + 1;
      tmp2Result._socketId = tmp15;
      _registerEventsResult = tmp2Result._registerEvents();
      obj6 = closure_1(closure_2[7]);
      obj = {};
      obj.headers = headers;
      connectResult = obj6.connect(arg0, tmp12, obj, tmp2Result._socketId);
      return tmp2Result;
    }
  }
  const arg1 = WebSocket;
  callback2(WebSocket, arg0);
  let obj = {
    key: "binaryType",
    get() {
      return this._binaryType;
    },
    set(_binaryType) {
      const self = this;
      if ("blob" !== _binaryType) {
        if ("arraybuffer" !== _binaryType) {
          const _Error = Error;
          const error = new Error("binaryType must be either 'blob' or 'arraybuffer'");
          throw error;
        }
      }
      if (!tmp2) {
        callback(closure_2[8])(callback(closure_2[9]).isAvailable, "Native module BlobModule is required for blob support");
        if ("blob" === _binaryType) {
          callback(closure_2[9]).addWebSocketHandler(self._socketId);
          const obj2 = callback(closure_2[9]);
        } else {
          const result = callback(closure_2[9]).removeWebSocketHandler(self._socketId);
          const obj = callback(closure_2[9]);
        }
        const tmp5 = callback(closure_2[8]);
      }
      self._binaryType = _binaryType;
    }
  };
  const items = [obj, , , , , , , , , , ];
  obj = {
    key: "close",
    value: function close(arg0, arg1) {
      const self = this;
      if (tmp) {
        self.readyState = self.CLOSING;
        self._close(arg0, arg1);
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "send",
    value: function send(arg0) {
      const self = this;
      if (this.readyState === this.CONNECTING) {
        const _Error2 = Error;
        const error = new Error("INVALID_STATE_ERR");
        throw error;
      } else if (arg0 instanceof callback(closure_2[10])) {
        callback(closure_2[8])(callback(closure_2[9]).isAvailable, "Native module BlobModule is required for blob support");
        const tmp14 = callback(closure_2[8]);
        callback(closure_2[9]).sendOverSocket(arg0, self._socketId);
      } else if ("string" !== typeof arg0) {
        const _ArrayBuffer = ArrayBuffer;
        if (!(arg0 instanceof ArrayBuffer)) {
          const _ArrayBuffer2 = ArrayBuffer;
          if (!ArrayBuffer.isView(arg0)) {
            const _Error = Error;
            const error1 = new Error("Unsupported data type");
            throw error1;
          }
        }
        callback(closure_2[7]).sendBinary(callback(closure_2[11])(arg0), self._socketId);
        const obj2 = callback(closure_2[7]);
      } else {
        callback(closure_2[7]).send(arg0, self._socketId);
        const obj = callback(closure_2[7]);
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "ping",
    value: function ping() {
      if (this.readyState === this.CONNECTING) {
        const _Error = Error;
        const error = new Error("INVALID_STATE_ERR");
        throw error;
      } else {
        callback(closure_2[7]).ping(tmp._socketId);
      }
    }
  };
  items[4] = {
    key: "_close",
    value: function _close(arg0, arg1) {
      const self = this;
      let num = 1000;
      if ("number" === typeof arg0) {
        num = arg0;
      }
      let str = "";
      if ("string" === typeof arg1) {
        str = arg1;
      }
      callback(closure_2[7]).close(num, str, self._socketId);
      let isAvailable = callback(closure_2[9]).isAvailable;
      if (isAvailable) {
        isAvailable = "blob" === self._binaryType;
      }
      if (isAvailable) {
        const result = callback(closure_2[9]).removeWebSocketHandler(self._socketId);
        const obj2 = callback(closure_2[9]);
      }
    }
  };
  items[5] = {
    key: "_unregisterEvents",
    value: function _unregisterEvents() {
      const _subscriptions = this._subscriptions;
      const item = _subscriptions.forEach((remove) => remove.remove());
      this._subscriptions = [];
    }
  };
  items[6] = {
    key: "_registerEvents",
    value: function _registerEvents() {
      const WebSocket = this;
      const _eventEmitter = this._eventEmitter;
      const items = [
        _eventEmitter.addListener("websocketMessage", (id) => {
          let data;
          let type;
          let dispatchEventResult = id;
          if (id.id === self._socketId) {
            ({ data, type } = dispatchEventResult);
            if ("binary" === type) {
              data = callback(closure_2[12]).toByteArray(dispatchEventResult.data).buffer;
              const obj2 = callback(closure_2[12]);
            } else if ("blob" === type) {
              let obj = callback(closure_2[9]);
              data = obj.createFromOptions(dispatchEventResult.data);
            }
            let tmp9 = callback(closure_2[13]);
            obj = { data, raw_length: dispatchEventResult.raw_length };
            const prototype = tmp9.prototype;
            tmp9 = new tmp9("message", obj);
            dispatchEventResult = self.dispatchEvent(tmp9);
          }
        }),
      ,
      ,

      ];
      const _eventEmitter2 = this._eventEmitter;
      items[1] = _eventEmitter2.addListener("websocketOpen", (id) => {
        if (id.id === self._socketId) {
          self.readyState = self.OPEN;
          self.protocol = id.protocol;
          let tmp4 = callback(closure_2[14]);
          const prototype = tmp4.prototype;
          tmp4 = new tmp4("open");
          self.dispatchEvent(tmp4);
        }
      });
      const _eventEmitter3 = this._eventEmitter;
      items[2] = _eventEmitter3.addListener("websocketClosed", (id) => {
        if (id.id === self._socketId) {
          self.readyState = self.CLOSED;
          let tmp4 = callback(closure_2[15]);
          const obj = {};
          ({ code: obj.code, reason: obj.reason } = id);
          const prototype = tmp4.prototype;
          tmp4 = new tmp4("close", obj);
          self.dispatchEvent(tmp4);
          self._unregisterEvents();
          self.close();
        }
      });
      const _eventEmitter4 = this._eventEmitter;
      items[3] = _eventEmitter4.addListener("websocketFailed", (id) => {
        if (id.id === self._socketId) {
          self.readyState = self.CLOSED;
          let tmp4 = callback(closure_2[14]);
          const prototype = tmp4.prototype;
          tmp4 = new tmp4("error");
          self.dispatchEvent(tmp4);
          let tmp10 = callback(closure_2[15]);
          const obj = { code: 1006, reason: id.message };
          const prototype2 = tmp10.prototype;
          tmp10 = new tmp10("close", obj);
          self.dispatchEvent(tmp10);
          self._unregisterEvents();
          self.close();
        }
      });
      this._subscriptions = items;
    }
  };
  items[7] = {
    key: "onclose",
    get() {
      return WebSocket(closure_2[16]).getEventHandlerAttribute(this, "close");
    },
    set(handleEvent) {
      const result = WebSocket(closure_2[16]).setEventHandlerAttribute(this, "close", handleEvent);
    }
  };
  items[8] = {
    key: "onerror",
    get() {
      return WebSocket(closure_2[16]).getEventHandlerAttribute(this, "error");
    },
    set(handleEvent) {
      const result = WebSocket(closure_2[16]).setEventHandlerAttribute(this, "error", handleEvent);
    }
  };
  items[9] = {
    key: "onmessage",
    get() {
      return WebSocket(closure_2[16]).getEventHandlerAttribute(this, "message");
    },
    set(handleEvent) {
      const result = WebSocket(closure_2[16]).setEventHandlerAttribute(this, "message", handleEvent);
    }
  };
  items[10] = {
    key: "onopen",
    get() {
      return WebSocket(closure_2[16]).getEventHandlerAttribute(this, "open");
    },
    set(handleEvent) {
      const result = WebSocket(closure_2[16]).setEventHandlerAttribute(this, "open", handleEvent);
    }
  };
  return callback(WebSocket, items);
}(importDefault(dependencyMap[17]));
tmp2.CONNECTING = 0;
tmp2.OPEN = 1;
tmp2.CLOSING = 2;
tmp2.CLOSED = 3;

export default tmp2;
