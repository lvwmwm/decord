// Module ID: 986
// Function ID: 987
// Dependencies: [693, 949, 905, 955, 908]
// Exports: registerWebWorker

// Module 986
import _mod949 from "module_949" /* 949 */;
import _eventFromRejectionWithPrimitive from "_eventFromRejectionWithPrimitive" /* 955 */;
import registerSpanErrorInstrumentation from "module_693" /* 693 */;

let closure_0, worker;

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
      const debug = tmp(693).debug;
      debug.log("[Sentry Worker] Forwarding unhandled rejection to parent", obj);
    }
  });
  const tmp3 = _self;
  if (_self(949).DEBUG_BUILD) {
    let debug = tmp3(693).debug;
    debug.log("[Sentry Worker] Registered worker with unhandled rejection handling");
  }
};
export const webWorkerIntegration = registerSpanErrorInstrumentation.defineIntegration((worker) => {
  const f85494 = (event) => {
    let obj5;
    const data = event.data;
    let obj = closure_0(closure_1[0]);
    let flag = false;
    if (obj.isPlainObject(data)) {
      flag = false;
      if (true === data._sentryMessage) {
        if (!("_sentryDebugIds" in data)) {
          if (!("_sentryModuleMetadata" in data)) {
            if (!("_sentryWorkerError" in data)) {
              flag = false;
            }
          }
        }
        if ("_sentryDebugIds" in data) {
          const tmp2Result = closure_0(closure_1[0]);
          if (!tmp2Result.isPlainObject(data._sentryDebugIds)) {
            flag = false;
          }
        }
        if ("_sentryModuleMetadata" in data) {
          const tmp2Result8 = closure_0(closure_1[0]);
          if (!tmp2Result8.isPlainObject(data._sentryModuleMetadata)) {
            flag = false;
          }
        }
        if (!("_sentryWorkerError" in data)) {
          flag = true;
          if ("_sentryWasmImages" in data) {
            const _Array = Array;
            if (!Array.isArray(data._sentryWasmImages)) {
              flag = false;
            } else {
              const _sentryWasmImages = data._sentryWasmImages;
              flag = true;
            }
          }
        } else {
          flag = false;
          closure_0(closure_1[0]);
        }
      }
    }
    if (flag) {
      const result = event.stopImmediatePropagation();
      if (event.data._sentryDebugIds) {
        if (closure_0(closure_1[1]).DEBUG_BUILD) {
          const debug = tmp2(tmp3[0]).debug;
          debug.log("Sentry debugId web worker message received", event.data);
        }
        const obj2 = {};
        const WINDOW = tmp2(tmp3[2]).WINDOW;
        const merged = Object.assign(event.data._sentryDebugIds);
        const merged1 = Object.assign(tmp2(tmp3[2]).WINDOW._sentryDebugIds);
        WINDOW._sentryDebugIds = obj2;
      }
      if (event.data._sentryModuleMetadata) {
        if (closure_0(closure_1[1]).DEBUG_BUILD) {
          const debug2 = tmp2(tmp3[0]).debug;
          debug2.log("Sentry module metadata web worker message received", event.data);
        }
        const obj3 = {};
        const WINDOW2 = tmp2(tmp3[2]).WINDOW;
        const merged2 = Object.assign(event.data._sentryModuleMetadata);
        const merged3 = Object.assign(tmp2(tmp3[2]).WINDOW._sentryModuleMetadata);
        WINDOW2._sentryModuleMetadata = obj3;
      }
      if (event.data._sentryWasmImages) {
        if (closure_0(closure_1[1]).DEBUG_BUILD) {
          const debug3 = tmp2(tmp3[0]).debug;
          debug3.log("Sentry WASM images web worker message received", event.data);
        }
        const tmp17 = closure_0(closure_1[2]).WINDOW._sentryWasmImages || [];
        closure_0 = tmp17;
        const _sentryWasmImages1 = event.data._sentryWasmImages;
        const found = _sentryWasmImages1.filter((code_file) => {
          closure_0 = code_file;
          const obj = closure_2_0(closure_2_1[0]);
          const tmp = obj.isPlainObject(code_file) && typeof code_file.code_file === "string" && !closure_0.some((code_file) => code_file.code_file === code_file.code_file);
          return tmp;
        });
        const items = [];
        const WINDOW3 = tmp2(tmp3[2]).WINDOW;
        HermesBuiltin.arraySpread(items, found, HermesBuiltin.arraySpread(items, tmp17, 0));
        WINDOW3._sentryWasmImages = items;
      }
      if (event.data._sentryWorkerError) {
        if (closure_0(closure_1[1]).DEBUG_BUILD) {
          const debug4 = tmp2(tmp3[0]).debug;
          debug4.log("Sentry worker rejection message received", event.data._sentryWorkerError);
        }
        const _sentryWorkerError = event.data._sentryWorkerError;
        const tmp2Result10 = closure_0(closure_1[0]);
        const client = tmp2Result10.getClient();
        if (client) {
          let result1;
          const stackParser = client.getOptions().stackParser;
          const attachStacktrace = client.getOptions().attachStacktrace;
          const reason = _sentryWorkerError.reason;
          const tmp2Result11 = closure_0(closure_1[0]);
          if (tmp2Result11.isPrimitive(reason)) {
            const tmp2Result12 = closure_0(closure_1[3]);
            result1 = tmp2Result12._eventFromRejectionWithPrimitive(reason);
          } else {
            const tmp2Result13 = closure_0(closure_1[4]);
            result1 = tmp2Result13.eventFromUnknownInput(stackParser, reason, undefined, attachStacktrace, true);
          }
          result1.level = "error";
          if (_sentryWorkerError.filename) {
            const obj4 = { worker: obj5 };
            const merged4 = Object.assign(result1.contexts);
            obj5 = { filename: _sentryWorkerError.filename };
            result1.contexts = obj4;
          }
          const obj6 = { originalException: reason, mechanism: { handled: false, type: "auto.browser.web_worker.onunhandledrejection" } };
          const tmp2Result14 = closure_0(closure_1[0]);
          tmp2Result14.captureEvent(result1, obj6);
          if (closure_0(closure_1[1]).DEBUG_BUILD) {
            const debug5 = tmp2(tmp3[0]).debug;
            debug5.log("Captured worker unhandled rejection", reason);
          }
        }
      }
    }
  };
  worker = worker.worker;
  let obj = {
    name: WebWorker,
    setupOnce() {
      let tmp = worker;
      let arr = worker;
      if (!Array.isArray(worker)) {
        let items = [tmp];
        arr = items;
      }
      const item = arr.forEach((addEventListener) => {
        const listener = addEventListener.addEventListener("message", f85494);
      });
    },
    addWorker(addEventListener) {
      const listener = addEventListener.addEventListener("message", f85494);
    }
  };
  return obj;
});
