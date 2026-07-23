// Module ID: 1070
// Function ID: 12293
// Name: isSpotlightInteraction
// Dependencies: [1048, 794, 1009]

// Module 1070 (isSpotlightInteraction)
import registerSpanErrorInstrumentation from "registerSpanErrorInstrumentation";

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

export const INTEGRATION_NAME = "SpotlightBrowser";
export { isSpotlightInteraction };
export const spotlightBrowserIntegration = registerSpanErrorInstrumentation.defineIntegration(function _spotlightIntegration() {
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      const first = arguments[0];
    }
    let closure_0 = {}.sidecarUrl || "http://localhost:8969/stream";
    let obj = {
      name: "SpotlightBrowser",
      setup() {
          if (callback(outer1_1[0]).DEBUG_BUILD) {
            const debug = callback(outer1_1[1]).debug;
            debug.log("Using Sidecar URL", callback);
          }
        },
      processEvent(arg0) {
          let tmp = null;
          if (!outer1_2(arg0)) {
            tmp = arg0;
          }
          return tmp;
        },
      afterAllSetup(on) {
          (function setupSidecarForwarding(on, closure_0) {
            const callback = closure_0;
            const nativeImplementation = callback(outer2_1[2]).getNativeImplementation("fetch");
            let c2 = 0;
            on.on("beforeEnvelope", (arg0) => {
              if (c2 > 3) {
                let debug = callback(outer3_1[1]).debug;
                debug.warn("[Spotlight] Disabled Sentry -> Spotlight integration due to too many failed requests:", c2);
              } else {
                let obj = { method: "POST", body: callback(outer3_1[1]).serializeEnvelope(arg0) };
                obj = { "Content-Type": "application/x-sentry-envelope" };
                obj.headers = obj;
                obj.mode = "cors";
                const obj2 = callback(outer3_1[1]);
                callback2(callback, obj).then((status) => {
                  let tmp = status.status >= 200;
                  if (tmp) {
                    tmp = status.status < 400;
                  }
                  if (tmp) {
                    const outer1_2 = 0;
                  }
                }, (arg0) => {
                  outer1_2 = outer1_2 + 1;
                  const debug = callback(outer4_1[1]).debug;
                  debug.error("Sentry SDK can't connect to Sidecar is it running? See: https://spotlightjs.com/sidecar/npx/", arg0);
                });
                const promise = callback2(callback, obj);
              }
            });
          })(on, closure_0);
        }
    };
    return obj;
  }
});
