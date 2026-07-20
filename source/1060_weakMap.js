// Module ID: 1060
// Function ID: 11320
// Name: weakMap
// Dependencies: []

// Module 1060 (weakMap)
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const weakMap = new WeakMap();
const _module = require(dependencyMap[0]);

export const reportingObserverIntegration = _module.defineIntegration(function _reportingObserverIntegration() {
  function handler(items) {
    if (map.has(obj.getClient())) {
      function _loop(item10015) {
        item10015(closure_1[0]).withScope((setExtra) => {
          setExtra.setExtra("url", setExtra.url);
          let str = "No details available";
          const combined = "ReportingObserver [" + setExtra.type + "]";
          if (setExtra.body) {
            const obj = {};
            for (const key10020 in closure_0.body) {
              let tmp12 = key10020;
              let tmp13 = closure_0;
              obj[key10020] = closure_0.body[key10020];
            }
            setExtra.setExtra("body", obj);
            if ("crash" === setExtra.type) {
              const body = setExtra.body;
              const items = [body.crashId || "", body.reason || ""];
              const str5 = items.join(" ");
              const tmp9 = body.crashId || "";
              str = items.join(" ").trim() || "No details available";
              const tmp10 = items.join(" ").trim() || "No details available";
            } else {
              str = setExtra.body.message || "No details available";
              const tmp7 = setExtra.body.message || "No details available";
            }
          }
          setExtra(closure_1[0]).captureMessage("" + combined + ": " + str);
        });
      }
      for (const item10015 of arg0) {
        let tmp2 = _loop;
        let _loopResult = _loop(item10015);
      }
    }
  }
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      const first = arguments[0];
    }
    let closure_0 = {}.types || [null, null, null];
    const obj = {
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
          const result = map.set(arg0, true);
        }
    };
    return obj;
  }
});
