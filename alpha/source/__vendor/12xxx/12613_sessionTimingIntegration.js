// Module ID: 12613
// Function ID: 12614
// Name: sessionTimingIntegration
// Dependencies: [12534, 12576]

// Module 12613 (sessionTimingIntegration)
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 12534 */;
import module_12576 from "module_12576" /* 12576 */;

const require = globalThis.__r;
let _require;


export const sessionTimingIntegration = module_12576.defineIntegration(() => {
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
