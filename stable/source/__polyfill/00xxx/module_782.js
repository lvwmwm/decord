// Module ID: 782
// Function ID: 783
// Dependencies: [781]
// Exports: getTraceMetaTags

// Module 782
import _mod781 from "module_781" /* 781 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const getTraceMetaTags = function getTraceMetaTags(arg0) {
  let traceData = arg0;
  const _Object = Object;
  if (!arg0) {
    const tmp2 = require;
    const obj = _mod781;
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
};
