// Module ID: 1081
// Function ID: 1082
// Name: browserSessionIntegration
// Dependencies: [817, 1028, 1072, 1033]

// Module 1081 (browserSessionIntegration)
import registerSpanErrorInstrumentation from "registerSpanErrorInstrumentation";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const browserSessionIntegration = registerSpanErrorInstrumentation.defineIntegration(() => ({
  name: "BrowserSession",
  setupOnce() {
    if (undefined !== callback(table[1]).WINDOW.document) {
      let tmpResult = tmp(tmp2[0]);
      tmpResult.startSession({ ignoreDuration: true });
      tmpResult = tmp(tmp2[0]);
      tmpResult.captureSession();
      const result = tmp(tmp2[3]).addHistoryInstrumentationHandler((arg0) => {
        const from = arg0.from;
        if (tmp) {
          callback(817).startSession({ ignoreDuration: true });
          const obj = callback(817);
          callback(817).captureSession();
          const obj2 = callback(817);
        }
      });
      const tmpResult1 = tmp(tmp2[3]);
    } else if (tmp(tmp2[2]).DEBUG_BUILD) {
      const debug = tmp(tmp2[0]).debug;
      debug.warn("Using the `browserSessionIntegration` in non-browser environments is not supported.");
    }
  }
}));
