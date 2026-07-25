// Module ID: 6349
// Function ID: 57094
// Name: logSpanEnd
// Dependencies: [6339, 6316, 6311]

// Module 6349 (logSpanEnd)
const require = arg1;
const dependencyMap = arg6;
arg5.logSpanEnd = function logSpanEnd(spanContext) {
  if (require(6339).DEBUG_BUILD) {
    const spanToJSONResult = require(6316) /* spanTimeInputToSeconds */.spanToJSON(spanContext);
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
    const obj = require(6316) /* spanTimeInputToSeconds */;
    let str3 = "";
    if (obj2.getRootSpan(spanContext) === spanContext) {
      str3 = "root ";
    }
    const _HermesInternal = HermesInternal;
    const combined = "[Tracing] Finishing \"" + str2 + "\" " + str3 + "span \"" + str + "\" with ID " + spanId;
    const logger = require(6311) /* consoleSandbox */.logger;
    logger.log(combined);
    obj2 = require(6316) /* spanTimeInputToSeconds */;
  }
};
arg5.logSpanStart = function logSpanStart(spanContext) {
  let description2;
  let op2;
  if (require(6339).DEBUG_BUILD) {
    const spanToJSONResult = require(6316) /* spanTimeInputToSeconds */.spanToJSON(spanContext);
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
    const obj = require(6316) /* spanTimeInputToSeconds */;
    const obj2 = require(6316) /* spanTimeInputToSeconds */;
    const spanIsSampledResult = require(6316) /* spanTimeInputToSeconds */.spanIsSampled(spanContext);
    const rootSpan = require(6316) /* spanTimeInputToSeconds */.getRootSpan(spanContext);
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
      const obj5 = require(6316) /* spanTimeInputToSeconds */;
      ({ op: op2, description: description2 } = require(6316) /* spanTimeInputToSeconds */.spanToJSON(rootSpan));
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
      const spanToJSONResult1 = require(6316) /* spanTimeInputToSeconds */.spanToJSON(rootSpan);
    }
    const logger = require(6311) /* consoleSandbox */.logger;
    const _HermesInternal9 = HermesInternal;
    logger.log("" + combined + "\n  " + items.join("\n  "));
    const obj3 = require(6316) /* spanTimeInputToSeconds */;
  }
};
