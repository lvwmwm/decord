// Module ID: 6389
// Function ID: 57218
// Name: setMeasurement
// Dependencies: [77, 6352, 6375, 6347, 6362]
// Exports: setMeasurement, timedEventsToMeasurements

// Module 6389 (setMeasurement)
import _defineProperty from "_defineProperty";


export const setMeasurement = function setMeasurement(arg0, arg1, arg2) {
  if (arguments.length > 3) {
    if (undefined !== arguments[3]) {
      let activeSpan = arguments[3];
    }
    let rootSpan = activeSpan;
    if (activeSpan) {
      rootSpan = require(6352) /* spanTimeInputToSeconds */.getRootSpan(activeSpan);
      const obj3 = require(6352) /* spanTimeInputToSeconds */;
    }
    if (rootSpan) {
      if (require(6375).DEBUG_BUILD) {
        const logger = require(6347) /* consoleSandbox */.logger;
        const _HermesInternal = HermesInternal;
        logger.log("[Measurement] Setting measurement on root span: " + arg0 + " = " + arg1 + " " + arg2);
      }
      rootSpan.addEvent(arg0, _defineProperty(_defineProperty({}, require(6362).SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE, arg1), require(6362).SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT, arg2));
      const tmp16 = _defineProperty({}, require(6362).SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE, arg1);
    }
  }
  activeSpan = require(6352) /* spanTimeInputToSeconds */.getActiveSpan();
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
