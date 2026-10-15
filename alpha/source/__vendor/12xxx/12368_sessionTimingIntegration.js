// Module ID: 12368
// Function ID: 12369
// Name: sessionTimingIntegration
// Dependencies: [12289, 12331]

// Module 12368 (sessionTimingIntegration)
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 12289 */;
import module_12331 from "module_12331" /* 12331 */;

const require = globalThis.__r;
let _require;


export const sessionTimingIntegration = module_12331.defineIntegration(() => {
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
