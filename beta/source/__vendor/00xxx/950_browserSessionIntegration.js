// Module ID: 950
// Function ID: 951
// Name: browserSessionIntegration
// Dependencies: [686, 897, 941, 902]

// Module 950 (browserSessionIntegration)
import ignoreNextOnError from "ignoreNextOnError" /* 897 */;
import registerSpanErrorInstrumentation from "module_686" /* 686 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const browserSessionIntegration = registerSpanErrorInstrumentation.defineIntegration(() => ({
  name: "BrowserSession",
  setupOnce() {
    if (undefined !== ignoreNextOnError.WINDOW.document) {
      tmp(tmp2[0]).startSession({ ignoreDuration: true });
      const tmpResult = tmp(tmp2[0]);
      tmp(tmp2[0]).captureSession();
      const tmpResult3 = tmp(tmp2[0]);
      const result = tmp(tmp2[3]).addHistoryInstrumentationHandler((arg0) => {
        const from = arg0.from;
        if (tmp) {
          closure_1_0(686).startSession({ ignoreDuration: true });
          const obj = closure_1_0(686);
          closure_1_0(686).captureSession();
          const obj2 = closure_1_0(686);
        }
      });
      const tmpResult4 = tmp(tmp2[3]);
    } else if (tmp(tmp2[2]).DEBUG_BUILD) {
      const debug = tmp(tmp2[0]).debug;
      debug.warn("Using the `browserSessionIntegration` in non-browser environments is not supported.");
    }
  }
}));
