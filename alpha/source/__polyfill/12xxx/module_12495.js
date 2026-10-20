// Module ID: 12495
// Function ID: 12496
// Dependencies: [12494]
// Exports: getTraceMetaTags

// Module 12495
import _mod12494 from "module_12494" /* 12494 */;


export const getTraceMetaTags = function getTraceMetaTags() {
  const obj = _mod12494;
  const entries1 = entries(obj.getTraceData());
  const mapped = entries1.map((item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    return "<meta name=\"" + tmp + "\" content=\"" + tmp2 + "\"/>";
  });
  return mapped.join("\n");
};
