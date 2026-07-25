// Module ID: 6353
// Function ID: 57128
// Name: setMeasurement
// Dependencies: [77, 6316, 6339, 6311, 6326]
// Exports: setMeasurement, timedEventsToMeasurements

// Module 6353 (setMeasurement)
import _defineProperty from "_defineProperty";


export const setMeasurement = function setMeasurement(arg0, arg1, arg2) {
  if (arguments.length > 3) {
    if (undefined !== arguments[3]) {
      let activeSpan = arguments[3];
    }
    let rootSpan = activeSpan;
    if (activeSpan) {
      rootSpan = require(6316) /* spanTimeInputToSeconds */.getRootSpan(activeSpan);
      const obj3 = require(6316) /* spanTimeInputToSeconds */;
    }
    if (rootSpan) {
      if (require(6339).DEBUG_BUILD) {
        const logger = require(6311) /* consoleSandbox */.logger;
        const _HermesInternal = HermesInternal;
        logger.log("[Measurement] Setting measurement on root span: " + arg0 + " = " + arg1 + " " + arg2);
      }
      rootSpan.addEvent(arg0, _defineProperty(_defineProperty({}, require(6326).SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE, arg1), require(6326).SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT, arg2));
      const tmp16 = _defineProperty({}, require(6326).SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE, arg1);
    }
  }
  activeSpan = require(6316) /* spanTimeInputToSeconds */.getActiveSpan();
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
