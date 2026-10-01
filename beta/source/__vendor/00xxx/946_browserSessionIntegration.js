// Module ID: 946
// Function ID: 947
// Name: browserSessionIntegration
// Dependencies: [682, 893, 937, 898]

// Module 946 (browserSessionIntegration)
import _mod893 from "module_893" /* 893 */;
import registerSpanErrorInstrumentation from "module_682" /* 682 */;

let tmp;
const _addMeasureSpans = tmp(898);
const _mod937 = tmp(937);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const browserSessionIntegration = registerSpanErrorInstrumentation.defineIntegration(() => {
  let obj = {
    name: "BrowserSession",
    setupOnce() {
      let tmp = require;
      if (undefined !== _mod893.WINDOW.document) {
        const tmpResult = registerSpanErrorInstrumentation;
        tmpResult.startSession({ ignoreDuration: true });
        const tmpResult3 = registerSpanErrorInstrumentation;
        tmpResult3.captureSession();
        const tmpResult4 = _addMeasureSpans;
        const result = tmpResult4.addHistoryInstrumentationHandler((arg0) => {
          const from = arg0.from;
          const tmp = undefined !== from && from !== arg0.to;
          if (tmp) {
            const obj = closure_1_0(closure_1_1[0]);
            obj.startSession({ ignoreDuration: true });
            const obj2 = closure_1_0(closure_1_1[0]);
            obj2.captureSession();
          }
        });
      } else if (_mod937.DEBUG_BUILD) {
        const debug = tmp(tmp2[0]).debug;
        debug.warn("Using the `browserSessionIntegration` in non-browser environments is not supported.");
      }
    }
  };
  return obj;
});
