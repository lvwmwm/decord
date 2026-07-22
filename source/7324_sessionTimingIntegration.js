// Module ID: 7324
// Function ID: 59063
// Name: sessionTimingIntegration
// Dependencies: []

// Module 7324 (sessionTimingIntegration)
let closure_2 = require(dependencyMap[0]);
const _module = require(dependencyMap[2]);

export const sessionTimingIntegration = _module.defineIntegration(function _sessionTimingIntegration() {
  let obj = callback(dependencyMap[1]);
  const callback = 1000 * obj.timestampInSeconds();
  obj = {
    name: "SessionTiming",
    processEvent(extra) {
      let obj = callback(closure_1[1]);
      const result = 1000 * obj.timestampInSeconds();
      obj = { extra: Object.assign({}, extra.extra, callback2(callback2(callback2({}, "session:start", callback), "session:duration", result - callback), "session:end", result)) };
      return Object.assign({}, extra, obj);
    }
  };
  return obj;
});
