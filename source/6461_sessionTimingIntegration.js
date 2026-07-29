// Module ID: 6461
// Function ID: 6462
// Name: sessionTimingIntegration
// Dependencies: [6382, 6424]

// Module 6461 (sessionTimingIntegration)
import setupIntegration from "setupIntegration";


export const sessionTimingIntegration = setupIntegration.defineIntegration(() => {
  let obj = _require(6382);
  _require = 1000 * obj.timestampInSeconds();
  obj = {
    name: "SessionTiming",
    processEvent(extra) {
      let obj = callback(outer1_1[0]);
      const result = 1000 * obj.timestampInSeconds();
      obj = {};
      const merged = Object.assign(extra);
      obj = {};
      const merged1 = Object.assign(extra.extra);
      obj["session:start"] = callback;
      obj["session:duration"] = result - callback;
      obj["session:end"] = result;
      obj.extra = obj;
      return obj;
    }
  };
  return obj;
});
