// Module ID: 13367
// Function ID: 13368
// Name: sessionTimingIntegration
// Dependencies: [13288, 13330]

// Module 13367 (sessionTimingIntegration)
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 13288 */;
import module_13330 from "module_13330" /* 13330 */;

const require = globalThis.__r;
let _require;


export const sessionTimingIntegration = module_13330.defineIntegration(() => {
  let closure_0;
  let obj = require("_browserPerformanceTimeOriginMode");
  _require = 1000 * obj.timestampInSeconds();
  let obj2 = {
    name: "SessionTiming",
    processEvent(extra) {
      let obj3;
      const obj = _browserPerformanceTimeOriginMode;
      const result = 1000 * obj.timestampInSeconds();
      const obj2 = { extra: obj3 };
      const merged = Object.assign(extra);
      obj3 = { "session:start": closure_0, "session:duration": result - closure_0, "session:end": result };
      const merged1 = Object.assign(extra.extra);
      return obj2;
    }
  };
  return obj2;
});
