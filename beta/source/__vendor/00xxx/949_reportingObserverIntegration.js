// Module ID: 949
// Function ID: 950
// Name: reportingObserverIntegration
// Dependencies: [682]

// Module 949 (reportingObserverIntegration)
import registerSpanErrorInstrumentation from "module_682" /* 682 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const weakMap = new WeakMap();

export const reportingObserverIntegration = registerSpanErrorInstrumentation.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  function handler(arg0) {
    const has = weakMap.has;
    let obj = types(handler[0]);
    if (has(obj.getClient())) {
      let tmp = arg0;
      function _loop(iter) {
        let obj = iter(closure_1[0]);
        obj.withScope((setExtra) => {
          setExtra.setExtra("url", iter.url);
          let str = "No details available";
          const combined = "ReportingObserver [" + iter.type + "]";
          const tmp = iter;
          if (iter.body) {
            const obj = {};
            for (const key10019 in tmp.body) {
              obj[key10019] = iter.body[key10019];
              continue;
            }
            setExtra.setExtra("body", obj);
            if ("crash" === iter.type) {
              const body = tmp5.body;
              const items = [, ];
              const tmp7 = body.crashId || "";
              items[0] = tmp7;
              items[1] = body.reason || "";
              const str5 = items.join(" ");
              str = str5.trim() || "No details available";
              str5.trim() || "No details available";
            } else {
              str = iter.body.message || "No details available";
            }
          }
          const obj2 = types(handler[0]);
          obj2.captureMessage("" + combined + ": " + str);
        });
      }
      let iter = arg0[Symbol.iterator]();
      while (iter !== undefined) {
        let _loopResult = _loop(iter.next());
        continue;
      }
    }
  }
  const types = obj.types || ["crash", "deprecation", "intervention"];
  let obj2 = {
    name: "ReportingObserver",
    setupOnce() {
      const obj = registerSpanErrorInstrumentation;
      if (obj.supportsReportingObserver()) {
        const self = this;
        const self2 = this;
        const obj2 = { buffered: true, types };
        const reportingObserver = new registerSpanErrorInstrumentation.GLOBAL_OBJ.ReportingObserver(handler, obj2);
        reportingObserver.observe();
      }
    },
    setup(arg0) {
      const result = weakMap.set(arg0, true);
    }
  };
  return obj2;
});
