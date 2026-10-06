// Module ID: 958
// Function ID: 959
// Name: browserSessionIntegration
// Dependencies: [694, 905, 949, 910]

// Module 958 (browserSessionIntegration)
import _mod905 from "module_905" /* 905 */;
import registerSpanErrorInstrumentation from "module_694" /* 694 */;

let tmp;
const _addMeasureSpans = tmp(910);
const _mod949 = tmp(949);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const browserSessionIntegration = registerSpanErrorInstrumentation.defineIntegration(() => {
  let obj = {
    name: "BrowserSession",
    setupOnce() {
      let tmp = require;
      if (undefined !== _mod905.WINDOW.document) {
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
      } else if (_mod949.DEBUG_BUILD) {
        const debug = tmp(tmp2[0]).debug;
        debug.warn("Using the `browserSessionIntegration` in non-browser environments is not supported.");
      }
    }
  };
  return obj;
});
