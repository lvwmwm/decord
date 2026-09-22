// Module ID: 13023
// Function ID: 13024
// Name: sessionTimingIntegration
// Dependencies: [12944, 12986]

// Module 13023 (sessionTimingIntegration)
import _mod12944 from "module_12944" /* 12944 */;
import setupIntegration from "module_12986" /* 12986 */;

const require = globalThis.__r;


export const sessionTimingIntegration = setupIntegration.defineIntegration(() => {
  _require = 1000 * require("module_12944").timestampInSeconds();
  return {
    name: "SessionTiming",
    processEvent(extra) {
      const result = 1000 * _mod12944.timestampInSeconds();
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
