// Module ID: 725
// Function ID: 726
// Name: logSpanEnd
// Dependencies: [687, 683, 688]
// Exports: logSpanEnd, logSpanStart

// Module 725 (logSpanEnd)
import TRACE_FLAG_NONE from "TRACE_FLAG_NONE" /* 683 */;
import DEBUG_BUILD from "DEBUG_BUILD" /* 687 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export function logSpanEnd(self) {
  if (DEBUG_BUILD.DEBUG_BUILD) {
    const tmpResult = TRACE_FLAG_NONE;
    const spanToJSONResult = tmpResult.spanToJSON(self);
    const description = spanToJSONResult.description;
    let str = "< unknown name >";
    if (undefined !== description) {
      str = description;
    }
    const op = spanToJSONResult.op;
    let str2 = "< unknown op >";
    if (undefined !== op) {
      str2 = op;
    }
    const spanId = self.spanContext().spanId;
    let str3 = "";
    const tmpResult2 = TRACE_FLAG_NONE;
    if (tmpResult2.getRootSpan(self) === self) {
      str3 = "root ";
    }
    const _HermesInternal = HermesInternal;
    const combined = "[Tracing] Finishing \"" + str2 + "\" " + str3 + "span \"" + str + "\" with ID " + spanId;
    const debug = tmp(688).debug;
    debug.log(combined);
  }
}
export function logSpanStart(sentrySpan) {
  let description2;
  let op2;
  if (DEBUG_BUILD.DEBUG_BUILD) {
    const tmpResult = TRACE_FLAG_NONE;
    const spanToJSONResult = tmpResult.spanToJSON(sentrySpan);
    const description = spanToJSONResult.description;
    let str = "< unknown name >";
    if (undefined !== description) {
      str = description;
    }
    const op = spanToJSONResult.op;
    let str2 = "< unknown op >";
    if (undefined !== op) {
      str2 = op;
    }
    const parent_span_id = spanToJSONResult.parent_span_id;
    const spanId = sentrySpan.spanContext().spanId;
    const tmpResult4 = TRACE_FLAG_NONE;
    const spanIsSampledResult = tmpResult4.spanIsSampled(sentrySpan);
    const tmpResult5 = TRACE_FLAG_NONE;
    const rootSpan = tmpResult5.getRootSpan(sentrySpan);
    let str3 = "unsampled";
    if (spanIsSampledResult) {
      str3 = "sampled";
    }
    let str5 = "";
    if (rootSpan === sentrySpan) {
      str5 = "root ";
    }
    const _HermesInternal = HermesInternal;
    const _HermesInternal2 = HermesInternal;
    const combined = "[Tracing] Starting " + str3 + " " + str5 + "span";
    const items = ["op: " + str2, , ];
    const _HermesInternal3 = HermesInternal;
    items[1] = "name: " + str;
    const _HermesInternal4 = HermesInternal;
    items[2] = "ID: " + spanId;
    if (parent_span_id) {
      const _HermesInternal5 = HermesInternal;
      items.push("parent ID: " + parent_span_id);
    }
    if (rootSpan !== sentrySpan) {
      const tmpResult6 = TRACE_FLAG_NONE;
      ({ op: op2, description: description2 } = tmpResult6.spanToJSON(rootSpan));
      const _HermesInternal6 = HermesInternal;
      tmpResult6.spanToJSON(rootSpan);
      items.push("root ID: " + rootSpan.spanContext().spanId);
      if (op2) {
        const _HermesInternal7 = HermesInternal;
        items.push("root op: " + op2);
      }
      if (description2) {
        const _HermesInternal8 = HermesInternal;
        items.push("root description: " + description2);
      }
    }
    const debug = tmp(688).debug;
    const _HermesInternal9 = HermesInternal;
    debug.log("" + combined + "\n  " + items.join("\n  "));
  }
}
