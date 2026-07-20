// Module ID: 838
// Function ID: 9315
// Name: setMeasurement
// Dependencies: []
// Exports: setMeasurement, timedEventsToMeasurements

// Module 838 (setMeasurement)
let closure_2 = require(dependencyMap[0]);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const setMeasurement = function setMeasurement(arg0, arg1, arg2) {
  if (arguments.length > 3) {
    if (undefined !== arguments[3]) {
      let activeSpan = arguments[3];
    }
    let rootSpan = activeSpan;
    if (activeSpan) {
      rootSpan = require(dependencyMap[1]).getRootSpan(activeSpan);
      const obj3 = require(dependencyMap[1]);
    }
    if (rootSpan) {
      if (require(dependencyMap[2]).DEBUG_BUILD) {
        const debug = require(dependencyMap[3]).debug;
        const _HermesInternal = HermesInternal;
        debug.log("[Measurement] Setting measurement on root span: " + arg0 + " = " + arg1 + " " + arg2);
      }
      rootSpan.addEvent(arg0, callback(callback({}, require(dependencyMap[4]).SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE, arg1), require(dependencyMap[4]).SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT, arg2));
      const tmp16 = callback({}, require(dependencyMap[4]).SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE, arg1);
    }
  }
  activeSpan = require(dependencyMap[1]).getActiveSpan();
};
export const timedEventsToMeasurements = function timedEventsToMeasurements(arr) {
  if (arr) {
    if (0 !== arr.length) {
      const obj = {};
      const require = obj;
      const item = arr.forEach((attributes) => {
        const tmp = attributes.attributes || {};
        let tmp4 = "string" === typeof tmp2;
        if (tmp4) {
          tmp4 = "number" === typeof tmp3;
        }
        if (tmp4) {
          const obj = { value: tmp3, unit: tmp2 };
          obj[attributes.name] = obj;
        }
      });
      return obj;
    }
  }
};
