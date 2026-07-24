// Module ID: 1085
// Function ID: 12459
// Name: listenForSentryMessages
// Dependencies: [794, 1048, 1004, 1054, 1007]
// Exports: registerWebWorker

// Module 1085 (listenForSentryMessages)
import registerSpanErrorInstrumentation from "registerSpanErrorInstrumentation";

function listenForSentryMessages(addEventListener) {
  const listener = addEventListener.addEventListener("message", (data) => {
    data = data.data;
    let obj = outer1_0(outer1_1[0]);
    let flag = false;
    if (obj.isPlainObject(data)) {
      flag = false;
      if (true === data._sentryMessage) {
        if (!("_sentryDebugIds" in data)) {
          if (!tmp48) {
            flag = false;
          }
        }
        if ("_sentryDebugIds" in data) {
          let obj1 = outer1_0(outer1_1[0]);
          if (!obj1.isPlainObject(data._sentryDebugIds)) {
            flag = false;
          }
        }
        if ("_sentryModuleMetadata" in data) {
          if (!obj3.isPlainObject(data._sentryModuleMetadata)) {
            flag = false;
          }
          obj3 = outer1_0(outer1_1[0]);
        }
        flag = true;
        if ("_sentryWorkerError" in data) {
          flag = true;
          if (!obj4.isPlainObject(data._sentryWorkerError)) {
            flag = false;
          }
          obj4 = outer1_0(outer1_1[0]);
        }
      }
    }
    if (flag) {
      const result = data.stopImmediatePropagation();
      if (data.data._sentryDebugIds) {
        if (outer1_0(outer1_1[1]).DEBUG_BUILD) {
          const debug = outer1_0(outer1_1[0]).debug;
          debug.log("Sentry debugId web worker message received", data.data);
        }
        const _Object = Object;
        outer1_0(outer1_1[2]).WINDOW._sentryDebugIds = Object.assign({}, data.data._sentryDebugIds, outer1_0(outer1_1[2]).WINDOW._sentryDebugIds);
      }
      if (data.data._sentryModuleMetadata) {
        if (outer1_0(outer1_1[1]).DEBUG_BUILD) {
          const debug2 = outer1_0(outer1_1[0]).debug;
          debug2.log("Sentry module metadata web worker message received", data.data);
        }
        const _Object2 = Object;
        outer1_0(outer1_1[2]).WINDOW._sentryModuleMetadata = Object.assign({}, data.data._sentryModuleMetadata, outer1_0(outer1_1[2]).WINDOW._sentryModuleMetadata);
      }
      if (data.data._sentryWorkerError) {
        if (outer1_0(outer1_1[1]).DEBUG_BUILD) {
          const debug3 = outer1_0(outer1_1[0]).debug;
          debug3.log("Sentry worker rejection message received", data.data._sentryWorkerError);
        }
        const _sentryWorkerError = data.data._sentryWorkerError;
        const client = outer1_0(outer1_1[0]).getClient();
        if (client) {
          const stackParser = client.getOptions().stackParser;
          const attachStacktrace = client.getOptions().attachStacktrace;
          const reason = _sentryWorkerError.reason;
          if (obj7.isPrimitive(reason)) {
            let tmp33Result = tmp33(tmp34[3]);
            let result1 = tmp33Result._eventFromRejectionWithPrimitive(reason);
          } else {
            tmp33Result = tmp33(tmp34[4]);
            result1 = tmp33Result.eventFromUnknownInput(stackParser, reason, undefined, attachStacktrace, true);
          }
          result1.level = "error";
          if (_sentryWorkerError.filename) {
            const _Object3 = Object;
            obj = {};
            obj = { filename: _sentryWorkerError.filename };
            obj.worker = obj;
            result1.contexts = Object.assign({}, result1.contexts, obj);
          }
          obj7 = outer1_0(outer1_1[0]);
          obj1 = { originalException: reason, mechanism: { handled: false, type: "auto.browser.web_worker.onunhandledrejection" } };
          outer1_0(outer1_1[0]).captureEvent(result1, obj1);
          if (outer1_0(outer1_1[1]).DEBUG_BUILD) {
            const debug4 = outer1_0(outer1_1[0]).debug;
            debug4.log("Captured worker unhandled rejection", reason);
          }
          const obj12 = outer1_0(outer1_1[0]);
        }
        const obj5 = outer1_0(outer1_1[0]);
      }
    }
  });
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const INTEGRATION_NAME = "WebWorker";
export const registerWebWorker = function registerWebWorker(self) {
  const _self = self.self;
  let obj = { _sentryMessage: true };
  const _sentryDebugIds = _self._sentryDebugIds;
  let tmp;
  if (null != _sentryDebugIds) {
    tmp = _sentryDebugIds;
  }
  obj._sentryDebugIds = tmp;
  const _sentryModuleMetadata = _self._sentryModuleMetadata;
  let tmp2;
  if (null != _sentryModuleMetadata) {
    tmp2 = _sentryModuleMetadata;
  }
  obj._sentryModuleMetadata = tmp2;
  _self.postMessage(obj);
  const listener = _self.addEventListener("unhandledrejection", (arg0) => {
    const obj = { reason: _self(outer1_1[3])._getUnhandledRejectionError(arg0) };
    const _location = _self.location;
    let href;
    if (null != _location) {
      href = _location.href;
    }
    obj.filename = href;
    _self.postMessage({ _sentryMessage: true, _sentryWorkerError: obj });
    if (_self(outer1_1[1]).DEBUG_BUILD) {
      const debug = _self(outer1_1[0]).debug;
      debug.log("[Sentry Worker] Forwarding unhandled rejection to parent", obj);
    }
  });
  if (_self(1048).DEBUG_BUILD) {
    let debug = _self(794).debug;
    debug.log("[Sentry Worker] Registered worker with unhandled rejection handling");
  }
};
export const webWorkerIntegration = registerSpanErrorInstrumentation.defineIntegration((worker) => {
  worker = worker.worker;
  return {
    name: "WebWorker",
    setupOnce() {
      if (Array.isArray(worker)) {
        let items = tmp;
      } else {
        items = [tmp];
      }
      const item = items.forEach((arg0) => {
        outer2_2(arg0);
      });
    },
    addWorker(arg0) {
      outer1_2(arg0);
    }
  };
});
