// Module ID: 1057
// Function ID: 11308
// Name: browserSessionIntegration
// Dependencies: []

// Module 1057 (browserSessionIntegration)
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const _module = require(dependencyMap[0]);

export const browserSessionIntegration = _module.defineIntegration(() => ({
  name: "BrowserSession",
  setupOnce() {
    if (undefined !== callback(closure_1[1]).WINDOW.document) {
      let obj = callback(closure_1[0]);
      obj = { ignoreDuration: true };
      obj.startSession(obj);
      callback(closure_1[0]).captureSession();
      const obj3 = callback(closure_1[0]);
      const result = callback(closure_1[3]).addHistoryInstrumentationHandler((arg0) => {
        const from = arg0.from;
        if (tmp) {
          let obj = callback(closure_1[0]);
          obj = { ignoreDuration: true };
          obj.startSession(obj);
          callback(closure_1[0]).captureSession();
          const obj3 = callback(closure_1[0]);
        }
      });
      const obj4 = callback(closure_1[3]);
    } else if (callback(closure_1[2]).DEBUG_BUILD) {
      const debug = callback(closure_1[0]).debug;
      debug.warn("Using the `browserSessionIntegration` in non-browser environments is not supported.");
    }
  }
}));
