// Module ID: 7547
// Function ID: 7548
// Name: sessionTimingIntegration
// Dependencies: [7468, 7510]

// Module 7547 (sessionTimingIntegration)
import setupIntegration from "setupIntegration";


export const sessionTimingIntegration = setupIntegration.defineIntegration(() => {
  let obj = _require(7468);
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
