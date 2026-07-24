// Module ID: 1057
// Function ID: 11314
// Name: browserSessionIntegration
// Dependencies: [794, 1004, 1048, 1009]

// Module 1057 (browserSessionIntegration)
import registerSpanErrorInstrumentation from "registerSpanErrorInstrumentation";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const browserSessionIntegration = registerSpanErrorInstrumentation.defineIntegration(() => ({
  name: "BrowserSession",
  setupOnce() {
    if (undefined !== outer1_0(outer1_1[1]).WINDOW.document) {
      let obj = outer1_0(outer1_1[0]);
      obj = { ignoreDuration: true };
      obj.startSession(obj);
      outer1_0(outer1_1[0]).captureSession();
      let obj3 = outer1_0(outer1_1[0]);
      const result = outer1_0(outer1_1[3]).addHistoryInstrumentationHandler((arg0) => {
        const from = arg0.from;
        if (tmp) {
          let obj = outer2_0(outer2_1[0]);
          obj = { ignoreDuration: true };
          obj.startSession(obj);
          outer2_0(outer2_1[0]).captureSession();
          const obj3 = outer2_0(outer2_1[0]);
        }
      });
      const obj4 = outer1_0(outer1_1[3]);
    } else if (outer1_0(outer1_1[2]).DEBUG_BUILD) {
      const debug = outer1_0(outer1_1[0]).debug;
      debug.warn("Using the `browserSessionIntegration` in non-browser environments is not supported.");
    }
  }
}));
