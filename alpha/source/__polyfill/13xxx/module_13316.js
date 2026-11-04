// Module ID: 13316
// Function ID: 13317
// Dependencies: [13279, 13302, 13274, 13289]
// Exports: setMeasurement, timedEventsToMeasurements

// Module 13316
import _mod13279 from "module_13279" /* 13279 */;
import SEMANTIC_ATTRIBUTE_CACHE_HIT from "SEMANTIC_ATTRIBUTE_CACHE_HIT" /* 13289 */;
import _mod13302 from "module_13302" /* 13302 */;


export function setMeasurement(arg0, arg1, arg2) {
  let activeSpan = arg3;
  if (arg3 === undefined) {
    const obj = _mod13279;
    activeSpan = obj.getActiveSpan();
  }
  let rootSpan = activeSpan;
  if (rootSpan) {
    const obj3 = _mod13279;
    rootSpan = obj3.getRootSpan(activeSpan);
  }
  if (rootSpan) {
    if (_mod13302.DEBUG_BUILD) {
      const logger = tmp9(13274).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Measurement] Setting measurement on root span: " + arg0 + " = " + arg1 + " " + arg2);
    }
    const obj2 = {};
    obj2[SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE] = arg1;
    obj2[SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT] = arg2;
    rootSpan.addEvent(arg0, obj2);
  }
}
export function timedEventsToMeasurements(arr) {
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
}
