// Module ID: 16587
// Function ID: 129416
// Name: installWebsocketTelemetryHook
// Dependencies: [2]
// Exports: installWebsocketTelemetryHook

// Module 16587 (installWebsocketTelemetryHook)
const result = require("set").fileFinishedImporting("lib/websocketTelemetryHook.android.tsx");

export const installWebsocketTelemetryHook = function installWebsocketTelemetryHook(arg0) {
  let closure_0 = arg0;
  function handleMessage(arg0, arg1) {
    let hostname;
    let pathname;
    const obj = {};
    const uRL = new URL(arg0);
    ({ hostname, pathname } = uRL);
    if (null != hostname) {
      if ("" !== tmp2) {
        if (null != pathname) {
          if ("" !== pathname) {
            if ("/" !== pathname) {
              const _HermesInternal = HermesInternal;
              let combined = "" + hostname + pathname;
            }
          }
        }
        combined = hostname;
      }
      if (null != combined) {
        obj.url = combined;
      }
      let flag = false;
      if ("string" === typeof arg1) {
        if (arg1.length > 0) {
          if ("{" === arg1[0]) {
            const _JSON = JSON;
            const parsed = JSON.parse(arg1);
            let tmp16 = tmp44;
            if (null != parsed) {
              tmp16 = "object" === typeof tmp43;
            }
            if (tmp16) {
              if (null != tmp43.op) {
                obj.op = tmp43.op;
              }
              if (null != tmp43.s) {
                obj.s = tmp43.s;
              }
              if (null != tmp43.t) {
                obj.t = tmp43.t;
              }
              if (null != tmp43.type) {
                obj.type = tmp43.type;
              }
              if (null != tmp43.evt) {
                obj.evt = tmp43.evt;
              }
              if (null != tmp43.cmd) {
                obj.cmd = parsed.cmd;
              }
              flag = true;
            }
          }
        }
      }
      while (true) {
        if (flag) {
          break;
        } else {
          let tmp34 = arg1;
          flag = null == arg1;
          break;
        }
        if (!flag) {
          flag = "string" === typeof arg1;
        }
        if (!flag) {
          let tmp35 = obj;
          let str7 = "binary";
          obj.type = "binary";
        }
        let tmp36 = callback;
        let tmp37 = callback(obj);
      }
    }
    while (true) {
      let tmp8 = arg0;
      let str3 = "?";
      let num = 0;
      let first = arg0.split("?")[0];
      let tmp10 = first;
      let str4 = "";
      let tmp11 = null;
      if ("" === first) {
        break;
      } else {
        tmp11 = first;
        break;
      }
      combined = tmp11;
    }
  }
  if ("undefined" !== typeof globalThis) {
    let _globalThis = globalThis;
  } else if (undefined !== closure_0) {
    _globalThis = closure_0;
  } else {
    const _window = window;
    _globalThis = null;
    if ("undefined" !== typeof window) {
      _globalThis = window;
    }
  }
  let _WebSocket;
  if (null != _globalThis) {
    _WebSocket = _globalThis.WebSocket;
  }
  if (null != _WebSocket) {
    if (!_globalThis.__discordWebsocketTelemetryPatched) {
      _WebSocket = _globalThis.WebSocket;
      class PatchedWebSocket {
        constructor(arg0) {
          items = [...arguments];
          tmp = WebSocket(...items);
          if ("string" === typeof items[0]) {
            str = items[0];
          } else {
            url = tmp.url;
            tmp2 = null;
            str = "";
            if (null != url) {
              str = url;
            }
          }
          tmp3 = (function attachListener(addEventListener, arg1) {
            let closure_0 = arg1;
            if ("function" === typeof addEventListener.addEventListener) {
              const listener = addEventListener.addEventListener("message", (data) => {
                data = undefined;
                if (null != data) {
                  data = data.data;
                }
                outer2_2(closure_0, data);
              });
            }
          })(tmp, str);
          return tmp;
        }
      }
      PatchedWebSocket.prototype = _WebSocket.prototype;
      const _Object = Object;
      const merged = Object.assign(PatchedWebSocket, _WebSocket);
      _globalThis.WebSocket = PatchedWebSocket;
      _globalThis.__discordWebsocketTelemetryPatched = true;
    }
  }
};
