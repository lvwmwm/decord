// Module ID: 9938
// Function ID: 9939
// Name: NetworkInspector
// Dependencies: [41, 42, 9939]

// Module 9938 (NetworkInspector)
import _createClassDefault from "_createClass" /* 42 */;
import generateCurl from "generateCurl" /* 9939 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

class NetworkInspectorImpl {
  constructor() {
    _classCallCheck(this, NetworkInspectorImpl);
    this._enabled = false;
    this._entries = [];
    this._maxEntries = 500;
    this._maxBodyCapture = 4096;
    this._listeners = new Set();
    new Set();
  }
}
let entry = {
  key: "enable",
  value: function enable(maxEntries) {
    const self = this;
    this._enabled = true;
    maxEntries = undefined;
    if (maxEntries != null) {
      maxEntries = maxEntries.maxEntries;
    }
    if (null != maxEntries) {
      self._maxEntries = maxEntries.maxEntries;
    }
    let maxBodyCapture;
    if (maxEntries != null) {
      maxBodyCapture = maxEntries.maxBodyCapture;
    }
    if (null != maxBodyCapture) {
      self._maxBodyCapture = maxEntries.maxBodyCapture;
    }
  }
};
const items = [
  entry,
  {
    key: "disable",
    value: function disable() {
      this._enabled = false;
    }
  },
  {
    key: "isEnabled",
    value: function isEnabled() {
      return this._enabled;
    }
  },
  {
    key: "getEntries",
    value: function getEntries() {
      return this._entries;
    }
  },
  {
    key: "getHttpEntries",
    value: function getHttpEntries() {
      const _entries = this._entries;
      return _entries.filter((type) => "http" === type.type);
    }
  },
  {
    key: "getWebSocketEntries",
    value: function getWebSocketEntries() {
      const _entries = this._entries;
      return _entries.filter((type) => "websocket" === type.type);
    }
  },
  {
    key: "getEntry",
    value: function getEntry(arg0) {
      let closure_0 = arg0;
      const _entries = this._entries;
      return _entries.find((id) => id.id === closure_0);
    }
  },
  {
    key: "clear",
    value: function clear() {
      this._entries = [];
    }
  },
  {
    key: "onEntry",
    value: function onEntry(arg0) {
      const self = this;
      let closure_0 = arg0;
      let _listeners = this._listeners;
      _listeners.add(arg0);
      return () => {
        const _listeners = self._listeners;
        _listeners.delete(closure_0);
      };
    }
  },
  {
    key: "_notify",
    value: function _notify(found) {
      const iter = this._listeners[Symbol.iterator]();
      iter.next();
      if (iter !== undefined) {
        try {
          tmp2(found);
        } catch (err) {
        }
      }
    }
  },
  {
    key: "_trimEntries",
    value: function _trimEntries() {
      if (this._entries.length > this._maxEntries) {
        const _entries = this._entries;
        _entries.shift();
      }
    }
  },
  {
    key: "_recordStart",
    value: function _recordStart(text1, url2, method, arr, bodyString) {
      let obj2;
      let request1;
      let substr;
      const self = this;
      if (this._enabled) {
        let num2 = 0;
        if (bodyString) {
          num2 = bodyString.length;
        }
        const request = {
          id: text1,
          type: "http",
          url: url2,
          method,
          requestHeaders: arr.map((key) => {
              const entry = { key: key.key, value: key.value };
              return entry;
            }),
          requestBody: substr,
          requestBodySize: num2,
          status: 0,
          statusText: "",
          responseHeaders: [],
          responseBodySize: 0,
          startTime: performance.now(),
          endTime: 0,
          duration: 0,
          curl: obj2.generateCurl(request1)
        };
        substr = undefined;
        if (bodyString) {
          substr = bodyString.slice(0, self._maxBodyCapture);
        }
        const _performance = performance;
        request1 = { url: url2, method, headers: arr, body: bodyString };
        const _entries = self._entries;
        obj2 = generateCurl;
        _entries.push(request);
        self._trimEntries();
      }
    }
  },
  {
    key: "_recordEnd",
    value: function _recordEnd(text1, httpStatusCode, httpStatusText, allHeadersAsList, responseBodySize, message, c9) {
      const self = this;
      let closure_0 = text1;
      if (this._enabled) {
        const _entries = self._entries;
        const found = _entries.find((id) => id.id === text1 && "http" === id.type);
        if (found) {
          found.status = httpStatusCode;
          found.statusText = httpStatusText;
          found.responseHeaders = allHeadersAsList.map((key) => {
            const entry = { key: key.key, value: key.value };
            return entry;
          });
          found.responseBodySize = responseBodySize;
          const _performance = performance;
          found.endTime = performance.now();
          found.duration = found.endTime - found.startTime;
          if (message) {
            found.error = message;
          }
          if (null != c9) {
            found.responseBody = c9.slice(0, self._maxBodyCapture);
          }
          self._notify(found);
        }
      }
    }
  },
  {
    key: "_recordWsOpen",
    value: function _recordWsOpen(id, url, protocols, arr) {
      const self = this;
      if (this._enabled) {
        const obj = {
          id,
          type: "websocket",
          url,
          protocols,
          requestHeaders: arr.map((key) => {
              const entry = { key: key.key, value: key.value };
              return entry;
            }),
          startTime: performance.now(),
          endTime: 0,
          duration: 0,
          readyState: "CONNECTING",
          messages: [],
          messagesSent: 0,
          messagesReceived: 0,
          bytesSent: 0,
          bytesReceived: 0
        };
        const _performance = performance;
        const _entries = self._entries;
        _entries.push(obj);
        self._trimEntries();
        self._notify(obj);
      }
    }
  },
  {
    key: "_recordWsConnected",
    value: function _recordWsConnected(arg0) {
      const self = this;
      let closure_0 = arg0;
      if (this._enabled) {
        const _entries = self._entries;
        const found = _entries.find((id) => id.id === closure_0 && "websocket" === id.type);
        if (found) {
          found.readyState = "OPEN";
          self._notify(found);
        }
      }
    }
  },
  {
    key: "_recordWsMessage",
    value: function _recordWsMessage(arg0, direction, arr, size, isBinary) {
      const self = this;
      let closure_0 = arg0;
      if (this._enabled) {
        const _entries = self._entries;
        const found = _entries.find((id) => id.id === closure_0 && "websocket" === id.type);
        if (found) {
          const messages = found.messages;
          const push = messages.push;
          const _performance = performance;
          const obj = { direction, data: arr.slice(0, self._maxBodyCapture), size, isBinary, timestamp: performance.now() };
          push(obj);
          if ("sent" === direction) {
            found.messagesSent = found.messagesSent + 1;
            found.bytesSent = found.bytesSent + size;
          } else {
            found.messagesReceived = found.messagesReceived + 1;
            found.bytesReceived = found.bytesReceived + size;
          }
          self._notify(found);
        }
      }
    }
  },
  {
    key: "_recordWsClose",
    value: function _recordWsClose(arg0, closeCode, closeReason) {
      const self = this;
      let closure_0 = arg0;
      if (this._enabled) {
        const _entries = self._entries;
        const found = _entries.find((id) => id.id === closure_0 && "websocket" === id.type);
        if (found) {
          found.readyState = "CLOSED";
          found.closeCode = closeCode;
          found.closeReason = closeReason;
          const _performance = performance;
          found.endTime = performance.now();
          found.duration = found.endTime - found.startTime;
          self._notify(found);
        }
      }
    }
  },
  {
    key: "_recordWsError",
    value: function _recordWsError(arg0, error) {
      const self = this;
      let closure_0 = arg0;
      if (this._enabled) {
        const _entries = self._entries;
        const found = _entries.find((id) => id.id === closure_0 && "websocket" === id.type);
        if (found) {
          found.error = error;
          self._notify(found);
        }
      }
    }
  }
];
const tmp2 = new _createClassDefault(NetworkInspectorImpl, items)();

export const NetworkInspector = tmp2;
