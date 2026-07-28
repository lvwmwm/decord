// Module ID: 6440
// Function ID: 57668
// Name: sessionTimingIntegration
// Dependencies: [77, 6361, 6403]

// Module 6440 (sessionTimingIntegration)
import _defineProperty from "_defineProperty";
import setupIntegration from "setupIntegration";


export const sessionTimingIntegration = setupIntegration.defineIntegration(function _sessionTimingIntegration() {
  let obj = _require(6361);
  _require = 1000 * obj.timestampInSeconds();
  obj = {
    name: "SessionTiming",
    processEvent(extra) {
      let obj = callback(outer1_1[1]);
      const result = 1000 * obj.timestampInSeconds();
      obj = { extra: Object.assign({}, extra.extra, outer1_2(outer1_2(outer1_2({}, "session:start", callback), "session:duration", result - callback), "session:end", result)) };
      return Object.assign({}, extra, obj);
    }
  };
  return obj;
});
