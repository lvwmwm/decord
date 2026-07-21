// Module ID: 837
// Function ID: 9316
// Name: logSpanEnd
// Dependencies: []

// Module 837 (logSpanEnd)
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.logSpanEnd = function logSpanEnd(spanContext) {
  if (arg1(arg6[0]).DEBUG_BUILD) {
    const spanToJSONResult = arg1(arg6[1]).spanToJSON(spanContext);
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
    const obj = arg1(arg6[1]);
    let str3 = "";
    if (obj2.getRootSpan(spanContext) === spanContext) {
      str3 = "root ";
    }
    const _HermesInternal = HermesInternal;
    const combined = "[Tracing] Finishing \"" + str2 + "\" " + str3 + "span \"" + str + "\" with ID " + spanId;
    const debug = arg1(arg6[2]).debug;
    debug.log(combined);
    const obj2 = arg1(arg6[1]);
  }
};
arg5.logSpanStart = function logSpanStart(spanContext) {
  let description2;
  let op2;
  if (arg1(arg6[0]).DEBUG_BUILD) {
    const spanToJSONResult = arg1(arg6[1]).spanToJSON(spanContext);
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
    const obj = arg1(arg6[1]);
    const obj2 = arg1(arg6[1]);
    const spanIsSampledResult = arg1(arg6[1]).spanIsSampled(spanContext);
    const rootSpan = arg1(arg6[1]).getRootSpan(spanContext);
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
      const obj5 = arg1(arg6[1]);
      ({ op: op2, description: description2 } = arg1(arg6[1]).spanToJSON(rootSpan));
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
      const spanToJSONResult1 = arg1(arg6[1]).spanToJSON(rootSpan);
    }
    const debug = arg1(arg6[2]).debug;
    const _HermesInternal9 = HermesInternal;
    debug.log("" + combined + "\n  " + items.join("\n  "));
    const obj3 = arg1(arg6[1]);
  }
};
