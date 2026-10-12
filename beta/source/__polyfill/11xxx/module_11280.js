// Module ID: 11280
// Function ID: 11281
// Dependencies: [11279]
// Exports: getTraceMetaTags

// Module 11280
import _mod11279 from "module_11279" /* 11279 */;


export const getTraceMetaTags = function getTraceMetaTags() {
  const obj = _mod11279;
  const entries1 = entries(obj.getTraceData());
  const mapped = entries1.map((item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    return "<meta name=\"" + tmp + "\" content=\"" + tmp2 + "\"/>";
  });
  return mapped.join("\n");
};
