// Module ID: 1060
// Function ID: 11326
// Name: weakMap
// Dependencies: [794]

// Module 1060 (weakMap)
import registerSpanErrorInstrumentation from "registerSpanErrorInstrumentation";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const weakMap = new WeakMap();

export const reportingObserverIntegration = registerSpanErrorInstrumentation.defineIntegration(function _reportingObserverIntegration() {
  function handler(items) {
    if (outer1_2.has(obj.getClient())) {
      function _loop(item10015) {
        const callback = item10015;
        callback(handler[0]).withScope((setExtra) => {
          setExtra.setExtra("url", item10015.url);
          let str = "No details available";
          const combined = "ReportingObserver [" + item10015.type + "]";
          if (item10015.body) {
            const obj = {};
            for (const key10020 in closure_0.body) {
              let tmp12 = key10020;
              let tmp13 = item10015;
              obj[key10020] = item10015.body[key10020];
              continue;
            }
            setExtra.setExtra("body", obj);
            if ("crash" === item10015.type) {
              const body = item10015.body;
              const items = [body.crashId || "", body.reason || ""];
              const str5 = items.join(" ");
              const tmp9 = body.crashId || "";
              str = items.join(" ").trim() || "No details available";
              const tmp10 = items.join(" ").trim() || "No details available";
            } else {
              str = item10015.body.message || "No details available";
              const tmp7 = item10015.body.message || "No details available";
            }
          }
          item10015(handler[0]).captureMessage("" + combined + ": " + str);
        });
      }
      for (const item10015 of arg0) {
        let tmp2 = _loop;
        let _loopResult = _loop(item10015);
        continue;
      }
    }
  }
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      const first = arguments[0];
    }
    let closure_0 = {}.types || ["crash", "deprecation", "intervention"];
    let obj = {
      name: "ReportingObserver",
      setupOnce() {
          let obj = callback(handler[0]);
          if (obj.supportsReportingObserver()) {
            const ReportingObserver = callback(handler[0]).GLOBAL_OBJ.ReportingObserver;
            obj = { buffered: true, types: callback };
            const prototype = ReportingObserver.prototype;
            const reportingObserver = new ReportingObserver(handler, obj);
            reportingObserver.observe();
          }
        },
      setup(arg0) {
          const result = outer1_2.set(arg0, true);
        }
    };
    return obj;
  }
});
