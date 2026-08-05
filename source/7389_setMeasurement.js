// Module ID: 7389
// Function ID: 7390
// Name: setMeasurement
// Dependencies: [7352, 7375, 7347, 7362]

// Module 7389 (setMeasurement)
const require = arg1;
const dependencyMap = arg6;
arg5.setMeasurement = function setMeasurement(arg0, arg1, arg2) {
  let activeSpan = arg3;
  if (arg3 === undefined) {
    let obj = require(7352) /* spanTimeInputToSeconds */;
    activeSpan = obj.getActiveSpan();
  }
  let rootSpan = activeSpan;
  if (activeSpan) {
    rootSpan = require(7352) /* spanTimeInputToSeconds */.getRootSpan(activeSpan);
    const obj3 = require(7352) /* spanTimeInputToSeconds */;
  }
  if (rootSpan) {
    if (require(7375) /* __SENTRY_DEBUG__ */.DEBUG_BUILD) {
      const logger = tmp9(7347).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Measurement] Setting measurement on root span: " + arg0 + " = " + arg1 + " " + arg2);
    }
    obj = {};
    obj[require(7362).SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE] = arg1;
    obj[require(7362).SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT] = arg2;
    rootSpan.addEvent(arg0, obj);
  }
};
arg5.timedEventsToMeasurements = function timedEventsToMeasurements(arr) {
  if (arr) {
    if (0 !== arr.length) {
      let obj = {};
      const item = arr.forEach((attributes) => {
        const tmp = attributes.attributes || {};
        const tmp2 = tmp[obj(undefined, outer1_1[3]).SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT];
        const tmp3 = tmp[obj(undefined, outer1_1[3]).SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE];
        let tmp4 = typeof tmp2 === "string";
        if (typeof tmp2 === "string") {
          tmp4 = typeof tmp3 === "number";
        }
        if (tmp4) {
          obj = { value: null, unit: null };
          obj[0] = tmp3;
          obj[1] = tmp2;
          obj[attributes.name] = obj;
        }
      });
      return obj;
    }
  }
};
