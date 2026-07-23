// Module ID: 7329
// Function ID: 59097
// Name: sessionTimingIntegration
// Dependencies: [77, 7250, 7292]

// Module 7329 (sessionTimingIntegration)
import _defineProperty from "_defineProperty";
import setupIntegration from "setupIntegration";


export const sessionTimingIntegration = setupIntegration.defineIntegration(function _sessionTimingIntegration() {
  let obj = _require(7250);
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
