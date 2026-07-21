// Module ID: 1070
// Function ID: 12292
// Name: isSpotlightInteraction
// Dependencies: []

// Module 1070 (isSpotlightInteraction)
function isSpotlightInteraction(type) {
  let spans = "transaction" === type.type;
  if (spans) {
    spans = type.spans;
  }
  if (spans) {
    const contexts = type.contexts;
    let trace;
    if (null != contexts) {
      trace = contexts.trace;
    }
    spans = trace;
  }
  if (spans) {
    spans = "ui.action.click" === type.contexts.trace.op;
  }
  if (spans) {
    const spans2 = type.spans;
    spans = spans2.some((description) => {
      description = description.description;
      let hasItem;
      if (null != description) {
        hasItem = description.includes("#sentry-spotlight");
      }
      return hasItem;
    });
  }
  return Boolean(spans);
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const _module = require(dependencyMap[1]);

export const INTEGRATION_NAME = "SpotlightBrowser";
export { isSpotlightInteraction };
export const spotlightBrowserIntegration = _module.defineIntegration(function _spotlightIntegration() {
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      const first = arguments[0];
    }
    let closure_0 = {}.sidecarUrl || "http://localhost:8969/stream";
    const obj = {
      name: "SpotlightBrowser",
      setup() {
          if (callback(closure_1[0]).DEBUG_BUILD) {
            const debug = callback(closure_1[1]).debug;
            debug.log("Using Sidecar URL", callback);
          }
        },
      processEvent(arg0) {
          let tmp = null;
          if (!callback2(arg0)) {
            tmp = arg0;
          }
          return tmp;
        },
      afterAllSetup(on) {
          function setupSidecarForwarding(on, closure_0) {
            const nativeImplementation = closure_0(nativeImplementation[2]).getNativeImplementation("fetch");
            let closure_2 = 0;
            on.on("beforeEnvelope", (arg0) => {
              if (closure_2 > 3) {
                const debug = arg1(callback[1]).debug;
                debug.warn("[Spotlight] Disabled Sentry -> Spotlight integration due to too many failed requests:", closure_2);
              } else {
                let obj = { method: "POST", body: arg1(callback[1]).serializeEnvelope(arg0) };
                obj = { Content-Type: "application/x-sentry-envelope" };
                obj.headers = obj;
                obj.mode = "cors";
                const obj2 = arg1(callback[1]);
                callback(arg1, obj).then((status) => {
                  let tmp = status.status >= 200;
                  if (tmp) {
                    tmp = status.status < 400;
                  }
                  if (tmp) {
                    let closure_2 = 0;
                  }
                }, (arg0) => {
                  closure_2 = closure_2 + 1;
                  const debug = callback(closure_1[1]).debug;
                  debug.error("Sentry SDK can't connect to Sidecar is it running? See: https://spotlightjs.com/sidecar/npx/", arg0);
                });
                const promise = callback(arg1, obj);
              }
            });
          }(on, closure_0);
        }
    };
    return obj;
  }
});
