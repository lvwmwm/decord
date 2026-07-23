// Module ID: 1052
// Function ID: 11261
// Name: _wrapTimeFunction
// Dependencies: [794, 1004]

// Module 1052 (_wrapTimeFunction)
import registerSpanErrorInstrumentation from "registerSpanErrorInstrumentation";

function _wrapTimeFunction(arg0) {
  let closure_0 = arg0;
  return function() {
    const length = arguments.length;
    const array = new Array(length);
    for (let num = 0; num < length; num = num + 1) {
      array[num] = arguments[num];
    }
    let obj = callback(outer1_1[1]);
    obj = {};
    obj = { handled: false, type: "auto.browser.browserapierrors." + callback(outer1_1[0]).getFunctionName(callback) };
    obj.mechanism = obj;
    array[0] = obj.wrap(array[0], obj);
    return callback.apply(this, array);
  };
}
function _wrapRAF(arg0) {
  let closure_0 = arg0;
  return function(arg0) {
    let obj = callback(outer1_1[1]);
    obj = {};
    obj = { data: null, handled: false, type: "auto.browser.browserapierrors.requestAnimationFrame" };
    const obj1 = { handler: callback(outer1_1[0]).getFunctionName(callback) };
    obj.data = obj1;
    obj.mechanism = obj;
    const items = [obj.wrap(arg0, obj)];
    return callback.apply(this, items);
  };
}
function _wrapXHR(arg0) {
  let closure_0 = arg0;
  return function() {
    const self = this;
    const items = ["onload", "onerror", "onprogress", "onreadystatechange"];
    const item = items.forEach((arg0) => {
      const _self = arg0;
      let tmp = arg0 in _self;
      if (tmp) {
        tmp = "function" === typeof _self[arg0];
      }
      if (tmp) {
        _self(outer2_1[0]).fill(_self, arg0, (arg0) => {
          let obj = {};
          obj = {};
          obj = { handler: callback(outer3_1[0]).getFunctionName(arg0) };
          obj.data = obj;
          obj.handled = false;
          obj.type = "auto.browser.browserapierrors.xhr." + callback;
          obj.mechanism = obj;
          const obj4 = callback(outer3_1[0]);
          const originalFunction = callback(outer3_1[0]).getOriginalFunction(arg0);
          if (originalFunction) {
            obj.mechanism.data.handler = callback(outer3_1[0]).getFunctionName(originalFunction);
            const obj6 = callback(outer3_1[0]);
          }
          const obj5 = callback(outer3_1[0]);
          return callback(outer3_1[1]).wrap(arg0, obj);
        });
        let obj = _self(outer2_1[0]);
      }
    });
    const length = arguments.length;
    const array = new Array(length);
    for (let num = 0; num < length; num = num + 1) {
      array[num] = arguments[num];
    }
    return self.apply(this, array);
  };
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let closure_2 = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "BroadcastChannel", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "SharedWorker", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"];

export const browserApiErrorsIntegration = registerSpanErrorInstrumentation.defineIntegration(function _browserApiErrorsIntegration() {
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      const first = arguments[0];
    }
    const _Object = Object;
    let closure_0 = Object.assign({ XMLHttpRequest: true, eventTarget: true, requestAnimationFrame: true, setInterval: true, setTimeout: true, unregisterOriginalCallbacks: false }, {});
    let obj = {
      name: "BrowserApiErrors",
      setupOnce() {
          if (lib.setTimeout) {
            lib(outer1_1[0]).fill(lib(outer1_1[1]).WINDOW, "setTimeout", outer1_3);
            let obj = lib(outer1_1[0]);
          }
          if (lib.setInterval) {
            lib(outer1_1[0]).fill(lib(outer1_1[1]).WINDOW, "setInterval", outer1_3);
            let obj2 = lib(outer1_1[0]);
          }
          if (lib.requestAnimationFrame) {
            lib(outer1_1[0]).fill(lib(outer1_1[1]).WINDOW, "requestAnimationFrame", outer1_4);
            let obj3 = lib(outer1_1[0]);
          }
          let _XMLHttpRequest = lib.XMLHttpRequest;
          if (_XMLHttpRequest) {
            _XMLHttpRequest = "XMLHttpRequest" in lib(outer1_1[1]).WINDOW;
          }
          if (_XMLHttpRequest) {
            const _XMLHttpRequest2 = XMLHttpRequest;
            lib(outer1_1[0]).fill(XMLHttpRequest.prototype, "send", outer1_5);
            let obj4 = lib(outer1_1[0]);
          }
          const eventTarget = lib.eventTarget;
          if (eventTarget) {
            const _Array = Array;
            let arr = eventTarget;
            if (!Array.isArray(eventTarget)) {
              arr = outer1_2;
            }
            const item = arr.forEach((arg0) => {
              (function _wrapEventTarget(arg0, outer1_0) {
                const callback = arg0;
                let closure_1 = outer1_0;
                const tmp = callback(outer3_1[1]).WINDOW[arg0];
                let prototype;
                if (null != tmp) {
                  prototype = tmp.prototype;
                }
                if (null != prototype) {
                  if (null != prototype.hasOwnProperty) {
                    if (prototype.hasOwnProperty("addEventListener")) {
                      callback(outer3_1[0]).fill(prototype, "addEventListener", (arg0) => {
                        let closure_0 = arg0;
                        return () => { ... };
                      });
                      let obj = callback(outer3_1[0]);
                      callback(outer3_1[0]).fill(prototype, "removeEventListener", (arg0) => {
                        let closure_0 = arg0;
                        return () => { ... };
                      });
                    }
                  }
                }
              })(arg0, outer1_0);
            });
          }
        }
    };
    return obj;
  }
});
