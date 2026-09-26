// Module ID: 13172
// Function ID: 13173
// Name: sessionTimingIntegration
// Dependencies: [13093, 13135]

// Module 13172 (sessionTimingIntegration)
import _mod13093 from "module_13093" /* 13093 */;
import setupIntegration from "module_13135" /* 13135 */;

const require = globalThis.__r;


export const sessionTimingIntegration = setupIntegration.defineIntegration(() => {
  _require = 1000 * require("module_13093").timestampInSeconds();
  return {
    name: "SessionTiming",
    processEvent(extra) {
      const result = 1000 * _mod13093.timestampInSeconds();
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
