// Module ID: 726
// Function ID: 727
// Name: logSpanEnd
// Dependencies: [688, 684, 689]
// Exports: logSpanEnd, logSpanStart

// Module 726 (logSpanEnd)
import _mod688 from "module_688" /* 688 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const logSpanEnd = function logSpanEnd(spanContext) {
  if (_mod688.DEBUG_BUILD) {
    const spanToJSONResult = tmp(684).spanToJSON(spanContext);
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
    const spanId = spanContext.spanContext().spanId;
    const tmpResult = tmp(684);
    let str3 = "";
    if (tmpResult2.getRootSpan(spanContext) === spanContext) {
      str3 = "root ";
    }
    const _HermesInternal = HermesInternal;
    const combined = "[Tracing] Finishing \"" + str2 + "\" " + str3 + "span \"" + str + "\" with ID " + spanId;
    const debug = tmp(689).debug;
    debug.log(combined);
    tmpResult2 = tmp(684);
  }
};
export const logSpanStart = function logSpanStart(spanContext) {
  if (_mod688.DEBUG_BUILD) {
    const spanToJSONResult = tmp(684).spanToJSON(spanContext);
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
    const tmpResult = tmp(684);
    const tmpResult4 = tmp(684);
    const spanIsSampledResult = tmp(684).spanIsSampled(spanContext);
    const rootSpan = tmp(684).getRootSpan(spanContext);
    let str3 = "unsampled";
    if (spanIsSampledResult) {
      str3 = "sampled";
    }
    let str5 = "";
    if (rootSpan === spanContext) {
      str5 = "root ";
    }
    const _HermesInternal = HermesInternal;
    const _HermesInternal2 = HermesInternal;
    const combined = "[Tracing] Starting " + str3 + " " + str5 + "span";
    const items = ["op: " + str2, , ];
    const _HermesInternal3 = HermesInternal;
    items[1] = "name: " + str;
    const _HermesInternal4 = HermesInternal;
    items[2] = "ID: " + spanContext.spanContext().spanId;
    if (parent_span_id) {
      const _HermesInternal5 = HermesInternal;
      items.push("parent ID: " + parent_span_id);
    }
    if (rootSpan !== spanContext) {
      const tmpResult6 = tmp(684);
      ({ op: op2, description: description2 } = tmp(684).spanToJSON(rootSpan));
      const _HermesInternal6 = HermesInternal;
      items.push("root ID: " + rootSpan.spanContext().spanId);
      if (op2) {
        const _HermesInternal7 = HermesInternal;
        items.push("root op: " + op2);
      }
      if (description2) {
        const _HermesInternal8 = HermesInternal;
        items.push("root description: " + description2);
      }
      const spanToJSONResult1 = tmp(684).spanToJSON(rootSpan);
    }
    const debug = tmp(689).debug;
    const _HermesInternal9 = HermesInternal;
    debug.log("" + combined + "\n  " + items.join("\n  "));
    const tmpResult5 = tmp(684);
  }
};
