// Module ID: 12078
// Function ID: 12079
// Dependencies: [12077]
// Exports: getTraceMetaTags

// Module 12078
import _mod12077 from "module_12077" /* 12077 */;


export const getTraceMetaTags = function getTraceMetaTags() {
  const obj = _mod12077;
  const entries1 = entries(obj.getTraceData());
  const mapped = entries1.map((item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    return "<meta name=\"" + tmp + "\" content=\"" + tmp2 + "\"/>";
  });
  return mapped.join("\n");
};
