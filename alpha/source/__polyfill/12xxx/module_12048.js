// Module ID: 12048
// Function ID: 12049
// Dependencies: [12011, 12034, 12006, 12021]
// Exports: setMeasurement, timedEventsToMeasurements

// Module 12048
import _mod12011 from "module_12011" /* 12011 */;
import _mod12021 from "module_12021" /* 12021 */;
import _mod12034 from "module_12034" /* 12034 */;


export const setMeasurement = function setMeasurement(arg0, arg1, arg2) {
  let activeSpan = arg3;
  if (arg3 === undefined) {
    const obj = _mod12011;
    activeSpan = obj.getActiveSpan();
  }
  let rootSpan = activeSpan;
  if (rootSpan) {
    const obj3 = _mod12011;
    rootSpan = obj3.getRootSpan(activeSpan);
  }
  if (rootSpan) {
    if (_mod12034.DEBUG_BUILD) {
      const logger = tmp9(12006).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Measurement] Setting measurement on root span: " + arg0 + " = " + arg1 + " " + arg2);
    }
    const obj2 = {};
    obj2[_mod12021.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE] = arg1;
    obj2[_mod12021.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT] = arg2;
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
        const tmp2 = tmp[_mod12021.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT];
        const tmp3 = tmp[_mod12021.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE];
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
