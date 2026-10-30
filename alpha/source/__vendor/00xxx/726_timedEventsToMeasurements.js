// Module ID: 726
// Function ID: 727
// Name: timedEventsToMeasurements
// Dependencies: [683, 687, 688, 703]
// Exports: setMeasurement, timedEventsToMeasurements

// Module 726 (timedEventsToMeasurements)
import TRACE_FLAG_NONE from "TRACE_FLAG_NONE" /* 683 */;
import _mod687 from "module_687" /* 687 */;
import GEN_AI_CONVERSATION_ID_ATTRIBUTE from "GEN_AI_CONVERSATION_ID_ATTRIBUTE" /* 703 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export function setMeasurement(arg0, arg1, arg2) {
  let activeSpan = arg3;
  if (arg3 === undefined) {
    const obj = TRACE_FLAG_NONE;
    activeSpan = obj.getActiveSpan();
  }
  let rootSpan = activeSpan;
  if (rootSpan) {
    const obj3 = TRACE_FLAG_NONE;
    rootSpan = obj3.getRootSpan(activeSpan);
  }
  if (rootSpan) {
    if (_mod687.DEBUG_BUILD) {
      const debug = tmp9(688).debug;
      const _HermesInternal = HermesInternal;
      debug.log("[Measurement] Setting measurement on root span: " + arg0 + " = " + arg1 + " " + arg2);
    }
    const obj2 = {};
    obj2[GEN_AI_CONVERSATION_ID_ATTRIBUTE.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE] = arg1;
    obj2[GEN_AI_CONVERSATION_ID_ATTRIBUTE.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT] = arg2;
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
        const tmp2 = tmp[GEN_AI_CONVERSATION_ID_ATTRIBUTE.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT];
        const tmp3 = tmp[GEN_AI_CONVERSATION_ID_ATTRIBUTE.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE];
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
