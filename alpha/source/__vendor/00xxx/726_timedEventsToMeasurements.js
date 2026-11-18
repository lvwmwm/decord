// Module ID: 726
// Function ID: 727
// Name: timedEventsToMeasurements
// Dependencies: [683, 687, 688, 703]
// Exports: setMeasurement, timedEventsToMeasurements

// Module 726 (timedEventsToMeasurements)
import TRACE_FLAG_NONE from "TRACE_FLAG_NONE" /* 683 */;
import DEBUG_BUILD from "DEBUG_BUILD" /* 687 */;
import GEN_AI_CONVERSATION_ID_ATTRIBUTE from "GEN_AI_CONVERSATION_ID_ATTRIBUTE" /* 703 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export function setMeasurement(time_to_full_display, value, millisecond, activeSpan) {
  if (activeSpan === undefined) {
    const obj = TRACE_FLAG_NONE;
    activeSpan = obj.getActiveSpan();
  }
  let rootSpan = activeSpan;
  if (rootSpan) {
    const obj3 = TRACE_FLAG_NONE;
    rootSpan = obj3.getRootSpan(activeSpan);
  }
  if (rootSpan) {
    if (DEBUG_BUILD.DEBUG_BUILD) {
      const debug = tmp9(688).debug;
      const _HermesInternal = HermesInternal;
      debug.log("[Measurement] Setting measurement on root span: " + time_to_full_display + " = " + value + " " + millisecond);
    }
    const obj2 = {};
    obj2[GEN_AI_CONVERSATION_ID_ATTRIBUTE.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE] = value;
    obj2[GEN_AI_CONVERSATION_ID_ATTRIBUTE.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT] = millisecond;
    rootSpan.addEvent(time_to_full_display, obj2);
  }
}
export function timedEventsToMeasurements(_events) {
  let tmp = _events;
  if (tmp) {
    if (0 !== _events.length) {
      let obj = {};
      const item = _events.forEach((attributes) => {
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
