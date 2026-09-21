// Module ID: 978
// Function ID: 979
// Dependencies: [686, 941, 897, 947, 900]
// Exports: registerWebWorker

// Module 978
import _mod941 from "module_941" /* 941 */;
import _getUnhandledRejectionError from "_getUnhandledRejectionError" /* 947 */;
import registerSpanErrorInstrumentation from "module_686" /* 686 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const WebWorker = "WebWorker";

export const INTEGRATION_NAME = "WebWorker";
export const registerWebWorker = function registerWebWorker(self) {
  const _self = self.self;
  const _sentryDebugIds = _self._sentryDebugIds;
  let obj = { _sentryMessage: true, _sentryDebugIds, _sentryModuleMetadata: null };
  const _sentryModuleMetadata = _self._sentryModuleMetadata;
  obj._sentryModuleMetadata = _sentryModuleMetadata;
  _self.postMessage(obj);
  const listener = _self.addEventListener("unhandledrejection", (event) => {
    const obj = { reason: _getUnhandledRejectionError._getUnhandledRejectionError(event), filename: null };
    const _location = _self.location;
    let href;
    if (_location != null) {
      href = _location.href;
    }
    obj.filename = href;
    _self.postMessage({ _sentryMessage: true, _sentryWorkerError: obj });
    if (_mod941.DEBUG_BUILD) {
      const debug = tmp(686).debug;
      debug.log("[Sentry Worker] Forwarding unhandled rejection to parent", obj);
    }
  });
  if (_self(941).DEBUG_BUILD) {
    let debug = _self(686).debug;
    debug.log("[Sentry Worker] Registered worker with unhandled rejection handling");
  }
};
export const webWorkerIntegration = registerSpanErrorInstrumentation.defineIntegration((worker) => {
  worker = worker.worker;
  return {
    name: WebWorker,
    setupOnce() {
      let arr = worker;
      if (!Array.isArray(worker)) {
        const items = [worker];
        arr = items;
      }
      const item = arr.forEach((addEventListener) => {
        const listener = addEventListener.addEventListener("message", (event) => {
          const data = event.data;
          let flag = false;
          if (obj.isPlainObject(data)) {
            flag = false;
            if (true === data._sentryMessage) {
              if (!("_sentryDebugIds" in data)) {
                if (!tmp25) {
                  flag = false;
                }
              }
              if ("_sentryDebugIds" in data) {
                if (!tmpResult.isPlainObject(data._sentryDebugIds)) {
                  flag = false;
                }
                tmpResult = tmp(tmp2[0]);
              }
              if ("_sentryModuleMetadata" in data) {
                if (!tmpResult8.isPlainObject(data._sentryModuleMetadata)) {
                  flag = false;
                }
                tmpResult8 = tmp(tmp2[0]);
              }
              flag = true;
              if ("_sentryWorkerError" in data) {
                flag = true;
                if (!tmpResult9.isPlainObject(data._sentryWorkerError)) {
                  flag = false;
                }
                tmpResult9 = tmp(tmp2[0]);
              }
            }
          }
          if (flag) {
            const result = event.stopImmediatePropagation();
            if (event.data._sentryDebugIds) {
              if (tmp(tmp2[1]).DEBUG_BUILD) {
                const debug = tmp(tmp2[0]).debug;
                debug.log("Sentry debugId web worker message received", event.data);
              }
              const obj2 = {};
              const merged = Object.assign(event.data._sentryDebugIds);
              const merged1 = Object.assign(tmp(tmp2[2]).WINDOW._sentryDebugIds);
              tmp(tmp2[2]).WINDOW._sentryDebugIds = obj2;
            }
            if (event.data._sentryModuleMetadata) {
              if (tmp(tmp2[1]).DEBUG_BUILD) {
                const debug2 = tmp(tmp2[0]).debug;
                debug2.log("Sentry module metadata web worker message received", event.data);
              }
              const obj3 = {};
              const merged2 = Object.assign(event.data._sentryModuleMetadata);
              const merged3 = Object.assign(tmp(tmp2[2]).WINDOW._sentryModuleMetadata);
              tmp(tmp2[2]).WINDOW._sentryModuleMetadata = obj3;
            }
            if (event.data._sentryWorkerError) {
              if (tmp(tmp2[1]).DEBUG_BUILD) {
                const debug3 = tmp(tmp2[0]).debug;
                debug3.log("Sentry worker rejection message received", event.data._sentryWorkerError);
              }
              const _sentryWorkerError = event.data._sentryWorkerError;
              const client = tmp(tmp2[0]).getClient();
              if (client) {
                const stackParser = client.getOptions().stackParser;
                const attachStacktrace = client.getOptions().attachStacktrace;
                const reason = _sentryWorkerError.reason;
                if (tmpResult11.isPrimitive(reason)) {
                  let result1 = tmp(tmp2[3])._eventFromRejectionWithPrimitive(reason);
                  const tmpResult12 = tmp(tmp2[3]);
                } else {
                  const tmpResult13 = tmp(tmp2[4]);
                  result1 = tmpResult13.eventFromUnknownInput(stackParser, reason, undefined, attachStacktrace, true);
                }
                result1.level = "error";
                if (_sentryWorkerError.filename) {
                  const obj4 = {};
                  const merged4 = Object.assign(result1.contexts);
                  const obj5 = { filename: _sentryWorkerError.filename };
                  obj4.worker = obj5;
                  result1.contexts = obj4;
                }
                tmpResult11 = tmp(tmp2[0]);
                const obj6 = { originalException: reason, mechanism: { handled: false, type: "auto.browser.web_worker.onunhandledrejection" } };
                tmp(tmp2[0]).captureEvent(result1, obj6);
                if (tmp(tmp2[1]).DEBUG_BUILD) {
                  const debug4 = tmp(tmp2[0]).debug;
                  debug4.log("Captured worker unhandled rejection", reason);
                }
                const tmpResult14 = tmp(tmp2[0]);
              }
              const tmpResult10 = tmp(tmp2[0]);
            }
          }
        });
      });
    },
    addWorker(addEventListener) {
      const listener = addEventListener.addEventListener("message", (event) => {
        const data = event.data;
        let flag = false;
        if (obj.isPlainObject(data)) {
          flag = false;
          if (true === data._sentryMessage) {
            if (!("_sentryDebugIds" in data)) {
              if (!tmp25) {
                flag = false;
              }
            }
            if ("_sentryDebugIds" in data) {
              if (!tmpResult.isPlainObject(data._sentryDebugIds)) {
                flag = false;
              }
              tmpResult = tmp(tmp2[0]);
            }
            if ("_sentryModuleMetadata" in data) {
              if (!tmpResult8.isPlainObject(data._sentryModuleMetadata)) {
                flag = false;
              }
              tmpResult8 = tmp(tmp2[0]);
            }
            flag = true;
            if ("_sentryWorkerError" in data) {
              flag = true;
              if (!tmpResult9.isPlainObject(data._sentryWorkerError)) {
                flag = false;
              }
              tmpResult9 = tmp(tmp2[0]);
            }
          }
        }
        if (flag) {
          const result = event.stopImmediatePropagation();
          if (event.data._sentryDebugIds) {
            if (tmp(tmp2[1]).DEBUG_BUILD) {
              const debug = tmp(tmp2[0]).debug;
              debug.log("Sentry debugId web worker message received", event.data);
            }
            const obj2 = {};
            const merged = Object.assign(event.data._sentryDebugIds);
            const merged1 = Object.assign(tmp(tmp2[2]).WINDOW._sentryDebugIds);
            tmp(tmp2[2]).WINDOW._sentryDebugIds = obj2;
          }
          if (event.data._sentryModuleMetadata) {
            if (tmp(tmp2[1]).DEBUG_BUILD) {
              const debug2 = tmp(tmp2[0]).debug;
              debug2.log("Sentry module metadata web worker message received", event.data);
            }
            const obj3 = {};
            const merged2 = Object.assign(event.data._sentryModuleMetadata);
            const merged3 = Object.assign(tmp(tmp2[2]).WINDOW._sentryModuleMetadata);
            tmp(tmp2[2]).WINDOW._sentryModuleMetadata = obj3;
          }
          if (event.data._sentryWorkerError) {
            if (tmp(tmp2[1]).DEBUG_BUILD) {
              const debug3 = tmp(tmp2[0]).debug;
              debug3.log("Sentry worker rejection message received", event.data._sentryWorkerError);
            }
            const _sentryWorkerError = event.data._sentryWorkerError;
            const client = tmp(tmp2[0]).getClient();
            if (client) {
              const stackParser = client.getOptions().stackParser;
              const attachStacktrace = client.getOptions().attachStacktrace;
              const reason = _sentryWorkerError.reason;
              if (tmpResult11.isPrimitive(reason)) {
                let result1 = tmp(tmp2[3])._eventFromRejectionWithPrimitive(reason);
                const tmpResult12 = tmp(tmp2[3]);
              } else {
                const tmpResult13 = tmp(tmp2[4]);
                result1 = tmpResult13.eventFromUnknownInput(stackParser, reason, undefined, attachStacktrace, true);
              }
              result1.level = "error";
              if (_sentryWorkerError.filename) {
                const obj4 = {};
                const merged4 = Object.assign(result1.contexts);
                const obj5 = { filename: _sentryWorkerError.filename };
                obj4.worker = obj5;
                result1.contexts = obj4;
              }
              tmpResult11 = tmp(tmp2[0]);
              const obj6 = { originalException: reason, mechanism: { handled: false, type: "auto.browser.web_worker.onunhandledrejection" } };
              tmp(tmp2[0]).captureEvent(result1, obj6);
              if (tmp(tmp2[1]).DEBUG_BUILD) {
                const debug4 = tmp(tmp2[0]).debug;
                debug4.log("Captured worker unhandled rejection", reason);
              }
              const tmpResult14 = tmp(tmp2[0]);
            }
            const tmpResult10 = tmp(tmp2[0]);
          }
        }
      });
    }
  };
});
