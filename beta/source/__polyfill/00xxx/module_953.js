// Module ID: 953
// Function ID: 954
// Dependencies: [686]

// Module 953
import registerSpanErrorInstrumentation from "module_686" /* 686 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const weakMap = new WeakMap();

export const reportingObserverIntegration = registerSpanErrorInstrumentation.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  function handler(arg0) {
    if (map.has(obj.getClient())) {
      function _loop(iter) {
        iter(686).withScope((setExtra) => {
          setExtra.setExtra("url", iter.url);
          let str = "No details available";
          const combined = "ReportingObserver [" + iter.type + "]";
          if (iter.body) {
            const obj = {};
            for (const key10019 in iter.body) {
              obj[key10019] = iter.body[key10019];
              continue;
            }
            setExtra.setExtra("body", obj);
            if ("crash" === iter.type) {
              const body = tmp5.body;
              const items = [body.crashId || "", body.reason || ""];
              const str5 = items.join(" ");
              const tmp7 = body.crashId || "";
              str = items.join(" ").trim() || "No details available";
              const tmp8 = items.join(" ").trim() || "No details available";
            } else {
              str = tmp5.body.message || "No details available";
              const tmp6 = tmp5.body.message || "No details available";
            }
          }
          types(686).captureMessage("" + combined + ": " + str);
        });
      }
      const iter = arg0[Symbol.iterator]();
      while (iter !== undefined) {
        let _loopResult = _loop(iter.next());
        continue;
      }
    }
  }
  const types = obj.types || ["crash", "deprecation", "intervention"];
  return {
    name: "ReportingObserver",
    setupOnce() {
      if (obj.supportsReportingObserver()) {
        const obj2 = { buffered: true, types };
        const reportingObserver = new registerSpanErrorInstrumentation.GLOBAL_OBJ.ReportingObserver(handler, obj2);
        reportingObserver.observe();
      }
    },
    setup(arg0) {
      const result = map.set(arg0, true);
    }
  };
});
