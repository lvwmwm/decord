// Module ID: 12562
// Function ID: 12563
// Dependencies: [12525, 12548, 12520, 12535]
// Exports: setMeasurement, timedEventsToMeasurements

// Module 12562
import _mod12525 from "module_12525" /* 12525 */;
import SEMANTIC_ATTRIBUTE_CACHE_HIT from "SEMANTIC_ATTRIBUTE_CACHE_HIT" /* 12535 */;
import _mod12548 from "module_12548" /* 12548 */;


export const setMeasurement = function setMeasurement(arg0, arg1, arg2) {
  let activeSpan = arg3;
  if (arg3 === undefined) {
    const obj = _mod12525;
    activeSpan = obj.getActiveSpan();
  }
  let rootSpan = activeSpan;
  if (rootSpan) {
    const obj3 = _mod12525;
    rootSpan = obj3.getRootSpan(activeSpan);
  }
  if (rootSpan) {
    if (_mod12548.DEBUG_BUILD) {
      const logger = tmp9(12520).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Measurement] Setting measurement on root span: " + arg0 + " = " + arg1 + " " + arg2);
    }
    const obj2 = {};
    obj2[SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE] = arg1;
    obj2[SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT] = arg2;
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
        const tmp2 = tmp[SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT];
        const tmp3 = tmp[SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE];
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
