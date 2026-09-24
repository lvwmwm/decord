// Module ID: 13178
// Function ID: 13179
// Name: sessionTimingIntegration
// Dependencies: [13099, 13141]

// Module 13178 (sessionTimingIntegration)
import _mod13099 from "module_13099" /* 13099 */;
import setupIntegration from "module_13141" /* 13141 */;

const require = globalThis.__r;


export const sessionTimingIntegration = setupIntegration.defineIntegration(() => {
  _require = 1000 * require("module_13099").timestampInSeconds();
  return {
    name: "SessionTiming",
    processEvent(extra) {
      const result = 1000 * _mod13099.timestampInSeconds();
      const obj2 = {};
      const merged = Object.assign(extra);
      const obj3 = {};
      const merged1 = Object.assign(extra.extra);
      obj3["session:start"] = closure_0;
      obj3["session:duration"] = result - closure_0;
      obj3["session:end"] = result;
      obj2.extra = obj3;
      return obj2;
    }
  };
});
