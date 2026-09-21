// Module ID: 13142
// Function ID: 13143
// Name: sessionTimingIntegration
// Dependencies: [13063, 13105]

// Module 13142 (sessionTimingIntegration)
import _mod13063 from "module_13063" /* 13063 */;
import setupIntegration from "module_13105" /* 13105 */;

const require = globalThis.__r;


export const sessionTimingIntegration = setupIntegration.defineIntegration(() => {
  _require = 1000 * require("module_13063").timestampInSeconds();
  return {
    name: "SessionTiming",
    processEvent(extra) {
      const result = 1000 * _mod13063.timestampInSeconds();
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
