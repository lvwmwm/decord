// Module ID: 11035
// Function ID: 11036
// Dependencies: [10998, 11021, 10993, 11008]
// Exports: setMeasurement, timedEventsToMeasurements

// Module 11035
import _mod10998 from "module_10998" /* 10998 */;
import _mod11008 from "module_11008" /* 11008 */;
import _mod11021 from "module_11021" /* 11021 */;


export const setMeasurement = function setMeasurement(arg0, arg1, arg2) {
  let activeSpan = arg3;
  if (arg3 === undefined) {
    const obj = _mod10998;
    activeSpan = obj.getActiveSpan();
  }
  let rootSpan = activeSpan;
  if (rootSpan) {
    const obj3 = _mod10998;
    rootSpan = obj3.getRootSpan(activeSpan);
  }
  if (rootSpan) {
    if (_mod11021.DEBUG_BUILD) {
      const logger = tmp9(10993).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Measurement] Setting measurement on root span: " + arg0 + " = " + arg1 + " " + arg2);
    }
    const obj2 = {};
    obj2[_mod11008.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE] = arg1;
    obj2[_mod11008.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT] = arg2;
    rootSpan.addEvent(arg0, obj2);
  }
};
export const timedEventsToMeasurements = function timedEventsToMeasurements(arr) {
  let tmp = arr;
  if (tmp) {
    if (0 !== arr.length) {
      let obj = {};
      const item = arr.forEach((attributes) => {
        const tmp = attributes.attributes || {};
        const tmp2 = tmp[_mod11008.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT];
        const tmp3 = tmp[_mod11008.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE];
        let tmp4 = typeof tmp2 === "string";
        if (typeof tmp2 === "string") {
          tmp4 = typeof tmp3 === "number";
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
