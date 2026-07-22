// Module ID: 1085
// Function ID: 12457
// Name: listenForSentryMessages
// Dependencies: []
// Exports: registerWebWorker

// Module 1085 (listenForSentryMessages)
function listenForSentryMessages(addEventListener) {
  const listener = addEventListener.addEventListener("message", (data) => {
    data = data.data;
    let obj = callback(closure_1[0]);
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
          let obj1 = callback(closure_1[0]);
          if (!obj1.isPlainObject(data._sentryDebugIds)) {
            flag = false;
          }
        }
        if ("_sentryModuleMetadata" in data) {
          if (!obj3.isPlainObject(data._sentryModuleMetadata)) {
            flag = false;
          }
          const obj3 = callback(closure_1[0]);
        }
        flag = true;
        if ("_sentryWorkerError" in data) {
          flag = true;
          if (!obj4.isPlainObject(data._sentryWorkerError)) {
            flag = false;
          }
          const obj4 = callback(closure_1[0]);
        }
      }
    }
    if (flag) {
      const result = data.stopImmediatePropagation();
      if (data.data._sentryDebugIds) {
        if (callback(closure_1[1]).DEBUG_BUILD) {
          const debug = callback(closure_1[0]).debug;
          debug.log("Sentry debugId web worker message received", data.data);
        }
        const _Object = Object;
        callback(closure_1[2]).WINDOW._sentryDebugIds = Object.assign({}, data.data._sentryDebugIds, callback(closure_1[2]).WINDOW._sentryDebugIds);
      }
      if (data.data._sentryModuleMetadata) {
        if (callback(closure_1[1]).DEBUG_BUILD) {
          const debug2 = callback(closure_1[0]).debug;
          debug2.log("Sentry module metadata web worker message received", data.data);
        }
        const _Object2 = Object;
        callback(closure_1[2]).WINDOW._sentryModuleMetadata = Object.assign({}, data.data._sentryModuleMetadata, callback(closure_1[2]).WINDOW._sentryModuleMetadata);
      }
      if (data.data._sentryWorkerError) {
        if (callback(closure_1[1]).DEBUG_BUILD) {
          const debug3 = callback(closure_1[0]).debug;
          debug3.log("Sentry worker rejection message received", data.data._sentryWorkerError);
        }
        const _sentryWorkerError = data.data._sentryWorkerError;
        const client = callback(closure_1[0]).getClient();
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
          const obj7 = callback(closure_1[0]);
          obj1 = { originalException: reason, mechanism: { priority: 1902051331, "Bool(false)": null } };
          callback(closure_1[0]).captureEvent(result1, obj1);
          if (callback(closure_1[1]).DEBUG_BUILD) {
            const debug4 = callback(closure_1[0]).debug;
            debug4.log("Captured worker unhandled rejection", reason);
          }
          const obj12 = callback(closure_1[0]);
        }
        const obj5 = callback(closure_1[0]);
      }
    }
  });
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const _module = require(dependencyMap[0]);

export const INTEGRATION_NAME = "WebWorker";
export const registerWebWorker = function registerWebWorker(self) {
  const _self = self.self;
  const require = _self;
  const obj = { _sentryMessage: true };
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
    const obj = { reason: _self(closure_1[3])._getUnhandledRejectionError(arg0) };
    const _location = _self.location;
    let href;
    if (null != _location) {
      href = _location.href;
    }
    obj.filename = href;
    _self.postMessage({ _sentryMessage: true, _sentryWorkerError: obj });
    if (_self(closure_1[1]).DEBUG_BUILD) {
      const debug = _self(closure_1[0]).debug;
      debug.log("[Sentry Worker] Forwarding unhandled rejection to parent", obj);
    }
  });
  if (require(dependencyMap[1]).DEBUG_BUILD) {
    const debug = require(dependencyMap[0]).debug;
    debug.log("[Sentry Worker] Registered worker with unhandled rejection handling");
  }
};
export const webWorkerIntegration = _module.defineIntegration((worker) => {
  const require = worker.worker;
  return {
    name: "WebWorker",
    setupOnce() {
      if (Array.isArray(worker)) {
        let items = tmp;
      } else {
        items = [tmp];
      }
      const item = items.forEach((arg0) => {
        callback(arg0);
      });
    },
    addWorker(arg0) {
      callback(arg0);
    }
  };
});
