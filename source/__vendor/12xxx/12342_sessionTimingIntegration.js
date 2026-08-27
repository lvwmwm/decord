// Module ID: 12342
// Function ID: 12343
// Name: sessionTimingIntegration
// Dependencies: [12263, 12305]

// Module 12342 (sessionTimingIntegration)
import setupIntegration from "setupIntegration" /* 12305 */;


export const sessionTimingIntegration = setupIntegration.defineIntegration(() => {
  let obj = _require(12263);
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
