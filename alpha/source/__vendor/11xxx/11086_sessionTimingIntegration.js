// Module ID: 11086
// Function ID: 11087
// Name: sessionTimingIntegration
// Dependencies: [11007, 11049]

// Module 11086 (sessionTimingIntegration)
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 11007 */;
import module_11049 from "module_11049" /* 11049 */;

const require = globalThis.__r;
let _require;


export const sessionTimingIntegration = module_11049.defineIntegration(() => {
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
