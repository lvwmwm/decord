// Module ID: 13097
// Function ID: 13098
// Name: sessionTimingIntegration
// Dependencies: [13018, 13060]

// Module 13097 (sessionTimingIntegration)
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 13018 */;
import module_13060 from "module_13060" /* 13060 */;

const require = globalThis.__r;
let _require;


export const sessionTimingIntegration = module_13060.defineIntegration(() => {
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
