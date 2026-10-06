// Module ID: 986
// Function ID: 987
// Dependencies: [694, 949, 905, 955, 908]
// Exports: registerWebWorker

// Module 986
import _mod949 from "module_949" /* 949 */;
import _eventFromRejectionWithPrimitive from "_eventFromRejectionWithPrimitive" /* 955 */;
import registerSpanErrorInstrumentation from "module_694" /* 694 */;

let worker;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const WebWorker = "WebWorker";

export const INTEGRATION_NAME = "WebWorker";
export const registerWebWorker = function registerWebWorker(self) {
  let _sentryModuleMetadata;
  const _self = self.self;
  const _sentryDebugIds = _self._sentryDebugIds;
  const postMessage = _self.postMessage;
  let obj = { _sentryMessage: true, _sentryDebugIds, _sentryModuleMetadata };
  _sentryModuleMetadata = _self._sentryModuleMetadata;
  postMessage(obj);
  const listener = _self.addEventListener("unhandledrejection", (event) => {
    let href;
    let obj2;
    const obj = { reason: obj2._getUnhandledRejectionError(event), filename: href };
    const _location = _self.location;
    href = undefined;
    obj2 = _eventFromRejectionWithPrimitive;
    const obj3 = _self;
    if (_location != null) {
      href = _location.href;
    }
    obj3.postMessage({ _sentryMessage: true, _sentryWorkerError: obj });
    if (_mod949.DEBUG_BUILD) {
      const debug = tmp(694).debug;
      debug.log("[Sentry Worker] Forwarding unhandled rejection to parent", obj);
    }
  });
  const tmp3 = _self;
  if (_self(949).DEBUG_BUILD) {
    let debug = tmp3(694).debug;
    debug.log("[Sentry Worker] Registered worker with unhandled rejection handling");
  }
};
export const webWorkerIntegration = registerSpanErrorInstrumentation.defineIntegration((worker) => {
  worker = worker.worker;
  let obj = {
    name: WebWorker,
    setupOnce() {
      const tmp = worker;
      let arr = worker;
      if (!Array.isArray(worker)) {
        const items = [tmp];
        arr = items;
      }
      const item = arr.forEach((addEventListener) => {
        const listener = addEventListener.addEventListener("message", (event) => {
          let obj5;
          const data = event.data;
          let flag = false;
          const obj = closure_1_0(closure_1_1[0]);
          if (obj.isPlainObject(data)) {
            flag = false;
            if (true === data._sentryMessage) {
              if (!("_sentryDebugIds" in data)) {
                if (!("_sentryModuleMetadata" in data)) {
                  flag = false;
                }
              }
              if ("_sentryDebugIds" in data) {
                const tmpResult = closure_1_0(closure_1_1[0]);
                if (!tmpResult.isPlainObject(data._sentryDebugIds)) {
                  flag = false;
                }
              }
              if ("_sentryModuleMetadata" in data) {
                const tmpResult8 = closure_1_0(closure_1_1[0]);
                if (!tmpResult8.isPlainObject(data._sentryModuleMetadata)) {
                  flag = false;
                }
              }
              flag = true;
              if ("_sentryWorkerError" in data) {
                flag = true;
                const tmpResult9 = closure_1_0(closure_1_1[0]);
                if (!tmpResult9.isPlainObject(data._sentryWorkerError)) {
                  flag = false;
                }
              }
            }
          }
          if (flag) {
            const result = event.stopImmediatePropagation();
            if (event.data._sentryDebugIds) {
              if (closure_1_0(closure_1_1[1]).DEBUG_BUILD) {
                const debug = tmp(tmp2[0]).debug;
                debug.log("Sentry debugId web worker message received", event.data);
              }
              const obj2 = {};
              const WINDOW = tmp(tmp2[2]).WINDOW;
              const merged = Object.assign(event.data._sentryDebugIds);
              const merged1 = Object.assign(tmp(tmp2[2]).WINDOW._sentryDebugIds);
              WINDOW._sentryDebugIds = obj2;
            }
            if (event.data._sentryModuleMetadata) {
              if (closure_1_0(closure_1_1[1]).DEBUG_BUILD) {
                const debug2 = tmp(tmp2[0]).debug;
                debug2.log("Sentry module metadata web worker message received", event.data);
              }
              const obj3 = {};
              const WINDOW2 = tmp(tmp2[2]).WINDOW;
              const merged2 = Object.assign(event.data._sentryModuleMetadata);
              const merged3 = Object.assign(tmp(tmp2[2]).WINDOW._sentryModuleMetadata);
              WINDOW2._sentryModuleMetadata = obj3;
            }
            if (event.data._sentryWorkerError) {
              if (closure_1_0(closure_1_1[1]).DEBUG_BUILD) {
                const debug3 = tmp(tmp2[0]).debug;
                debug3.log("Sentry worker rejection message received", event.data._sentryWorkerError);
              }
              const _sentryWorkerError = event.data._sentryWorkerError;
              const tmpResult10 = closure_1_0(closure_1_1[0]);
              const client = tmpResult10.getClient();
              if (client) {
                let result1;
                const stackParser = client.getOptions().stackParser;
                const attachStacktrace = client.getOptions().attachStacktrace;
                const reason = _sentryWorkerError.reason;
                const tmpResult11 = closure_1_0(closure_1_1[0]);
                if (tmpResult11.isPrimitive(reason)) {
                  const tmpResult12 = closure_1_0(closure_1_1[3]);
                  result1 = tmpResult12._eventFromRejectionWithPrimitive(reason);
                } else {
                  const tmpResult13 = closure_1_0(closure_1_1[4]);
                  result1 = tmpResult13.eventFromUnknownInput(stackParser, reason, undefined, attachStacktrace, true);
                }
                result1.level = "error";
                if (_sentryWorkerError.filename) {
                  const obj4 = { worker: obj5 };
                  const merged4 = Object.assign(result1.contexts);
                  obj5 = { filename: _sentryWorkerError.filename };
                  result1.contexts = obj4;
                }
                const obj6 = { originalException: reason, mechanism: { handled: false, type: "auto.browser.web_worker.onunhandledrejection" } };
                const tmpResult14 = closure_1_0(closure_1_1[0]);
                tmpResult14.captureEvent(result1, obj6);
                if (closure_1_0(closure_1_1[1]).DEBUG_BUILD) {
                  const debug4 = tmp(tmp2[0]).debug;
                  debug4.log("Captured worker unhandled rejection", reason);
                }
              }
            }
          }
        });
      });
    },
    addWorker(addEventListener) {
      const listener = addEventListener.addEventListener("message", (event) => {
        let obj5;
        const data = event.data;
        let flag = false;
        const obj = closure_1_0(closure_1_1[0]);
        if (obj.isPlainObject(data)) {
          flag = false;
          if (true === data._sentryMessage) {
            if (!("_sentryDebugIds" in data)) {
              if (!("_sentryModuleMetadata" in data)) {
                flag = false;
              }
            }
            if ("_sentryDebugIds" in data) {
              const tmpResult = closure_1_0(closure_1_1[0]);
              if (!tmpResult.isPlainObject(data._sentryDebugIds)) {
                flag = false;
              }
            }
            if ("_sentryModuleMetadata" in data) {
              const tmpResult8 = closure_1_0(closure_1_1[0]);
              if (!tmpResult8.isPlainObject(data._sentryModuleMetadata)) {
                flag = false;
              }
            }
            flag = true;
            if ("_sentryWorkerError" in data) {
              flag = true;
              const tmpResult9 = closure_1_0(closure_1_1[0]);
              if (!tmpResult9.isPlainObject(data._sentryWorkerError)) {
                flag = false;
              }
            }
          }
        }
        if (flag) {
          const result = event.stopImmediatePropagation();
          if (event.data._sentryDebugIds) {
            if (closure_1_0(closure_1_1[1]).DEBUG_BUILD) {
              const debug = tmp(tmp2[0]).debug;
              debug.log("Sentry debugId web worker message received", event.data);
            }
            const obj2 = {};
            const WINDOW = tmp(tmp2[2]).WINDOW;
            const merged = Object.assign(event.data._sentryDebugIds);
            const merged1 = Object.assign(tmp(tmp2[2]).WINDOW._sentryDebugIds);
            WINDOW._sentryDebugIds = obj2;
          }
          if (event.data._sentryModuleMetadata) {
            if (closure_1_0(closure_1_1[1]).DEBUG_BUILD) {
              const debug2 = tmp(tmp2[0]).debug;
              debug2.log("Sentry module metadata web worker message received", event.data);
            }
            const obj3 = {};
            const WINDOW2 = tmp(tmp2[2]).WINDOW;
            const merged2 = Object.assign(event.data._sentryModuleMetadata);
            const merged3 = Object.assign(tmp(tmp2[2]).WINDOW._sentryModuleMetadata);
            WINDOW2._sentryModuleMetadata = obj3;
          }
          if (event.data._sentryWorkerError) {
            if (closure_1_0(closure_1_1[1]).DEBUG_BUILD) {
              const debug3 = tmp(tmp2[0]).debug;
              debug3.log("Sentry worker rejection message received", event.data._sentryWorkerError);
            }
            const _sentryWorkerError = event.data._sentryWorkerError;
            const tmpResult10 = closure_1_0(closure_1_1[0]);
            const client = tmpResult10.getClient();
            if (client) {
              let result1;
              const stackParser = client.getOptions().stackParser;
              const attachStacktrace = client.getOptions().attachStacktrace;
              const reason = _sentryWorkerError.reason;
              const tmpResult11 = closure_1_0(closure_1_1[0]);
              if (tmpResult11.isPrimitive(reason)) {
                const tmpResult12 = closure_1_0(closure_1_1[3]);
                result1 = tmpResult12._eventFromRejectionWithPrimitive(reason);
              } else {
                const tmpResult13 = closure_1_0(closure_1_1[4]);
                result1 = tmpResult13.eventFromUnknownInput(stackParser, reason, undefined, attachStacktrace, true);
              }
              result1.level = "error";
              if (_sentryWorkerError.filename) {
                const obj4 = { worker: obj5 };
                const merged4 = Object.assign(result1.contexts);
                obj5 = { filename: _sentryWorkerError.filename };
                result1.contexts = obj4;
              }
              const obj6 = { originalException: reason, mechanism: { handled: false, type: "auto.browser.web_worker.onunhandledrejection" } };
              const tmpResult14 = closure_1_0(closure_1_1[0]);
              tmpResult14.captureEvent(result1, obj6);
              if (closure_1_0(closure_1_1[1]).DEBUG_BUILD) {
                const debug4 = tmp(tmp2[0]).debug;
                debug4.log("Captured worker unhandled rejection", reason);
              }
            }
          }
        }
      });
    }
  };
  return obj;
});
