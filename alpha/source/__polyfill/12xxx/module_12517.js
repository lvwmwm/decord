// Module ID: 12517
// Function ID: 12518
// Dependencies: [12507, 12484, 12479]
// Exports: logSpanEnd, logSpanStart

// Module 12517
import _mod12484 from "module_12484" /* 12484 */;
import _mod12507 from "module_12507" /* 12507 */;


export const logSpanEnd = function logSpanEnd(spanContext) {
  if (_mod12507.DEBUG_BUILD) {
    const tmpResult = _mod12484;
    const spanToJSONResult = tmpResult.spanToJSON(spanContext);
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
    let str3 = "";
    const tmpResult2 = _mod12484;
    if (tmpResult2.getRootSpan(spanContext) === spanContext) {
      str3 = "root ";
    }
    const _HermesInternal = HermesInternal;
    const combined = "[Tracing] Finishing \"" + str2 + "\" " + str3 + "span \"" + str + "\" with ID " + spanId;
    const logger = tmp(12479).logger;
    logger.log(combined);
  }
};
export const logSpanStart = function logSpanStart(spanContext) {
  let description2;
  let op2;
  if (_mod12507.DEBUG_BUILD) {
    const tmpResult = _mod12484;
    const spanToJSONResult = tmpResult.spanToJSON(spanContext);
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
    const spanId = spanContext.spanContext().spanId;
    const tmpResult4 = _mod12484;
    const spanIsSampledResult = tmpResult4.spanIsSampled(spanContext);
    const tmpResult5 = _mod12484;
    const rootSpan = tmpResult5.getRootSpan(spanContext);
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
    items[2] = "ID: " + spanId;
    if (parent_span_id) {
      const _HermesInternal5 = HermesInternal;
      items.push("parent ID: " + parent_span_id);
    }
    if (rootSpan !== spanContext) {
      const tmpResult6 = _mod12484;
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
    const logger = tmp(12479).logger;
    const _HermesInternal9 = HermesInternal;
    logger.log("" + combined + "\n  " + items.join("\n  "));
  }
};
