// Module ID: 12664
// Function ID: 12665
// Name: sessionTimingIntegration
// Dependencies: [12585, 12627]

// Module 12664 (sessionTimingIntegration)
import setupIntegration from "setupIntegration" /* 12627 */;


export const sessionTimingIntegration = setupIntegration.defineIntegration(() => {
  let obj = _require(12585);
  _require = 1000 * obj.timestampInSeconds();
  obj = {
    name: "SessionTiming",
    processEvent(extra) {
      let obj = callback(closure_1_1[0]);
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
