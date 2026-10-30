// Module ID: 769
// Function ID: 770
// Dependencies: [768]
// Exports: getTraceMetaTags

// Module 769
import _mod768 from "module_768" /* 768 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export function getTraceMetaTags(arg0) {
  let traceData = arg0;
  const _Object = Object;
  if (!arg0) {
    const tmp2 = require;
    const obj = _mod768;
    traceData = obj.getTraceData();
  }
  const entries1 = entries(traceData);
  const mapped = entries1.map((item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    return "<meta name=\"" + tmp + "\" content=\"" + tmp2 + "\"/>";
  });
  return mapped.join("\n");
}
