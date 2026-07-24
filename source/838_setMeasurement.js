// Module ID: 838
// Function ID: 9321
// Name: setMeasurement
// Dependencies: [77, 796, 800, 801, 816]
// Exports: setMeasurement, timedEventsToMeasurements

// Module 838 (setMeasurement)
import _defineProperty from "_defineProperty";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const setMeasurement = function setMeasurement(arg0, arg1, arg2) {
  if (arguments.length > 3) {
    if (undefined !== arguments[3]) {
      let activeSpan = arguments[3];
    }
    let rootSpan = activeSpan;
    if (activeSpan) {
      rootSpan = require(796) /* convertSpanLinksForEnvelope */.getRootSpan(activeSpan);
      const obj3 = require(796) /* convertSpanLinksForEnvelope */;
    }
    if (rootSpan) {
      if (require(800).DEBUG_BUILD) {
        const debug = require(801) /* consoleSandbox */.debug;
        const _HermesInternal = HermesInternal;
        debug.log("[Measurement] Setting measurement on root span: " + arg0 + " = " + arg1 + " " + arg2);
      }
      rootSpan.addEvent(arg0, _defineProperty(_defineProperty({}, require(816).SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE, arg1), require(816).SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT, arg2));
      const tmp16 = _defineProperty({}, require(816).SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE, arg1);
    }
  }
  activeSpan = require(796) /* convertSpanLinksForEnvelope */.getActiveSpan();
};
export const timedEventsToMeasurements = function timedEventsToMeasurements(arr) {
  if (arr) {
    if (0 !== arr.length) {
      let obj = {};
      const item = arr.forEach((attributes) => {
        const tmp = attributes.attributes || {};
        const tmp2 = tmp[obj(undefined, outer1_1[4]).SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT];
        const tmp3 = tmp[obj(undefined, outer1_1[4]).SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE];
        let tmp4 = "string" === typeof tmp2;
        if (tmp4) {
          tmp4 = "number" === typeof tmp3;
        }
        if (tmp4) {
          obj = { value: tmp3, unit: tmp2 };
          obj[attributes.name] = obj;
        }
      });
      return obj;
    }
  }
};
