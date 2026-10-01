// Module ID: 770
// Function ID: 771
// Dependencies: [769]
// Exports: getTraceMetaTags

// Module 770
import _mod769 from "module_769" /* 769 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const getTraceMetaTags = function getTraceMetaTags(arg0) {
  let traceData = arg0;
  const _Object = Object;
  if (!arg0) {
    const tmp2 = require;
    const obj = _mod769;
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
