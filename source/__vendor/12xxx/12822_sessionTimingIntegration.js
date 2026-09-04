// Module ID: 12822
// Function ID: 12823
// Name: sessionTimingIntegration
// Dependencies: [12743, 12785]

// Module 12822 (sessionTimingIntegration)
import setupIntegration from "setupIntegration" /* 12785 */;


export const sessionTimingIntegration = setupIntegration.defineIntegration(() => {
  let obj = _require(12743);
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
